var MailListener = require("mail-listener2");
 
var mailListener = new MailListener({
  username: "uk_envoi_mgh@yahoo.co.uk",
  password: "fousiane0",
  host: "imap.mail.yahoo.com",
  port: 993, // imap port 
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
  mailbox: "Bulk Mail", // mailbox to monitor 
  searchFilter: ["UNSEEN"], // the search filter being used after an IDLE notification has been retrieved 
  markSeen: true, // all fetched email willbe marked as seen and not fetched next time 
  fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`, 
  mailParserOptions: {streamAttachments: true}, // options to be passed to mailParser lib. 
  attachments: false, // download attachments as they are encountered to the project directory 
  attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments 
});

var mailListener2 = new MailListener({
  username: "us_envoi_mgh@yahoo.com",
  password: "fousiane0",
  host: "imap.mail.yahoo.com",
  port: 993, // imap port 
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
  mailbox: "Bulk Mail", // mailbox to monitor 
  searchFilter: ["UNSEEN"], // the search filter being used after an IDLE notification has been retrieved 
  markSeen: true, // all fetched email willbe marked as seen and not fetched next time 
  fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`, 
  mailParserOptions: {streamAttachments: true}, // options to be passed to mailParser lib. 
  attachments: false, // download attachments as they are encountered to the project directory 
  attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments 
});
 
mailListener.start(); // start listening 
mailListener2.start(); // start listening 
// stop listening 
//mailListener.stop(); 
 
mailListener.on("server:connected", function(){
  console.log("imapConnected");
});
 
mailListener.on("server:disconnected", function(){
  console.log("imapDisconnected");
});
 
mailListener.on("error", function(err){
  console.log(err);
});
 
mailListener.on("mail", function(mail, seqno, attributes){
  // do something with mail object including attachments 
  console.log("emailParsed", mail);
  // mail processing code goes here 
});
 
mailListener.on("attachment", function(attachment){
  console.log(attachment.path);
});
 

 
mailListener2.on("server:connected", function(){
  console.log("imapConnected");
});
 
mailListener2.on("server:disconnected", function(){
  console.log("imapDisconnected");
});
 
mailListener2.on("error", function(err){
  console.log(err);
});
 
mailListener2.on("mail", function(mail, seqno, attributes){
  // do something with mail object including attachments 
  console.log("emailParsed", mail);
  // mail processing code goes here 
});
 
mailListener2.on("attachment", function(attachment){
  console.log(attachment.path);
});

// it's possible to access imap object from node-imap library for performing additional actions. E.x. 
//mailListener.imap.move(:msguids, :mailboxes, function(){})