
module.exports = (connection, Sequelize) => {
    const Block = connection.define("block", {
        text: { type: Sequelize.STRING },
    })
    return Block;
}
