require("dotenv").config();
const mongoose = require("mongoose");

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  mongoose.connect(
    process.env.MONGO_CONNECT_URL,
    {
      dbname: "nodejs",
    },
    (error) => {
      if (error) {
        console.log("Fail connect MongoDB", error);
      } else {
        console.log("Success connect MongoDB");
      }
    }
  );
};

mongoose.connection.on("error", (error) => {
  console.error("mongoDB connect error");
});
mongoose.connection.on("disconnected", () => {
  console.error("try connect mongoDB...");
  connect();
});

module.exports = connect;
