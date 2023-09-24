const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  value:{type:String,required:true},
  completed:{type:Boolean,default:false},
  dateCreated: {type:Date,default:Date.now()}
});

const listModel = new mongoose.model("DB_todolist",listSchema);

module.exports = listModel;
