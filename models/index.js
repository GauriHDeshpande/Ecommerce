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
db.category = require('./product.models.js')(db.sequalize, sequalize);

/**
 * db = {
 * Sequalize:
 * sequalize:
 * category:
 * }
 */
module.exports = db;
