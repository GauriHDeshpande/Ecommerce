/**
 * This file will contain the routing logic for the category controller.
 */

const { requestValidator, authJwt } = require("../middelwares");
const categoryController = require("../controllers/category.controller");
// const { validateCategoryRequest } = require("../middelwares/requestValidator");

module.exports = function (app) {
    // Route for the POST request to create a category
    app.post("/ecom/api/v1/categories", [requestValidator.validateCategoryRequest, authJwt.verifyToken, authJwt.isAdmin], categoryController.create);
    // app.post("/ecom/api/v1/categories", validateCategoryRequest);

    // Route for the GET request to fetch all the categories
    app.get("/ecom/api/v1/categories", categoryController.findAll);

    // Route for the GET request to fetch a category based on category id
    app.get("/ecom/api/v1/categories/:id", categoryController.findOne);

    // Route for the PUT request to update a category based on id
    app.put("/ecom/api/v1/categories/:id", [requestValidator.validateCategoryRequest, authJwt.verifyToken, authJwt.isAdmin], categoryController.update);
    // app.put("/ecom/api/v1/categories/:id", validateCategoryRequest);

    // Route for the DELETE request to delete a category based on the id
    app.delete("/ecom/api/v1/categories/:id", [authJwt.verifyToken, authJwt.isAdmin],categoryController.delete);
}
