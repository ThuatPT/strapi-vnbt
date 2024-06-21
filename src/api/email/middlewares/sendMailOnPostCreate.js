const nodemailer = require('nodemailer');

module.exports = strapi => {
  return {
    initialize() {
      const sendEmail = async (to, subject, body) => {
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
          text: body
        });

        console.log('Đã gửi thông điệp: %s', info.messageId);
      }

      strapi.app.use(async (ctx, next) => {
        // Execute the middleware logic before the controller's action
        await next();

        // Execute the middleware logic after the controller's action
        // Here you can call your sendEmail function
        await sendEmail('to@example.com', 'Subject', 'Body');
      });
    },
  };
};
