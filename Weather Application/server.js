const express=require("express")
const app=express();
const https=require("https");
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
  // var url="https://api.openweathermap.org/data/2.5/weather?q=Leh&appid=24b1fb1772c0bc89b77b413f1231695d&units=metric"
  res.sendFile(__dirname+"/index.html")
  // https.get(url,function(res){
  //   res.on("data",function(data){
  //     console.log(JSON.stringify(JSON.parse(data)))
  //   })
  //   res.on("error",function(error){
  //     console.log(error)
  //   })
  // })
})

app.post("/",function(res,req){
  req.write("<h1>Weather Application</h1>")
  var city=res.body.city;
  var url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=24b1fb1772c0bc89b77b413f1231695d&units=metric"
  https.get(url,function(res){
    res.on("data",function(data){
      var info=JSON.parse(data)
      var temp=info.main.temp
      var desc=info.weather[0].description
      var icon=info.weather[0].icon
      var imgUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
      console.log(info)
      req.write("<p>Weather is "+desc+" with temperature at "+temp+"</p>")
      req.write("<img src="+imgUrl+">")
      req.write("<a href='/'>Click</button>")
      req.send()
    })
  })
})

app.listen(3000,function(){
  console.log("server running on port 3000")
})
