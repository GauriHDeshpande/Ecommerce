/**
 * This file will contains the routes logic for the product resource
 */

const {requestValidator} = require("../middelwares")
const productController = require("../controllers/product.controller");
// const { validateProductRequest } = require("../middelwares/requestValidator");
module.exports = function (app) {
    app.post("/ecom/api/v1/products", [requestValidator.validateProductRequest], productController.create);
    // app.post("/ecom/api/v1/products", validateProductRequest);

    app.get("/ecom/api/v1/products", productController.findAll);

    app.get("/ecom/api/v1/products/:id", productController.findOne);

    app.put("/ecom/api/v1/products/:id", [requestValidator.validateProductRequest], productController.update);
    // app.put("/ecom/api/v1/products/:id", validateProductRequest);

    app.delete("/ecom/api/v1/products/:id", productController.delete);
}