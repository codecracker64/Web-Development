const express = require("express");
const router = express.Router();
const listModel = require("../Models/listModel");

router.get("/",async (req,res)=>{ // should return all todo items
try{
    const fetchedItems= await listModel.find(); // without async await, throws Converting circular structure to JSON error
    res.json(fetchedItems);
    console.log("items fetched");
  }
  catch(err){
    res.json(err);
  }
})

// .post("/", async (req,res)=>{ // should add a new todo item
//   try{
//     const item = new listModel({
//       id:1,
//       value:"Coding is not that easy"
//     });
//
//     await item.save();
//     console.log("items saved to DB");
//   }
//   catch(err){
//     console.log(err);
//   }
// })

.delete("/",(req,res)=>{ //should delete a todo item

})


module.exports = router;
