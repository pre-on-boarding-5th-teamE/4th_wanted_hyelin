require("dotenv").config();

const { createApp } = require("./app");
const connect = require("./src/schemas");

const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;
  connect();
  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();
