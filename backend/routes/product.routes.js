/**
 * This file will contains the routes logic for the product resource
 */

const { requestValidator, authJwt } = require("../middelwares")
const productController = require("../controllers/product.controller");

module.exports = function (app) {
    app.post("/ecom/api/v1/products", [requestValidator.validateProductRequest, authJwt.verifyToken, authJwt.isAdmin], productController.create);

    app.get("/ecom/api/v1/products", productController.findAll);

    app.get("/ecom/api/v1/products/:id", productController.findOne);

    app.put("/ecom/api/v1/products/:id", [requestValidator.validateProductRequest, authJwt.verifyToken, authJwt.isAdmin], productController.update);

    app.delete("/ecom/api/v1/products/:id", [authJwt.verifyToken, authJwt.isAdmin], productController.delete);

    app.get("/ecom/api/v1/categories/:categoryId/products", productController.getProductUnderCategory)
}