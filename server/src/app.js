require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const Urls = require("./routers/routes");
/* Middlewares */
app.use("/tinder", Urls);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server Running On port ${port}`);
});
