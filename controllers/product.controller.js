let { productService }= require("./../services/product.service");

function create(request, response){

    if(!request.body.name){
        response.setHeader('content-type', 'application/json');
        response.writeHead(400);
        response.end(JSON.stringify({
            message : "Either body is not correct or present"
        }))
    }

    const product = {
        name : request.body.name,
        description : request.body.description,
        price : request.body.price,
        category_id : request.body.category_id
    };

    productService
    .createProduct(product)
    .then((product) => {
        console.log("Product inserted ", product);
        let returnValue = product.dataValues;
        returnValue.message = 'Product inserted successfully';
        response.writeHead(201);
        response.end(JSON.stringify(returnValue));
    })
    .catch((err) => {
        console.log("Error occured while craeting product ", err);
        response.writeHead(500);
        response.end(JSON.stringify({
            message : "error occured"
        }));
    });
}

function findAll(request, response){
    productService.getProducts()
    .then((products) => products.map((product) => product.dataValues))
    .then((products) => {
        console.log("Products fetched ", products);
        let returnValue = products;
        returnValue.message = 'Products  fetched successfully';
        response.writeHead(200);
        response.end(JSON.stringify(returnValue));
    })
    .catch((err) => {
        console.log("Error occured while fetching products ", err);
        response.writeHead(500);
        response.end(JSON.stringify({
            message : "error occured"
     }))
    });
}


function findOne(request, response){
    let productId = Number(request.params.id);

    if(!productId){
        response.setHeader('content-type', 'application/json');
        response.writeHead(400);
        response.end(JSON.stringify({
            message : "Unknown value for productId"
        }))
    }

    productService
    .getProductById(productId)
    .then((product) => {
        console.log("Product fetched ", product);
        let returnValue = product.dataValues;
        if(returnValue){
            returnValue.message = 'Product fetched successfully';
        }else{
            returnValue.message = 'No product found with given id ';
        }
        
        response.writeHead(200);
        response.end(JSON.stringify(returnValue));
    })
    .catch((err) => {
        console.log("Error occured while fetching product ", err);
        response.writeHead(500);
        response.end(JSON.stringify({
            message : "error occured"
     }))
    });
}


function update(request, response){
    let productId = Number(request.params.id);

    if(!productId){
        response.setHeader('content-type', 'application/json');
        response.writeHead(400);
        response.end(JSON.stringify({
            message : "Unknown value for productId"
        }))
    }

    if(!request.params.name){
        response.setHeader('content-type', 'application/json');
        response.writeHead(400);
        response.end(JSON.stringify({
            message : "body should be present"
        }));
    }

    let productBody = {
        name : request.body.name,
        category_id : request.body.category_id
    }

    productService
    .updateProduct(productBody, productId)
    .then((product) => {
        console.log("Product updated ", product);
        let returnValue = product;
        returnValue.message = 'Product updated successfully';
        response.writeHead(200);
        response.end(JSON.stringify(returnValue));
    })
    .catch((err) => {
        console.log("Error occured while updating product ", err);
        response.writeHead(500);
        response.end(JSON.stringify({
            message : "error occured"
     }))
    });
}


function deleteProduct(request, response){
    let productId = Number(request.params.id);

    if(!productId){
        response.setHeader('content-type', 'application/json');
        response.writeHead(400);
        response.end(JSON.stringify({
            message : "Unknown value for productId"
        }))
    }

    productService
    .deleteProductById(productId)
    .then((product) => {
        console.log("Product deleted ", product);
        let returnValue = product;
        returnValue.message = 'Product deleted successfully';
        response.writeHead(200);
        response.end(JSON.stringify(returnValue));
    })
    .catch((err) => {
        console.log("Error occured while deleting  product ", err);
        response.writeHead(500);
        response.end(JSON.stringify({
            message : "error occured"
     }))
    });
}



module.exports = {
    create,
    findAll,
    findOne,
    update,
    deleteProduct
}