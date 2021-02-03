const fs = require("fs");
const url = require('url');
function file(filename,res){
  fs.readFile(filename,(err,data)=>{
    if(err){
      throw err
    }
    else{
      
      res.end(data)
    }
  })
}
function routing (req,res){
  const path = url.parse(req.url).pathname;
  
    switch(path){
      case '/':
        res.writeHead(200, {'content-Type': 'text/html'})
        file('index.html',res)
         
        
        break;
        case '/index.css':
          res.writeHead(200, {'content-Type': 'text/css'})
          file('./index.css',res)
          break;
        case '/index.js':
          res.writeHead(200, {'content-Type': 'application/js'})
          file('./index.js',res)
          break;
          default :
          res.end("this page doesn't found")
          break;
    };
  
 
}
module.exports = routing;
/*  I have question ? how can i add content-Type for each file from file function because i tried that but i cant find the correct sentax to target the type of each one  */