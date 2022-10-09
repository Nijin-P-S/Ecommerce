let express = require('express');
let categoryRouter = express.Router();

let { categoryService }= require("./../services/category.service");
let { executeWithSync }  = require('./../connections/sequelize.connection')


categoryRouter.get('/', (request, response)=>{
   executeWithSync(categoryService
   .getCategories()
   .then((data)=>{
        return data.map((single) =>  single.dataValues)
   })
   .then((data) => {
        response.setHeader('content-type', 'application-json');
        response.writeHead(200);
        response.send(data);
   })
   .catch((err) => {
    response.setHeader('content-type', 'application-json');
    response.writeHead(500);
    console.log("Error occured while fetching categories: " + err); 
    response.end(JSON.stringify({
        message : "error occured"
    }));
   }));
})

categoryRouter.post('/', (request, response)=>{
    executeWithSync(categoryService
    .createCategories(request.body)
    .then((data)=>{
        return data.map((single) =>  single.dataValues)
   })
    .then((data) => {
         response.setHeader('content-type', 'application-json');
         response.writeHead(200);
         response.send(JSON.stringify(data));
    })
    .catch((err) => {
     response.setHeader('content-type', 'application-json');
     response.writeHead(500);
     console.log("Error occured while creating category: " + err); 
     response.end(JSON.stringify({
         message : "error occured"
     }));
    }));
 })


module.exports = {
    categoryRouter
}
