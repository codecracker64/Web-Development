const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ToDoListDB");

const ListSchema = new mongoose.Schema({
    item:String
  });
  
const Items = new mongoose.model("List Item",ListSchema);

Items.find({},function(err,foundItems){
    if(err){
      console.log("error in finding items from model");
    }
    console.log(foundItems);

  })