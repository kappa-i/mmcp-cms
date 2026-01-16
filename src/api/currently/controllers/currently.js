'use strict';

/**
 * currently controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::currently.currently');
