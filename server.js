/*
    -express is a library that would be used for routing purposes
*/

const serverConfig = require('./configs/server.config');
const express = require('express');

const app = express();

// app.get('/', (request, response) => {
//     response.writeHead(200);
//     response.end();
// });


app.listen(serverConfig.PORT, ()=>{
    console.log(`Server started successfully on PORT : ${serverConfig.PORT}`);
})