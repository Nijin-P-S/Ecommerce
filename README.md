# Ecommerce Application
This project is a Backend of an Ecommerce Application, which has the below defined functionalities:  
  -> Signup as new user, Signin to add products to cart.  
  -> Filter the available products based on price and categories. 
  -> The Admin role has the below defined functionality:  
     * Delete a product. 
     * Create a product entry. 
     * Create a new category entry. 
     * Delete an existing category entry. 
    
    
 ## Tech Stack
 -> NodeJS.<br/> 
 -> Express. 
 -> MySQL. 
 -> Sequelize. 
 -> Jest. 
   
 # To run the project in your local device. 
 -> Clone the github repo to your local device.  
 -> Run **npm install** in the folder you cloned the  project, this installs all the required dependencies.  
 -> Change the Database values in the .env file. 
 -> Type **npm start** in the terminal and enter to run the application.  
   
 # For DEMO testing. 
 The application is hosted in heroku : "https://ecommerce-api-nijinps.herokuapp.com/". 
 The various API endpoints are :  
 -> To get all the products : "https://ecommerce-api-nijinps.herokuapp.com/ecomm/api/v1/products". 
 -> To get all the categories : "https://ecommerce-api-nijinps.herokuapp.com/ecomm/api/v1/categories". 
 -> To get category by ID : "https://ecommerce-api-nijinps.herokuapp.com/ecomm/api/v1/categories/3". 
 -> To signup (POST Method , need to provide name, email and password fields) : "https://ecommerce-api-nijinps.herokuapp.com/ecomm/api/v1/auth/signup".  
 -> To signin (POST Method, need to provide email and password) : "https://ecommerce-api-nijinps.herokuapp.com/ecomm/api/v1/auth/signin". 
 -> To create cart (POST, need to signin and also provide JWT token received) : "https://ecommerce-api-nijinps.herokuapp.com/ecomm/api/v1/carts". 
   
   
 Thank you.  
