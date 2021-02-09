const express = require('express');
const app = express();
const path = require("path")
const axios = require("axios");
const exphbs = require("express-handlebars");
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.use(express.json()); 
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) =>{
  res.render('index');
});

app.post('/weather',(req, res) =>{
  const cityName =req.body.cityName;
  if(!cityName ){
    return res.status(400).end(`Please write valid cityName`)
  }
  res.send(cityName)
  res.status(201)
  
});
 
const PORT =process.env.PORT || 8080;
app.listen(PORT,()=>console.log("server is running on port ",PORT))
