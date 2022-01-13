require("dotenv").config();
const express = require("express");
const app = express();
module.exports = app;

require("./MVC/modules/auth");
require("./MVC/modules");
require("./MVC/entities");

const server = app.listen(process.env.PORT || 5050, () => {
  console.log(`listening port ${process.env.PORT || 5050}`);
});
