var Imap = require('imap');
const fs = require('fs-extra')
var inspect = require('util').inspect;
const simpleParser = require('mailparser').simpleParser;
const pdf = require('pdf-parse')
const userInfo = require('./user')


var imap = new Imap({
  user: userInfo.user,
  password: userInfo.password,
  host: 'imap.qq.com',
  port: 993,
  tls: true
});

function openInbox(cb) {
  imap.openBox('INBOX', false, cb);
}


function listBoxes() {
  imap.once('ready', () => {
    imap.getBoxes(function (err, boxes) {
      console.log(boxes)
      imap.end();
    });
  })

  imap.connect();
}

function readMails() {
  return new Promise(resolve => {
    var list = []
    imap.once('ready', function () {
      openInbox(function (err, box) {
        if (err) throw err;
        imap.search(['UNSEEN'], function (err, results) {
          if (err) throw err;

          var f = imap.fetch(results, {bodies: ''});
          f.on('message', function (msg, seqno) {
            var prefix = '(#' + seqno + ') ';
            msg.on('body', function (stream, info) {
              var filename = './mails/msg-' + seqno + '-body.txt'
              list.push(filename)
              stream.pipe(fs.createWriteStream(filename));
            });

            msg.once('end', function () {
              console.log(prefix + 'Finished');
            });
          });
          f.once('error', function (err) {
            console.log('Fetch error: ' + err);
          });
          f.once('end', function () {
            console.log('Done fetching all messages!');
            imap.end();
            resolve(list)
          });
        });
      });
    })

    imap.connect();
  })
}


function saveAsPDF(filename, buf) {
  var ws = fs.createWriteStream(filename)
  ws.write(buf)
  ws.end()
}


function parseMail(source) {
  simpleParser(source, (err, parsed) => {
    if (err) {
      throw new Error(err)
    }

    if (parsed.attachments.length) {
      parsed.attachments.forEach(attachment => {
        pdf(attachment.content).then(function (data) {
          saveAsPDF(`./pdfs/${+new Date()}.pdf`, attachment.content)
          var content = data.text
          console.log(content)
        })
      })
    }
  });
}

function run() {
  readMails().then((list) => {
    list.forEach(file => {
      parseMail(fs.readFileSync(file))
    })
  })
}

run()