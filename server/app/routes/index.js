/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require("../api");

module.exports = function (app) {
  app.route("/products").get(api.products);
  app.route("/filters").get(api.filters);
  app.route("/categories").get(api.categories);
  app.route("/breadcrumbs").get(api.breadcrumbs);
  app.route("/productById").get(api.productById);
};

