const express = require("express")
const bodyParser=require("body-parser")
const app=express();

app.use(bodyParser.urlencoded({extended:true})) //we use this line everytime we need to use body parser.

// app.get("/",function(req,res){
//   res.sendFile(__dirname+"/calculator.html")
// })
//
// app.post("/",function(req,res){
//   var n1=Number(req.body.n1)
//   var n2=Number(req.body.n2)
//   var result=n1*n2
//   res.send("result :"+result)
// })

app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html")
  console.log(__dirname)
})

app.post("/bmiCalculator",function(req,res){
  var weight=Number(req.body.weight);
  var height=Number(req.body.height);
  var bmi=(weight/(height*height),2);
  res.send("Calculated BMI is: "+bmi)
})


app.listen(3000)
