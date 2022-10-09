const {Sequelize} = require('sequelize');
const dbConfig = require('../configs/db.config')

function createConnection(){
    let sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,
    {
        host : dbConfig.HOST,
        dialect : dbConfig.dialect,
        define : {
            timestamps : false
        },
        pool : dbConfig.pool
    });

    sequelize.authenticate().then(() => {
        console.log("Connected successfully");
    }).catch((err)=> {
        console.log("Error occured in connecting to database");
    });

    return {sequelize};
}

let {sequelize} = createConnection();

function executeWithSync(promiseCallBack){
    sequelize.sync().then(()=>promiseCallBack);
}

module.exports = {sequelize,executeWithSync};

