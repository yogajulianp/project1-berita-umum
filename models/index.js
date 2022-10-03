const { Sequelize, DataTypes } = require('sequelize');

//sql server
const sequelize = new Sequelize('NodeDB', 'yoga', '1234', {
    dialect: 'mssql',
    dialectOptions: {
      // Observe the need for this nested `options` field for MSSQL
      options: {
        // Your tedious options here
        useUTC: false,
        dateFirst: 1,
      },
    },
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.news = require('./news')(sequelize, Sequelize);
db.coments = require('./coment')(sequelize, Sequelize);
db.users = require('./users')(sequelize, Sequelize);



module.exports = db;
