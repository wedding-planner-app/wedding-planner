'use strict';
require('dotenv').config();
const nodemailer = require('nodemailer');

async function main() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Wedding Planner" <vanessalyn.taylor@gmail.com>',
    to: 'vtaylor.txtech@gmail.com', // list of receivers. **Connect to guestlist
    subject: 'Wedding Invitation',
    text: '',
    html: '<b><h1>You Are Cordially Invited to MR & MRS...</h1></b>',
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main().catch(console.error);
