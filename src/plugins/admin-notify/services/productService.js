// File: ./plugins/my-plugin/services/productService.js
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a new product with attachments
   * @param {Object} productData - Data for the new product including attachments
   * @returns {Promise<Object>} - Newly created product object
   */
  async createProduct(productData) {
    const { attachments, ...restData } = productData;

    // Process attachments if present
    if (attachments && attachments.length > 0) {
      // Logic to handle attachments, e.g., saving to Media Library
      console.log('Attachments:', attachments);
    }

    // Create product in Strapi
    const createdProduct = await strapi.query('product').create(restData);

    return sanitizeEntity(createdProduct, { model: strapi.models.product });
  },
};
