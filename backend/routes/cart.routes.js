const {authJwt} = require("../middelwares");
const cartController = require("../controllers/cart.controller");

module.exports = function(app) {
    app.post("/ecom/api/v1/carts", [authJwt.verifyToken], cartController.create);
    app.put("/ecom/api/v1/carts/:cartId", [authJwt.verifyToken], cartController.update);
    app.get("/ecom/api/v1/carts/:cartId", [authJwt.verifyToken], cartController.getCart);
    app.delete("/ecom/api/v1/carts/:cartId", [authJwt.verifyToken], cartController.delete);
    app.put("/ecom/api/v1/carts/:cartId/:status", [authJwt.verifyToken, authJwt.isAdmin], cartController.changeCartStatus);
}