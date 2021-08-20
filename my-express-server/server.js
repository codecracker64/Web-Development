
const express=require("express");
const app=express();

app.get("/",function(req,res){
  res.sendFile("/home/rishabh/Documents/Web Development/Calculator/bmiCalculator.html");
});

app.listen(3000);
