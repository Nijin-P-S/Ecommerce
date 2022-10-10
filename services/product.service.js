const { productSchema } = require('../models/product.model')
const { categorySchema } = require('../models/category.model');

class ProductService{
    constructor(){
        this.schema = productSchema
    }
     
    createProduct(product){
        return this
        .schema
        .create(product);
    }

    getProducts(){
       return this
        .schema
        .findAll({
            include : [
                {
                    required : true ,
                    model : categorySchema
                }
            ]
        });
    }

    getProductById(id){
        return this
        .schema
        .findOne({
            where : {
                id : id
            },
            include : [
                {
                    required : true ,
                    model : categorySchema
                }
            ]
        })
    }

    updateProduct(updatedProduct, id){
        return this.schema
        .update(
            updatedProduct, {
                returning : true,
                where : {
                    id : id
                }
            }
        )
    }

    deleteProductById(id){
        return this
        .schema
        .destroy({
            where : {
                id : id
            }
        });
    }

}


let productService = new ProductService();

module.exports = {
    productService
}