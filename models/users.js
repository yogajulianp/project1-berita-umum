module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("usersProject1", {
        name: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
		},
		username: {
			type: Sequelize.STRING
		},
        password: {
			type: Sequelize.STRING
		}		
    })
    return User
}