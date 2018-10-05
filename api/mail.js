const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const sendMail = ({ email, subject, text }) => {
  const mailTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    private: true,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD
    }
  });
  const mailOptions = {
    from: '"Pierre Huyghe" <yourgmailaddress@gmail.com>',
    bcc: email,
    subject: subject,
    text: text
  };
  return mailTransport.sendMail(mailOptions);
};

module.exports = sendMail;
