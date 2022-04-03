//2 functions defined in 2 different ways, both are correct. 

// console.log(module);

// module.exports="hello World"  //will set dt in app.js to hello world

// module.exports=getDate(); //avoid this, because when module will be required, the funcion will be called.
// module.exports=getDate;   // this would assign function to the requiring variable and it can be called like: dt();

// module.exports=[getDate,sum]; // this statement bound the function to the var that is requiring this module as an array

module.exports.getDate=getDate;  //this will assign it to requiring variable as a js object.

module.exports.getDay=function(){   
  const date= new Date()
  const options={
    weekday:'long'
  }
  // console.log(date.toLocaleDateString("en-US",options));
  return date.toLocaleDateString("en-US",options);  //returning directly, aoiding extra variable.
  }

function getDate(){
const date= new Date()
const options={
  weekday:'long',
  day:'numeric',
  year:'numeric',
  month:'long'
}
const day=date.toLocaleDateString("en-US",options);
console.log(day);
return day;
}