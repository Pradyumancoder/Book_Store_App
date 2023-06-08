const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Disabling strict mode for queries

const ConnectDB = () => {
  mongoose
    .connect(process.env.MongoDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server ${data.connection.host}`);
    });
};

module.exports = ConnectDB;
