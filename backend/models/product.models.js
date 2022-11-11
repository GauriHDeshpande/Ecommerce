/**
 * This file will be use to represent the product scheema
 * product fields :
 * 1. id:
 * 2. name:
 * 3:
 * description:
 * 4. cost:
 */



module.exports = (sequalize, Sequalize) =>{
    const Product = sequalize.define("product", {
        id:{
            type:Sequalize.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : Sequalize.STRING,
            allowNull : false
        },
        description : {
            type: Sequalize.STRING
        },
        cost :{
            type : Sequalize.INTEGER,
            allowNull:false
        }
    },{
        tableName :'products'
    })
    return Product;
}