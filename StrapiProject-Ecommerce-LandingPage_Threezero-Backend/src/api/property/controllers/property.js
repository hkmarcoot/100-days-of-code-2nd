//const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
"use strict";

/**
 * property controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::property.property");

// module.exports = {
//   /**
//    * Create a record.
//    *
//    * @return {Object}
//    */

//   async create(ctx) {
//     let entity;
//     if (ctx.is("multipart")) {
//       const { data, files } = parseMultipartData(ctx);
//       data.user = ctx.state.user.id;
//       entity = await strapi.services.property.create(data, { files });
//     } else {
//       ctx.request.body.user = ctx.state.user.id;
//       entity = await strapi.services.property.create(ctx.request.body);
//     }
//     return sanitizeEntity(entity, { model: strapi.models.property });
//   },
// };
