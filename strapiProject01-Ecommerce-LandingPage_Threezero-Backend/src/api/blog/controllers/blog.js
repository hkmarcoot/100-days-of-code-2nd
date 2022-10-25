"use strict";

/**
 * blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", {
  getCount(ctx) {
    var { query } = ctx.request;
    //return strapi.query("api::blog.blog").count({ where: query });
    return strapi.entityService.count("api::blog.blog", query);
  },
});
