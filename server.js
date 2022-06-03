
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
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
/**
 * Initializing the database
 */
const db = require("./models");
const Category = db.category;

db.sequalize.sync({force:true})
.then(() => {
    console.log('Tables dropped and created')
    init();
})

function init()
{
    var categories = [
        {
        name: "Electronics",
        description: "This category will contain all the electronic products"
        },
        {
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
}
require('./routes/category.routes')(app)

app.listen(serverConfig.PORT, () => {
    console.log(`Application started on the port no : ${serverConfig.PORT}`)
})