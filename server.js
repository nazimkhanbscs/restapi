const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// //Database connection 
// require("./mongo")


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:ayansahilhiba123@cluster0.6xelu.mongodb.net/StdMgr?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology:true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


//Model 
require("./model/Post")

//Middleware
app.use(bodyParser.json())



const Post = mongoose.model("Post")

 app.get("/posts", async (req, res)=>{
 try {
    const posts = await Post.find({})
     res.send(posts)
 } catch (error) {
    res.status(500)
 }
 })

 app.post("/posts", async (req,res)=>{

       // console.log(req.body)
    try {
        
        const post = new Post();
        post.title = req.body.title;
        post.content = req.body.content;
       await post.save();
       res.send(post)

    } catch (error) {
        res.status(500)
    }

      
 })


 app.listen(3001, ()=>{

     console.log("Server  ins running on port 3001");
 })


