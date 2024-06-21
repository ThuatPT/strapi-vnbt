const nodemailer = require('nodemailer');

async function sendEmail(to, subject, body) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: `"Tên của bạn" <${process.env.EMAIL_USER}>`,
    to: to,
    subject: subject,
    text: body,
  });

  console.log('Đã gửi thông điệp: %s', info.messageId);
}

module.exports = sendEmail;
