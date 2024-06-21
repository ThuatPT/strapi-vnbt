// File: ./plugins/my-plugin/hooks/myCustomMiddleware.js
module.exports = (strapi) => {
  return {
    async initialize() {
        console.log('chay vao hoook');
      // Đăng ký middleware để xử lý yêu cầu POST đến endpoint cụ thể
      const middleware = async (ctx, next) => {
        if (ctx.request.method === 'POST' && ctx.request.url.includes('api::product.product')) {
          // Lấy chi tiết của bài đăng từ request body
          const postDetails = ctx.request.body;
            console.log('Post details:', postDetails);
          try {
            // Gửi email khi có bài đăng mới
            await strapi.plugins['my-plugin'].services.emailService.sendEmail(postDetails);
          } catch (err) {
            console.error('Error sending email:', err);
            // Xử lý lỗi nếu cần thiết
            ctx.throw(500, 'Error sending email');
          }
        }

        await next();
      };

      // Đăng ký middleware vào ứng dụng Strapi
      strapi.app.use(middleware);
    },
  };
};
