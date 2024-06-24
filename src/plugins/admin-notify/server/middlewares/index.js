module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    console.log('Request server:', );
    
    // console.log('Request received:', ctx.router.url);
    

    try {
      await next();
      console.log('render');
    } catch (err) {
      console.error('Error sending email:', err);
      ctx.status = 500;
      ctx.body = { error: 'Failed to send email' };
    } 

  };
};