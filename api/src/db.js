require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = () => {
  const MONGODB = process.env.MONGODB;
  const connectionString = MONGODB
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  //devuelve promesa
  .then(() => {
      console.log('Database connected to ATLAS')
  })
  .catch((err) => {
      console.error('Connection Error: ', err)
  })
};

    module.exports = dbConnect;
    