module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    console.log('Request Thuat :', );
    // khi vào router http://localhost:1337/admin/plugins/admin-notify thì chạy 
    //  đã chạy vào đây 
    console.log('Request received:', ctx.router.url);
    

    try {
      await next();
      console.log('Thuat toan');
    } catch (err) {
      console.error('Error sending email:', err);
      ctx.status = 500;
      ctx.body = { error: 'Failed to send email' };
    }
  };
};