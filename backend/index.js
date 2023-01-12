const express = require("express");
const bodyParser = require("body-parser");
const routesHandler = require("./routes/handler");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routesHandler); // handling backend-routes

const port = 4000; // backend routing PORT

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
