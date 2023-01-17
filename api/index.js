require('dotenv').config();
const cors = require('cors');

const server = require('./src/app')

const dbConnect = require('./src/db')

//const morgan = require('morgan')

//server.use(morgan("dev"));

server.use(cors({origin: '*'}));


// port va a buscar un puerto que nos de el servicio de hosting donde deployamos, si no, toma el que le pasemos
// const PORT = process.env.PORT || 9000;


server.listen("9000", () => {
    console.log("listening on port 9000")
})

dbConnect();