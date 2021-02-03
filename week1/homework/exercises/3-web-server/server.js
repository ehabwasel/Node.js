/* i divide the server functions into two files one for the server code and the function of sending response in the files module and i add js file and some css and html :) */ 
const http = require("http");
const routing = require("./files");
const server = http.createServer(routing);

server.listen(3000,()=>{
  console.log(`server is running....`)
});


