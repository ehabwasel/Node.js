const express = require('express')
const app = express();
const path = require('path')
app.use(express.json())
const fs = require("fs");
app.use(express.urlencoded({extended:false}))
const { title } = require('process');



// YOUR CODE GOES IN HERE

//get all files inside the blogs folder
app.get('/blogs', function (req, res) {
  fs.readdir(path.join(__dirname, "/blogs"), (err, files) => {
    res.send(files)
  });
});
// validation of content 
function validation (req,res){
  if(typeof req.body.title === "undefined" || typeof req.body.content === "undefined" ||typeof req.body === "undefined")
  {
    return true; 
  } 
};
//add new blogs
app.post('/blogs', (req, res) => {
  const newBlog = {
    title: req.body.title,
    content: req.body.content,
   };
  fs.writeFileSync(path.join(__dirname, "/blogs", `${req.body.title}.txt`),`title:${newBlog.title} \n content:${newBlog.content}`);
  res.end(`ok file ${req.body.title} is created` );
})
// update blogs
app.put('/blogs/:title', (req, res) => {
  const filePath = path.join(__dirname,"/blogs",`${req.params.title}.txt`)
  const  fileExists = fs.existsSync(filePath);
  if (validation(req)){
    res.status(400).end(`Please check the body title and content`)
  }
    if (fileExists ) {
    fs.writeFileSync(filePath,`title:${req.body.title}\n content:${req.body.content}`);
    res.end(`ok file ${req.body.title} is updated`)
  }
  else {
    res.status(400).end(" Please check path of file")
  }
});
// delete the blogs
app.delete('/blogs/:title', (req, res) => {
  const filePath = path.join(__dirname,"/blogs",`${req.params.title}.txt`)
  const  fileExists = fs.existsSync(filePath);
  if (fileExists) {
    fs.unlinkSync(filePath);
    res.end(`ok file ${req.body.title} is deleted`);
  }
  else {
    res.status(404).end(`this file in not found`)
  };
});
 let PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log(`server is working on port ${PORT} :)`))