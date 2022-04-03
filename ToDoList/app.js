const express = require('express')
const bodyParser=require('body-parser')
const ejs = require('ejs')
const app = express()
const mongoose=require('mongoose')
const dt = require(__dirname+"/date.js"); //this goes into the module and runs all the code in it.
// console.log(dt)

// dt();   //if one function assigned.

//let d=dt[0]
//d();            //works if requiring variable is an array importing multiple function

// dt.getDate();    //if dt is a js object.

mongoose.connect("mongodb://localhost:27017/ToDoListDB");

const ListSchema = new mongoose.Schema({
  item:String
});

const Items = new mongoose.model("List Item",ListSchema);

// console.log(Items.find({},function(){}))

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine','ejs')

let list=[]
// let date= new Date()
// let options={
//   weekday:'long',
//   day:'numeric',
//   year:'numeric',
//   month:'long'
// }
// let day=date.toLocaleDateString("en-US",options)     //moved this entire peice of code into a new module and required it.


app.get('/',function(req,res){
  // res.sendFile(__dirname+'/index.html')
  // res.render('home',{date:dt.getDay(),list:list})
  Items.find({},function(err,foundItems){
    if(err){
      console.log("error in finding items from model");
    }
    // console.log(foundItems);
    res.render('home',{date:dt.getDay(),list:foundItems});
  })
})


app.post('/',function(req,res){
  let input=req.body.item
  list.push(input)

  let item = new Items({
    item:input
  })
  Items.insertMany([item],function(err){
    if(err){
      console.log(err)
    }
  })
  
  res.redirect('/');
})

app.post('/delete',function(req,res){
  console.log("req body:",req.body);
  let itemId=req.body.checkBox;
  console.log("itemId:",itemId)
  Items.deleteOne({_id:itemId},function(err,item){
    console.log("item inside deleteOnde Function:",item);
    if(err){
      console.log("error");
    }
    console.log("deleted");
  })
  res.redirect('/')
})


app.listen(3000,function(){
  console.log("server is running")
})
