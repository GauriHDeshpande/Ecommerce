/**
 * This file will be used for the following purpose :
 * 1. Create the DB connection with the help of sequalize
 * 2. Explore all the functionality of model through the file.
 * 
 * one of the advantages of using index.js file is, oher file trying to import this file, just need to provide the model name.
 */

const config = require("../configs/db.config");
const sequalize = require("sequelize");

/**
 * Creating the db connection.
 */

const seq = new sequalize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host : config.HOST,
        dialect : config.dialect
    }

);

const db = {};
db.Sequelize = sequalize;
db.sequalize = seq;
db.category = require('./category.models.js')(db.sequalize, sequalize);
db.product = require('./product.models.js')(db.sequalize, sequalize);
db.user = require('./user.models.js')(db.sequalize, sequalize);
db.role = require('./role.models.js')(db.sequalize, sequalize);
db.cart = require('./cart.models.js')(db.sequalize, sequalize);


/**
 * Establish the relationship between user and role.
 */

db.role.belongsToMany(db.user, {
    through : "user_roles",
    foreignKey : "roleId",
})
db.user.belongsToMany(db.role, {
    through : "user_roles",
    foreignKey : "userId",
})

/**
 * Relationship between Cart and Products : Many to Many.
 */

db.product.belongsToMany(db.cart, {
    through: "cart_products",
    foreignKey: "productId"
})
db.cart.belongsToMany(db.product, {
    through: "cart_products",
    foreignKey: "cartId"
})

/**
 * Relationship between Cart and User :
 */

db.user.hasMany(db.cart);
db.ROLES = ["user", "admin"]

module.exports = db;
