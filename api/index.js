require('dotenv').config();
const cors = require('cors');
const server = require('./src/app')
const dbConnect = require('./src/db')
const morgan = require('morgan')

//server.use(morgan("dev"));
//server.use(cors());
// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

// port va a buscar un puerto que nos de el servicio de hosting donde deployamos, si no, toma el que le pasemos
// const PORT = process.env.PORT || 9000;

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

server.listen("9000", () => {
    console.log("listening on port 9000")
})

dbConnect();