const express=require("express")
const ejs=require("ejs")
const bodyParser=require("body-parser")
const _=require("lodash")
const { lowerCase } = require("lodash")
const app=express();
const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/BlogDB");

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine',"ejs") //this line sets defaule view engine as ejs(ejs alternative is pug) so we do not have to type .ejs extendion when rendering a file


const homeContent="This is Blog site curated to create small blogs. click on 'compose',  Awaken the writer inside you and go wild."
const aboutContent="Nulla facilisi. Pellentesque nec nisl nulla. Ut urna felis, euismod et sem et, pharetra aliquam augue. Maecenas quis ultricies justo, ac fringilla massa. Ut at tortor in urna mattis vulputate. Praesent in nunc eget orci laoreet luctus quis nec tortor. Suspendisse mattis molestie mi vel fringilla. Cras eget turpis ut est pulvinar consequat et malesuada lacus. Quisque a libero quis velit interdum placerat tincidunt sit amet diam. Fusce risus est, volutpat sed efficitur sit amet, ultricies ut enim. Phasellus sed ex quis neque consequat aliquet. Quisque volutpat porta posuere. Nunc mi magna, scelerisque at dignissim a, luctus ut metus"
const contactContent="Vivamus porta rutrum metus. Mauris pharetra luctus ante, in sollicitudin neque rutrum at. Phasellus maximus accumsan mauris, non maximus tellus dignissim eu. Etiam mollis, tortor et porta tempus, mauris felis sodales erat, et tristique velit lorem vulputate nibh. Cras tincidunt dictum molestie. Aenean blandit et nunc sit amet facilisis. Pellentesque eleifend tristique euismod."

let posts= []

const postSchema= new mongoose.Schema({
  title:String,
  body:String
})

const Items = mongoose.model("Blog",postSchema);


app.get('/',function(req,res){
  console.log("entered /")
  // res.render("home.ejs", {homeinfo:home})
  // res.render('home',{home:homeContent,posts:posts}) //we can also name both the key value pair the same
  Items.find({},(err,foundItems)=>{
    if(!err){
      console.log(foundItems);
      res.render('home',{home:homeContent,posts:foundItems});
    }
  })
})

app.get('/about',function(req,res){
  res.render('about',{about:aboutContent})
})

app.get("/contact",function(req,res){
  res.render('contact',{contact:contactContent})
})
app.get("/compose",function(req,res){
  res.render('compose')
})

app.post("/compose",function(req,res){
  let postTitle=_.lowerCase(req.body.postTitle);
  let postBody=req.body.postBody;
  const post= new Items({
    title:postTitle,
    body:postBody
  })
  post.save((err)=>{
    if(!err){
      res.redirect("/");
    }
  })
  // posts.push(post);
  
})

app.get("/posts/:post",function(req,res){
  id=req.params.post;
  Items.findOne({_id:id},(err,foundItems)=>{
    if(!err){
      res.render('posts',{title:foundItems.title,body:foundItems.body});
    }
  })

  // posts.forEach(function(post){
  //   console.log("post array.title="+post.title)
  //   if(_.lowerCase(post.title)==_.lowerCase(url)){
  //     res.render('posts',{
  //       title:post.title,
  //       body:post.body
  //     })
  //   }
  // })
})


app.listen(3000,function(){
  console.log("server is  up")
})
