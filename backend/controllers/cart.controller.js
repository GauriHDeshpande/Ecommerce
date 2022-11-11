// const { product, cart } = require("../models");
const db = require("../models");
const Product = db.product;
const Cart = db.cart;
const Op = db.sequalize.Op;
const {STATUS} = require('../configs/cart.status.config');

exports.create = (req, res) => {

    const cart = {
        userId: req.userId,  // We are getting this id from middeleware
        status: STATUS.CREATION
    };
    Cart.create(cart)
        .then(cart => {
            res.status(201).send(cart);
        })
        .catch(err => {
            res.status(500).send({
                message: "Some internal server error occured...!"
            })
        })
}

exports.update = (req, res) => {
    const cartId = req.params.id;
    Cart.findByPk(cartId)
        .then(cart => {
            Product.findAll({
                where: {
                    id: req.body.productIds
                }
            })
                .then(items => {
                    if (!items) {
                        res.status(400).send({
                            message: "Items trying to add does not exist"
                        })
                    }
                    cart.setProducts(items)
                        .then(() => {
                            var cost = 0;
                            const ProductSelected = [];
                            cart.getProducts()
                            .then(products => {
                                for (let i = 0; i < products.length; i++) {
                                    cost = cost + products[i].cost;
                                    ProductSelected.push({
                                        id: products[i].id,
                                        name: products[i].name,
                                        cost: products[i].cost
                                    });
                                }
                                res.status(200).send({
                                    id: cart.id,
                                    productSelected: ProductSelected,
                                    cost: cost
                                })
                            })
                        })
                })
                .catch(err => {
                    res.status(500).send({
                        message: "Some Internal error Occured while fetching product details"
                    })
                })
        })
        .catch(err => {
            res.status(500).send({
                message: "Some internal server error happened while fetching cart details !"
            })
        })
}

exports.getCart = (req, res) => {
    Cart.findByPk(req.params.cartId)
        .then(cart => {
            var cost = 0;
            const ProductSelected = [];
            cart.getProducts()
                .then(products => {
                    for (let i = 0; i < products.length; i++) {
                        cost = cost + products[i].cost;
                        ProductSelected.push({
                            id: products[i].id,
                            name: products[i].name,
                            cost: products[i].cost
                        })
                    }
                    res.status(200).send({
                        id: cart.id,
                        productSelected: ProductSelected,
                        cost: cost,
                        status: cart.status
                    })
                })
        })
}

/**
 * delete the existing cart based on cart id
 */

 exports.delete = (req, res) => {
    const cartId = req.params.cartId;
    Cart.destroy({
        where: {
            id: cartId
        }
    })
        .then(result => {
            res.status(200).send({
                message: "Successfully deleted the cart"
            })
        })
        .catch(err => {
            res.status(500).send({
                message: "Some internal error while deleting the cart based on id"
            })
        })
}

exports.changeCartStatus = (req, res) => {
    const cart = {
        id: req.params.id,
        status: req.params.status,
        userId: req.userId
    };
    const cartId = req.params.cartId

    Cart.update(cart, {
        where: {
            id: cartId
        }
    })
    .then(updateCart => {
        Cart.findByPk(cartId)
        .then(cart => {
            res.status(200).send(cart);
        })
        .catch(err => {
            res.status(500).send({
                message: "Some Internal Server Error while fetching the cart status based on cart id"
            })
        })
    })
}

/**
 * 1. Feature to add quantity of products also in the cart.
 * 2. Implement API to update the quantity in the cart.
 */
