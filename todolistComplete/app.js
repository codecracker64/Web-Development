const express = require("express");
const bodyParser = require("body-parser");
const todolistRoute = require("./Routes/todolistRoute");
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require('cors');
const listModel = require("./Models/listModel");

const app = express();

//Midlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
// app.use('/todolist',todolistRoute);

//connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION, ()=>{
  console.log("connected to TodoList DB");
})

//Routes
app.get("/",async (req,res)=>{
  try{
    const fetchedItems = await listModel.find();
    res.json(fetchedItems);
    console.log("get request was made to server to fetch items")
  }
  catch(err){
    console.log(err);
  }
})

.post("/", async (req,res)=>{ // should add a new todo item
  try{
    console.log(req.body.input);
    const item = new listModel({
      value:req.body.input
    });
    console.log(`item ID ${item.id} stored in DB`);
    await item.save();
    res.send(item)
  }
  catch(err){
    console.log(err);
  }
})

.delete("/", async (req,res)=>{
  console.log("delete req body",req.body);
  try{
    const item = await listModel.findOneAndDelete({_id:req.body.id});
    console.log("deleted:",item)
    //always put a return statement
    res.send(item);
  }
  catch(err){
    console.log("error in delete:",err)
  }
})

.put("/", async (req,res)=>{
  console.log("put req body:",req.body);
  try{
    const item = await listModel.findOneAndUpdate({_id:req.body.id},{completed:req.body.completeStatus},{new:true});
    console.log(item);
    res.send(item);
  }
  catch(err){
    console.log("put req error:",err);
  }
})


//listen on port
const port = 5000
app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
})
