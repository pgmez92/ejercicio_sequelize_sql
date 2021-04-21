const Sequelize = require('sequelize');

//crear la conexion a mysql
const URI = `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const connection = new Sequelize(URI, { timestamps: false })

//crear un obj para sincronizar la bdd
const db = {};
db.Sequelize = Sequelize;
db.connection = connection;

//modelos de la bdd
db.user = require("./User.model.js")(connection, Sequelize);
db.block = require("./Block.model.js")(connection, Sequelize);

//relaciones entre tablas
db.user.hasMany(db.block, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
db.block.belongsTo(db.user);

//sincronizar sequelize
db.connection.sync();

//exportamos el obj db
module.exports = db;

/* const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIAL,
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    // SQLite only
    storage: 'path/to/database.sqlite'
});

// Or you can simply use a connection uri
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname'); */

//x ejemplo, esto en mongodb seria mongodb://admin:123@localhost:27017/baseDatos
//x ejemplo, esto en mysql seria mysql://admin:123@localhost:3306/baseDatos

/*esto de a continuacion da erro*/
/* const connection = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`); */

/* const connection = new Sequelize(`mysql://sequelize:123@localhost:3306/sequelize`);

module.exports = connection; */


