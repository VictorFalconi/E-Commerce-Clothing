require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = () => {
  const MONGODB = process.env.MONGODB;
  mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("Connected to DB"))
    .catch((err) => {
      console.error("ERROR:", err);
    });
};

    module.export = dbConnect;
    