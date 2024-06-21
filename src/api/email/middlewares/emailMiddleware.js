

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {

    try {
      await next();
      console.log('Email sent Ngoai');
    } catch (err) {
      console.error('Error sending email:', err);
      ctx.status = 500;
      ctx.body = { error: 'Failed to send email' };
    }
  };
};
