var gamePattern=[]
var userClickedPattern=[]
var buttonColours = ["red", "blue", "green", "yellow"];
var started=false;
level=0;


$(".box").click(function userClickedSequence(event){
  console.log("userClickedFunction is called")
  // userChosenColor=this.id;
  userChosenColor=$(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound("sounds/"+userChosenColor+".mp3");
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
})

$(document).keydown(function(){
  console.log("a Key is pressed")
  if(!started){
    started=true;
    $("#level-title").text("Level "+level);
    nextSequence();
  }
})

function nextSequence(){
  console.log("nextSequence is called");
  console.log("level-"+level)
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level "+level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("." + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound("sounds/" + randomChosenColour + ".mp3");
}

function playSound(argument){
  console.log("playSound is called")
  var audio = new Audio(argument);
  audio.play()
}

function animatePress(currentColor){
  console.log("animatePress is called")
  $("#"+userChosenColor).addClass("pressed")
  setTimeout(function(){
      $("#"+currentColor).removeClass("pressed")},100)
}

function checkAnswer(currentLevel){
  console.log("checkAnswer is called");
  console.log(gamePattern);
  console.log(userClickedPattern);
  if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
    console.log("correct");
    if(userClickedPattern.length==gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000)
    }
  }
  else{
    console.log("Wrong input");
    gameOver();
  }
}

function gameOver(){
  console.log("gameOver is called");
  started=false;
  level=0;
  gamePattern=[];
  playSound("sounds/wrong.mp3");
  $("body").addClass("gameOver");
  $("#level-title").text("Game over. Press any key to start again.");
  setTimeout(function(){
    $("body").removeClass("gameOver")},100);
}
