const ImapClient = require('emailjs-imap-client')
const userInfo = require('./user')

var client = new ImapClient.default('imap.qq.com', 993, {
  auth: {
    user: userInfo.user,
    pass: userInfo.password
  },
  useSecureTransport: true
});
client.connect().then(() => {
  /* ready to roll */
  console.log('connected')
  client.selectMailbox('INBOX').then((inbox)=>{
    client.listMessages('INBOX', '1:50', ['uid', 'flags']).then((messages) => {
      messages.forEach((message) => console.log('Flags for ' + message.uid + ': ' + message.flags.join(', ')));
      client.close()
    }).catch((err)=>{
      console.log(err)
      client.close()
    });
  })
});

client.onerror = function(error){
  console.log(error)
}

// client.logout().then(() => { /* connection terminated */ });
// client.close().then(() => { /* connection terminated */ });

client.connect()


