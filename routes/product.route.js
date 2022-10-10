const productController = require('./../controllers/product.controller');

module.exports = function (app) {

    //Route for the POST request to create the product
    app.post("/ecomm/api/v1/products", productController.create);

    //Route for the GET request to fetch all the products
    app.get("ecomm/api/v1/products", productController.findAll);

    //Route for the GET request to fetch product based on id
    app.get("ecomm/api/v1/products/:id", productController.findOne);

    //Route for the PUT request to update product based on the id
    app.put("ecomm/api/v1/products/:id", productController.update);

    //Route for the DELETE equest to delete a product based on the id
    app.delete("ecomm/api/v1/products/:id", productController.deleteProduct);

}