const express = require('express');
const app=express();
const mongoose = require('mongoose');
require('dotenv/config');
const postRoute = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');

//Mongo DB connection using dotenv package
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log('connected to db');
})

//Midleware - function that executes when a route is hit

/* app.use('/posts',(req,res)=>{
    console.log("middleware for posts executing");
})
 */
app.use(cors());
app.use(bodyParser.json()); //this middleware has to be before '/posts' otherwise it will not work
app.use('/posts',postRoute);


//Routes
app.get('/',(req,res)=>{
    res.send("You are on root Route");
})



//listen on port 3000
app.listen(3000,()=>{
    console.log("listening on port 3000");
})



// write this in codePEn to fetch data from outside
/* fetch('http://localhost:3000/posts')
.then(data=>{
  return data.json();
})
.then(result=>{
  console.log(result)
}) */