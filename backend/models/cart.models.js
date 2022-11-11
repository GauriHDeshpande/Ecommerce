
module.exports = (sequalize, Sequalize) => {
    const Cart = sequalize.define("cart", {
        id: {
            type: Sequalize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status:{
            type:Sequalize.STRING,
            allowNull: false
        }
    });
    return Cart;
}