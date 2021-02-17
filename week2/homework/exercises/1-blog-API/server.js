const express = require('express');
const app = express();
const path = require('path');
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
const { title } = require('process');



// YOUR CODE GOES IN HERE
// git one blog by title

app.get('/blogs/:title' ,( req , res ) => {
   let file = req.params.title;

   if(fs.existsSync (path.join(__dirname,'/blogs',`${file}`))){

     const blog = fs.readFileSync(path.join(__dirname,`blogs`,`${file}`))
     res.send(blog).status(200)
   }
   else{
    res.status(404).end(`Please check the title of blog`)
   }
  
})

//get all files inside the blogs folder

app.get('/blogs', function (req, res) {
  
  fs.readdir(path.join(__dirname, "/blogs"), (err, files) => {
    if(err){
      console.log(err)
      return;
    }
    res.send(files)
  });
});
// notValid of content 
function notValid (req,res){
  if(typeof req.body.title == "undefined" || typeof req.body.content == "undefined" ||typeof req.body == "undefined")
  {
    return true; 
  } 
};
//add new blogs
app.post('/blogs', (req, res) => {
  if(notValid(req)){
    res.status(400).end(`Please check the content `);
    return;
  }
  else{
     const newBlog = {
        title: req.body.title,
        content: req.body.content,
    };
    fs.writeFileSync(path.join(__dirname, "/blogs", `${req.body.title}.txt`),`title:${newBlog.title} \n content:${newBlog.content}`)
    res.setHeader('content-Type', 'application/json')
    res.end(`ok file ${req.body.title} is created` );
  }
});
// update blogs
app.put('/blogs/:title', (req, res) => {
  const filePath = path.join(__dirname,"/blogs",`${req.params.title}.txt`);
  const  fileExists = fs.existsSync(filePath);
  if (fileExists ) {
  fs.writeFileSync(filePath,`title:${req.body.title}\n content:${req.body.content}`);
  res.end(`ok file ${req.body.title} is updated`)
}
  if (notValid(req)){
    res.status(400).end(`Please check the body title and content`)
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

 let PORT = process.env.PORT || 3000 ;

app.listen( PORT,()=> console.log(`server is working on port ${PORT} :)`));