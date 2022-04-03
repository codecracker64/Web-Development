

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsdb");

const fruitSchema = new mongoose.Schema({
  name:{type:String,required:[true,"please check data entry, No name specified"]},
  rating:{
    type:Number,
    min:0,
    max:5
  },
  review: String
})

const Fruit = mongoose.model("Fruit",fruitSchema); // this function automatically appends a 's' into the string, so the
                                                   // so the collection will be showing as Fruits in database

const fruit = new Fruit({
  name:"Grapes",
  rating:4.5,
  review:"Green juice filled balls"
})

fruit.save();       //Every time this line executes a duplicate value will be stored, so commected out.

const apple = new Fruit({
  name:"Apple",
  rating: 4,
  review:"An apple a day keeps a doctor away"
})

const Avacado = new Fruit({
  name:"Avacado",
  rating:5,
  review:"Expensive in the indian market"
})

const DragonFruit = new Fruit({
  name:"DragonFruit",
  rating:5,
  review:"Exoctic fruit"
})

// Fruit.insertMany([apple,Avacado,DragonFruit],function(){});

Fruit.find({},function(err,fruits){
  if(err){
    console.log("Error in finding documents in fruits model");
  }
  else{
    mongoose.connection.close(function(){
      console.log("closing mongoose connection, please wait...")
    })
    fruits.forEach(function(fruit){
      console.log(fruit.name)
    })
  }
})
