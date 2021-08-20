var n1=Math.floor(Math.random()*6)+1
var n2=Math.floor(Math.random()*6)+1
var diceImage1="dice"+n1+".png"
var diceImage1path="images/"+diceImage1;
var selectTag=document.querySelectorAll("img")[0]
selectTag.setAttribute("src",diceImage1path)

var diceImage2="images/dice"+n2+".png"
document.querySelectorAll("img")[1].setAttribute("src",diceImage2)
// document.querySelectorAll("img")[1].setAttribute("src","images/dice"+Math.floor(Math.random()*6)+1+".png")  ANOTHER METHOD

if(n1>n2){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins"
}
else if(n2>n1){
  document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else{
  document.querySelector("h1").innerText="Draw!";
}
document.querySelectorAll(".refresh")[0].addEventListener("click",function(){window.location.reload();})

// myfuntion(){
//   randomNum1 = Math.floor(Math.random()*6)+1
//   randomNum2 = Math.floor(Math.random()*6)+1
//   if(randomNum1>randomNum2){
//     document.getElementsByTagName('h1')[0].innerText="🚩 Player 1 wins"
//   }
//   else(
//       document.getElementsByTagName('h1')[0].innerText="Player 2 wins 🚩"
//   )
//   if(randomNum1===1){
//     document.getElementsByClassName('dice1')[0].src="images/dice1.png"
//   }
//   else if(randomNum1===2){
//     document.getElementsByClassName('dice1')[0].src="images/dice2.png"
//   }
//   else if(randomNum1===3){
//     document.getElementsByClassName('dice1')[0].src="images/dice3.png"
//   }
//   else if(randomNum1===4){
//     document.getElementsByClassName('dice1')[0].src="images/dice4.png"
//   }
//   else if(randomNum1===5){
//     document.getElementsByClassName('dice1')[0].src="images/dice5.png"
//   }
//   else{
//     document.getElementsByClassName('dice1')[0].src="images/dice6.png"
//   }
//   if(randomNum2===1){
//     document.getElementsByClassName('dice2')[0].src="images/dice1.png"
//   }
//   else if(randomNum2===2){
//     document.getElementsByClassName('dice2')[0].src="images/dice2.png"
//   }
//   else if (randomNum2===3) {
//     document.getElementsByClassName('dice2')[0].src="images/dice3.png"
//   }
//   else if (randomNum2===4) {
//     document.getElementsByClassName('dice2')[0].src="images/dice4.png"
//   }
//   else if (randomNum2===5) {
//     document.getElementsByClassName('dice2')[0].src="images/dice5.png"
//   }
//   else{
//     document.getElementsByClassName('dice2')[0].src="images/dice6.png"
//   }
// }
