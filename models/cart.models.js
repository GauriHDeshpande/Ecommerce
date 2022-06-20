
module.exports = (sequalize, Sequalize) => {
    const Cart = sequalize.define("cart", {
        id: {
            type: Sequalize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });
    return Cart;
}