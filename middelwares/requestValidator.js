
const db = require("../models");
const Category = db.category;

const validateCategoryRequest = (req, res, next) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Name of the category can not be empty !"
        })
    }
    next();
}

const validateProductRequest = (req, res, next) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Name of the category can not be empty !"
        })
        return;
    }
    if (!req.body.cost) {
        res.status(400).send({
            message: "Cost of the category can not be empty !"
        })
        return;
    }
    if (req.body.categoryId) {
        Category.findByPk(req.body.categoryId)  // --> null --> right response --> error
            .then(category => {
                if (!category) { // --> null
                    res.status(400).send({
                        message: "Category id passed is not available"
                    })
                    return;
                }
                next(); // --> right response --> controller
            })
            // If there aries a server error while executing the query.
            .catch(err => {  // --> error
                res.status(500).send({
                    message: "Some internal error while fetching the product details"
                })
            })
    } else {
        res.status(400).send({
            message: "Category Id was not passed"
        })
        return;
    }
}

module.exports = {
    validateCategoryRequest: validateCategoryRequest,
    validateProductRequest: validateProductRequest
}
