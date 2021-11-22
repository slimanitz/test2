require("dotenv").config();
const sequelize = require("./database/db-connection");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use("/client", require("./controller/client-controller"));

const main = async () => {
  await sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");
  app.listen(
    parseInt(process.env.PORT),
    console.log(`listening on port: ${process.env.PORT}`)
  );
};

main();
