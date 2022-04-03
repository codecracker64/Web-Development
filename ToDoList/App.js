const express = require('express');
const bodyParser=require('body-parser');
const ejs = require('ejs');
const app = express();
const mongoose=require('mongoose');
const dt = require(__dirname+"/date.js");
const _ = require("lodash");

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine','ejs')
mongoose.connect("mongodb://localhost:27017/ToDoListDB");

const ListSchema = new mongoose.Schema({
  item:String
});

const customSchema= new mongoose.Schema({
  listName:String,
  items:[ListSchema]
});

const ListItems= new mongoose.model("list Item",ListSchema);

const defaultItem1= new ListItems({
    item:"Click on + icon to add a note"
})

const defaultItems=[defaultItem1];
const DefaultListName="Home";

const customItems= new mongoose.model("Custom Item",customSchema); 


app.get('/',function(req,res){
    ListItems.find({},function(err,foundItems){
        // console.log("route /")
        // console.log(foundItems);
        // if(err){
        //     console.log("Error in Finding items 1")
        // }
        if(!err){
            if(foundItems.length==0){
                const newItem = new ListItems({
                    item:"Click on + icon to add a note"
                })
                newItem.save();
                res.redirect("/");
            }
        }
        // console.log("foundItems 1:"+foundItems);
        res.render('home',{listName:DefaultListName,date:dt.getDay(),listItems:foundItems});
    })
    
}) 

app.get('/:listName',function(req,res){
    let listName=_.capitalize(req.params.listName);
    customItems.findOne({listName:listName},function(err,foundItems){
        // console.log("found Items 2");
        // console.log(foundItems);
        if(!err){
            if(!foundItems){
                // console.log("nothing found");
                const newItem= new customItems({
                    listName:listName,
                    items:defaultItems
                })
                newItem.save();
                res.redirect("/"+listName);
            }
            else{
                // console.log("foundItems 2:"+foundItems);
                res.render('home',{listName:foundItems.listName,date:dt.getDay(),listItems:foundItems.items});
            }  
        } 
    })
})



app.post('/',function(req,res){
    // console.log(req.body);
    let input=req.body.item;
    let listName=req.body.listName;

    const item = new ListItems({
        item:input
    })

    if(listName==DefaultListName){
        item.save();
        res.redirect("/")
    }
    else{
        customItems.findOne({listName:listName},function(err,foundItems){
            foundItems.items.push(item);
            foundItems.save();
            res.redirect("/"+listName);
        })
        
    }

    
    // ListItems.insertMany([item],function(err){
    //     if(!err){
    //         console.log("item inserted successfully");
    //     }
    // })
    // res.redirect("/")
})

app.post("/delete",function(req,res){
    let itemId=req.body.checkBox;
    let listName=req.body.listName;

    if(listName==DefaultListName){
        ListItems.deleteOne({_id:itemId},function(err,item){
            if(err){
            //   console.log("error");
            }
            // console.log("deleted item:"+item.item);
          })
          res.redirect("/");
    }
    else{
        customItems.findOneAndUpdate({listName:listName},{$pull:{items:{_id:itemId}}},function(err,foundItem){
            // console.log(foundItem);
            res.redirect("/"+listName);
        })
    }

    
})


app.listen('3000',function(){
    console.log("SERVER IS UP");
})