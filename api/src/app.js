const express = require('express');
const productRouter = require('./routes/product');
const categoryRouter = require('./routes/category');
const userRouter = require('./routes/user');
const reviewsRouter = require('./routes/reviews');
const cartRouter = require('./routes/cart');
const mercadoPagoRouter = require('./routes/mercadoPago');
const buggyRouter = require('./routes/buggy');
const commentsRouter = require('./routes/comments');
const feedbackRouter = require('./routes/feedback');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const feedback = require('./models/feedback');

const server = express();
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(express.json());
server.use(morgan("dev"));
//server.use(cors());
server.use(cors({origin: '*'}));

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// }); 

//ruta de prueba
// server.get("/people", (req, res) => {
//     res.status(200).send("Estamos en la ruta /people");
// });

server.use('/', productRouter)
server.use('/', categoryRouter)
server.use('/', userRouter)
server.use('/', reviewsRouter)
server.use('/', cartRouter)
server.use('/', mercadoPagoRouter)
server.use('/', buggyRouter)
server.use('/', commentsRouter)
server.use('/', feedbackRouter)

module.exports = server;