/**
 * This file will contains the routes logic for the product resource
 */

const productController = require("../controllers/product.controller")
module.exports = function (app) {
    app.post("/ecom/api/v1/products", productController.create);

    app.get("/ecom/api/v1/products", productController.findAll);

    app.get("/ecom/api/v1/products/:id", productController.findOne);

    app.put("/ecom/api/v1/products/:id", productController.update);

    app.delete("/ecom/api/v1/products/:id", productController.delete);
}