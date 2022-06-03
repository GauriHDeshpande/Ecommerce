/**
 * This file will be used to represent the category scheema
 * category fields :
 * 1. id
 * 2. name
 * 3. description
 */

module.exports = (sequalize, Sequalize) => {
const Category = sequalize.define("category", {
    id : {
        type : Sequalize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : Sequalize.STRING,
        allowNull : false,
    },
    description : {
        type : Sequalize.STRING
    }
},{
    tableName : 'categories'
});
return Category;
}