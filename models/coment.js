module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comentProject1", {
        coment: {
			type: Sequelize.STRING
		},
    })
    return Comment
}