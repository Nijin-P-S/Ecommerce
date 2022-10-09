let express = require('express');
let productRouter = express.Router();

let { productService }= require("./../services/product.service");
let { executeWithSync }  = require('./../connections/sequelize.connection')


productRouter.get('/', (request, response)=>{
   executeWithSync(productService
   .getProducts()
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
    console.log("Error occured while fetching products : " + err); 
    response.end(JSON.stringify({
        message : "error occured"
    }));
   }));
})

productRouter.get('/:id', (request, response)=>{
    executeWithSync(productService
    .getProductById(request.params.id)
    .then((data) => {
         response.setHeader('content-type', 'application-json');
         response.writeHead(200);
         if(data !== null){
            response.send(JSON.stringify(data.dataValues));
         }
        else{
            response.end(JSON.stringify({
                message : "no product found"
            }))
        }
    })
    .catch((err) => {
     response.setHeader('content-type', 'application-json');
     response.writeHead(500);
     console.log("Error occured while fetching products : " + err); 
     response.end(JSON.stringify({
         message : "error occured"
     }));
    }));
 })

productRouter.post('/', (request, response)=>{
    executeWithSync(productService
    .createProduct(request.body)
    .then((data)=>{
        return data.map((single) =>  single.dataValues)
   })
    .then((data) => {
         response.setHeader('content-type', 'application-json');
         response.writeHead(201);
         response.send(JSON.stringify(data));
    })
    .catch((err) => {
     response.setHeader('content-type', 'application-json');
     response.writeHead(500);
     console.log("Error occured while creating productu: " + err); 
     response.end(JSON.stringify({
         message : "error occured"
     }));
    }));
 })


module.exports = {
    productRouter
}
 