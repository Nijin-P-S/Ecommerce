const {DataTypes, FLOAT} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product',{
        id: {
            type : DataTypes.TINYINT,
            primaryKey : true,
            autoIncrement : true
        },
        name: {
            type : DataTypes.STRING,
            allowNull : false
        },
        description: {
            type : DataTypes.STRING
        },
        price : {
            type : DataTypes.FLOAT,
            allowNull : false
        }
    },
    {
        tableName : 'products'
    }
    );
    return Product;
}