'use strict';

/**
 * currently router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::currently.currently');
