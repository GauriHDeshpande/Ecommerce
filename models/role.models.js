


module.exports = (sequalize, Sequelize) => {
    const Role = sequalize.define("roles", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        }
    });
    return Role;
}