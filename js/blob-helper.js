function blob2file(blob, opts) {
  opts = Object.assign({
    lastModifiedDate: new Date(),
    type: ''
  }, opts || {})

  var file = new File([blob], Math.random().toString().slice(3), opts)

  return file
}


function blob2string(blob) {
  return new Promise(resolve=>{
    var reader = new FileReader()
    reader.addEventListener('loadend', function (ev) {
      resolve(ev.target.result)
    })
    reader.readAsText(blob)
  })
}