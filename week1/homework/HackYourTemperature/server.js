const express = require('express');
const axios = require("axios");
const express_handlebars = require("express-handlebars");
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello from backend to frontend!')
});
 
app.listen(3000,()=>{console.log("server is running ....")}); 
