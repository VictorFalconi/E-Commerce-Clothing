const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 
const producRouter = require('./routes/product.js')

const app = express();
// port va a buscar un puerto que nos de el servicio de hosting donde deployamos, si no, toma el que le pasemos
const port = process.env.PORT || 9000;

app.use('/', producRouter)

// Necesito contraseña de la URI
mongoose.connect(process.env.MONGODB)
.then(()=> console.log('Connected to DB'))
.catch((err)=>{
    console.error('ERROR:',err)
})


app.listen(port, () => console.log('Server Listening on port', port));