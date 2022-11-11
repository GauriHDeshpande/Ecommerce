
const expresss = require('express');
const serverConfig = require('./configs/server.config');
const bodyParser = require('body-parser');

// Initialiseing express
const app = expresss();


/**
 * Using the body parser middeleware
 * 
 * Used for parsing the request
 * parsing the request ofthe type json and convert that to object
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/**
 * Initializing the database
 */
const db = require("./models");
const { category } = require('./models');
const Category = db.category;
const product = db.product;
const Role = db.role;

Category.hasMany(product); // This will create a foreign key column (categoryId) in the product table.
db.sequalize.sync({ force: true })
    .then(() => {
        console.log('Tables dropped and created')
        init();
    })

function init() {
    var categories = [
        {
            id: 1,
            name: "Electronics",
            description: "This category will contain all the electronic products"
        },
        {
            id: 2,
            name: "KitchenItem",
            description: "This category will contain all the kitchen products"
        }
    ];
    Category.bulkCreate(categories)
        .then(() => {
            console.log('Category table initialised')
        })
        .catch(err => {
            console.log("Error while initialising categories table");
        })
        /**
         * Adding Roles
         */
        Role.create({
            id: 1,
            name: "user"
        });
        Role.create({
            id:2,
            name: "admin"
        })
}
require('./routes/category.routes')(app);
require('./routes/product.routes')(app);
require('./routes/auth.routes')(app);
require('./routes/cart.routes')(app)

app.listen(serverConfig.PORT, () => {
    console.log(`Application started on the port no : ${serverConfig.PORT}`)
})