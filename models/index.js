const config = require("../configs/db.config");
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorAliases: false,
        pool:{
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Here we are grabbing a function and caling a function
//Here when index.js is initialized, all our schemas will also be initialized
let category = db.category = require('./category.model')(sequelize, Sequelize);
let product = db.product = require('./product.model')(sequelize, Sequelize);

category.hasMany(product, {
    foriegnKey: 'category_id'
});

product.belongsTo('category', {
    foriegnKey : 'category_id'
});

db.category = category;
db.product = product;

module.exports(db);