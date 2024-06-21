// plugins/admin-notify/services/email.js

const nodemailer = require('nodemailer');
require('dotenv').config();

// Tạo một transporter để gửi email
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // Email người gửi
        pass: process.env.EMAIL_PASS, // Mật khẩu ứng dụng Gmail
    },
});
    console.log('Đã gửi email thông báo cho admin thành công');
   
// Hàm gửi email thông báo cho admin
async function sendNotificationEmail(postTitle) {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'phantruongthuatt@gmail;', // Thay bằng email của admin
            subject: 'Thông báo có bài viết mới',
            text: `Có bài viết mới được đăng: ${postTitle}`,
        });
        console.log('Đã gửi email thông báo cho admin thành công');
    } catch (error) {
        console.error('Lỗi khi gửi email:', error);
    }
}

module.exports = {
    sendNotificationEmail,
};
