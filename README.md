# Ecommerce Application
This project is a Backend of an Ecommerce Application, which has the below defined functionalities:  <br/>
  -> Signup as new user, Signin to add products to cart.  <br/>
  -> Filter the available products based on price and categories. <br/>
  -> The Admin role has the below defined functionality:  <br/>
     * Delete a product. <br/>
     * Create a product entry. <br/>
     * Create a new category entry. <br/>
     * Delete an existing category entry. <br/>
    
    
 ## Tech Stack
 -> NodeJS.<br/> 
 -> Express.<br/>
 -> MySQL. <br/>
 -> Sequelize. <br/>
 -> Jest. <br/>
   
 # To run the project in your local device. 
 -> Clone the github repo to your local device.<br/>  
 -> Run **npm install** in the folder you cloned the  project, this installs all the required dependencies.  <br/>
 -> Change the Database values in the .env file. <br/>
 -> Type **npm start** in the terminal and enter to run the application.  <br/>
   
 # Working Model 
 The application is hosted in heroku : "https://ecommerce-api-nijinps.herokuapp.com/". <br/>
 The various API endpoints are :  <br/>
 -> To get all the products : "https://ecommerce-api-nijinps.herokuapp.com/ecomm/api/v1/products". <br/>
 -> To get all the categories : "https://ecommerce-api-nijinps.herokuapp.com/ecomm/api/v1/categories". <br/>
 -> To get category by ID : "https://ecommerce-api-nijinps.herokuapp.com/ecomm/api/v1/categories/3". <br/>
 -> To signup (POST Method , need to provide name, email and password fields) : "https://ecommerce-api-nijinps.herokuapp.com/ecomm/api/v1/auth/signup"<br/>
 -> To signin (POST Method, need to provide email and password) : "https://ecommerce-api-nijinps.herokuapp.com/ecomm/api/v1/auth/signin". <br/>
 -> To create cart (POST, need to signin and also provide JWT token received) : "https://ecommerce-api-nijinps.herokuapp.com/ecomm/api/v1/carts". <br/>
 <br/>  
 <br/>
 Thank you.  
