const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const https=require("https")

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

app.get("/",function(req,res){
  console.log("server is up, Get request made to root (/)")
  res.sendFile(__dirname+"/signup.html")
})

app.get("/fail",function(req,res){
  console.log("Get request made to failure page")
  res.sendFile(__dirname+"/failure.html")
})

app.get("/success",function(req,res){
  console.log("get request made to success page")
  res.sendFile(__dirname+"/success.html")
})

app.post("/",function(req,res){

  //get members from sugnup form um and store in variable
  var email=req.body.EMAIL;
  var fname=req.body.FNAME;
  var lname=req.body.LNAME;

  //Create Json object to pass in api
  var data={
    member:[
      {
        email_address:email,
        status:"subscribed",
        merge_fields:{
          FNAME:fname,
          LNAME:lname
        }
      }
    ]
  }

  //parse json object
  var jsonData=JSON.stringify(data)

  // define parameter options to pass in https.request
  options={
    method:"POST",
    auth:"key:fd45145339aa7a2617166af9890e5864-us5"
  }
  const url="https://us5.api.mailchimp.com/3.0/lists/7dab6215c5"
  const request=https.request(url,options,function(res){
    console.log(res)
    res.on("data",function(data){
      const result=JSON.parse(data)
      // console.log(result)
      // console.log(result.status)
    })
  })

  request.write(jsonData) // i did not define request but i did req, how did it work?
  request.end()
  // console.log(res)
  // console.log(req)
})

app.listen(3000,function(){
  console.log('server is running')
})

//apiKey: fd45145339aa7a2617166af9890e5864-us5
//audinece ID-7dab6215c5
//url: https://us5.api.mailchimp.com/3.0/lists/7dab6215c5/members/fd45145339aa7a2617166af9890e5864/notes
