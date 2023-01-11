const mongoose = require("mongoose");

const { MONGO_URL, MONGO_PASSWORD } = require("./env");

const URL = MONGO_URL.replace("<password>", MONGO_PASSWORD);

const connectDB = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected.");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = connectDB;
