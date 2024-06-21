// module.exports = () => {
//     const { sendNotificationEmail } = strapi.plugins['admin-notify'].services.email;

//     // Đăng ký lifecycle hook `afterCreate` cho model `product`
//     strapi.db.lifecycles.subscribe({
//         models: ['api::product.product'], // Đảm bảo đường dẫn tới model là chính xác
//         console.log('New product created:', result); 
//         afterCreate(event) {
//             const { result } = event;
//             console.log('New product created:', result);
//             sendNotificationEmail(result.title); // Gọi hàm gửi email khi có sản phẩm mới
//         },
//     });
// };
module.exports = () => ({
  async initialize() {
    const strapi = global.strapi;

    // Đăng ký hook myCustomMiddleware
    await strapi.load('myCustomMiddleware');
  },
});


