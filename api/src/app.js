const express = require('express');
const productRouter = require('./routes/product')
const morgan = require('morgan')


const server = express();


server.use(morgan("dev"));

//ruta de prueba
server.get("/people", (req, res) => {
    res.status(200).send("Estamos en la ruta /people");
});


server.use(express.json());

server.use('/', productRouter)











module.exports = server;