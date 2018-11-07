var walk = require('walk');
const pdf = require('pdf-parse')
const path = require('path')
var fs = require('fs-extra');
var walker;

const dist = path.resolve('./dist')

var result = {
  error: [],
  output: [],
  amounts: []
}


function pdfParse(filePath) {
  let dataBuffer = fs.readFileSync(filePath)
  return pdf(dataBuffer).then(function(data) {
    var content = data.text
    var reg = /\n￥(\d+\.\d+)\n/
    var dateReg = /日期.(\w+.\w+.\w+)/
    var date = dateReg.exec(content)[1]
    var res = reg.exec(content)
    const amount = res[1] * 100
    result.amounts.push(amount)
    let newFilePath = path.join(dist, `${date} ￥${amount}.pdf`)

    return new Promise(resolve => {
      fs.copy(filePath, newFilePath).then(() => {
        result.output.push({src: filePath, dist: newFilePath})
        console.log(filePath, newFilePath, 'done')
        resolve()
      }).catch(() => {
        result.error.push(filePath)
        console.error('copy error: ', filePath)
        resolve()
      })
    })
  }).catch(()=>{
    console.error('parse error: ', filePath)
    result.error.push(filePath)
  })
}
async function run() {
  walker = walk.walk(path.join(__dirname, "./fixtures"))
  var promises = []
  fs.emptyDirSync(dist)
  walker.on("file", function (root, fileStats, next) {
    var p = pdfParse(path.join(root, fileStats.name))
    promises.push(p)
    next();
  });

  walker.on("errors", function (root, nodeStatsArray, next) {
    console.log('errors')
    next();
  });

  walker.on("end", function () {
    Promise.all(promises).then(()=>{
      var sum = result.amounts.reduce((a,b)=>a+b)
      fs.writeFileSync('./output.json', JSON.stringify(result, null, 4))
      console.log(sum/100)
      console.log("all done");
    })
  });
}

run()