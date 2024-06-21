// File: ./config/middleware.js

module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    resolve: './src/api/email/middlewares/emailMiddleware', // Register the custom middleware
    config: {
      enabled: true,
      conf: {},
    },
  },
];
