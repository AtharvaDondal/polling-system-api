const mongoose = require("mongoose");

const connectWithDb = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`DB connected successfully`);
    })
    .catch((error) => {
      console.error(`DB connection failed`);
      console.error(error);
      process.exit(1);
    });
};

module.exports = connectWithDb;
