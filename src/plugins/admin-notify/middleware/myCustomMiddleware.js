// File: ./plugins/my-plugin/middleware/myCustomMiddleware.js
const { sendEmail } = require('../utils/emailService');

module.exports = (strapi) => ({
  initialize() {
    strapi.app.use(async (ctx, next) => {
      // Kiểm tra nếu yêu cầu là phương thức POST và đường dẫn chứa chuỗi 'api::product.product'
      if (ctx.request.method === 'POST' && ctx.request.url.includes('api::product.product')) {
        // Lấy chi tiết của bài đăng từ request body (ví dụ)
        const postDetails = ctx.request.body;
        console.log('Post details:', postDetails);
        try {
          // Gửi email khi có bài đăng mới
          await sendEmail(postDetails);
        } catch (err) {
          console.error('Error sending email:', err);
          // Xử lý lỗi nếu cần thiết
        }
      }

      await next();
    });
  },
});
