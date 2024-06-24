'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    
    ctx.body = strapi

      .plugin('admin-notify')
      .service('myService')
      .getWelcomeMessage();
  },
});
