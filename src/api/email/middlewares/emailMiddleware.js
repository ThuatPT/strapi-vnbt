const { sendEmail } = require('../utils/emailService');

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    console.log('Request received:', ctx.request.body);

    await next();

    console.log('URL:', ctx.request.url);
    console.log('Method:', ctx.request.method);

    // Check if the request is a POST request to create a new resource
    if (ctx.request.method === 'POST') {
      // Use a regex to check for the pattern in the URL
      const urlPattern = /^\/content-manager\/collection-types\/api::[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+$/;

      if (urlPattern.test(ctx.request.url)) {
        const postDetails = ctx.request.body;
        console.log('Post details:', postDetails);

        try {
          await sendEmail(postDetails);
          console.log('Email sent successfully');
        } catch (err) {
          console.error('Error sending email:', err);
          ctx.status = 500;
          ctx.body = { error: 'Failed to send email' };
        }
      }
    }
    console.log('Request processed not sending email');
  };
};

