/*
    -express is a library that would be used for routing purposes
*/

const serverConfig = require('./configs/server.config');
const express = require('express');
const { categoryRouter }  = require('./controllers/category.controller');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/category', categoryRouter);
// app.get('/', (request, response) => {
//     response.writeHead(200);
//     response.end();
// });


app.listen(serverConfig.PORT, ()=>{
    console.log(`Server started successfully on PORT : ${serverConfig.PORT}`);
})