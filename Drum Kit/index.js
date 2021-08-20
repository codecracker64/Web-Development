document.addEventListener("keyup",capsLockCheck)
function capsLockCheck(){
  if(event.getModifierState('CapsLock')){
    alert("CapsLock is On ! Apologies but the current page isn't modified to work with caps, please turn it off to make it work!")
  }
}

// console.log(document.querySelectorAll(".drum"))
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",soundOnClick);
}
document.addEventListener("keydown", soundOnKeyPress);

function soundOnClick(){
  console.log(event)
  console.log(this)
  var argument=this.innerHTML;
  makeSound(argument);
    // switch(this.innerHTML){
    //   case "w":
    //     audio=new Audio("sounds/tom-1.mp3");
    //     audio.play();
    //   break;
    //   case "a":
    //     audio=new Audio("sounds/tom-2.mp3");
    //     audio.play();
    //     break;
    //   case "s":
    //     audio=new Audio("sounds/tom-3.mp3");
    //     audio.play();
    //     break;
    //   case "d":
    //     audio=new Audio("sounds/tom-4.mp3");
    //     audio.play();
    //     break;
    //   case "j":
    //     audio=new Audio("sounds/snare.mp3");
    //     audio.play();
    //     break;
    //   case "k":
    //     audio=new Audio("sounds/crash.mp3");
    //     audio.play();
    //     break;
    //   case "l":
    //     audio=new Audio("sounds/Kick-bass.mp3");
    //     audio.play();
    //     break;
    //   default:console.log("Error occured");
    // }
}

function soundOnKeyPress(){
  console.log(event)
  // console.log(this)
  var argument=event.key;
  makeSound(argument);
  // function clickEffect(argument){
  //   document.getElementsByClassName("w")[0].click();
  //   document.getElementsByClassName("w")[0].classList.add("button-active");
  //   setTimeout(function(){document.getElementsByClassName("w")[0].classList.remove("button-active")},100);
  // }
  // clickEffect(argument);
  // switch (event.key) {
  //   case "w":audio=new Audio("sounds/tom-1.mp3");audio.play();break;
  //   case "a":audio=new Audio("sounds/tom-2.mp3");audio.play();break;
  //   case "s":audio=new Audio("sounds/tom-3.mp3");audio.play();break;
  //   case "d":audio=new Audio("sounds/tom-4.mp3");audio.play();break;
  //   case "j":audio=new Audio("sounds/snare.mp3");audio.play();break;
  //   case "k":audio=new Audio("sounds/crash.mp3");audio.play();break;
  //   case "l":audio=new Audio("sounds/Kick-bass.mp3");audio.play();break;
  //   default:cosole.log(event);break;
  // }
}

function makeSound(argument){
  switch (argument){
    case "w":audio=new Audio("sounds/tom-1.mp3");audio.play();document.getElementsByClassName("w")[0].click();document.getElementsByClassName("w")[0].classList.add("button-active");setTimeout(function(){document.getElementsByClassName("w")[0].classList.remove("button-active")},100);break;
    case "a":audio=new Audio("sounds/tom-2.mp3");audio.play();document.getElementsByClassName("a")[0].click();document.getElementsByClassName("a")[0].classList.add("button-active");setTimeout(function(){document.getElementsByClassName("a")[0].classList.remove("button-active")},100);break;
    case "s":audio=new Audio("sounds/tom-3.mp3");audio.play();document.getElementsByClassName("s")[0].click();document.getElementsByClassName("s")[0].classList.add("button-active");setTimeout(function(){document.getElementsByClassName("s")[0].classList.remove("button-active")},100);break;
    case "d":audio=new Audio("sounds/tom-4.mp3");audio.play();document.getElementsByClassName("d")[0].click();document.getElementsByClassName("d")[0].classList.add("button-active");setTimeout(function(){document.getElementsByClassName("d")[0].classList.remove("button-active")},100);break;
    case "j":audio=new Audio("sounds/snare.mp3");audio.play();document.getElementsByClassName("j")[0].click();document.getElementsByClassName("j")[0].classList.add("button-active");setTimeout(function(){document.getElementsByClassName("j")[0].classList.remove("button-active")},100);break;
    case "k":audio=new Audio("sounds/crash.mp3");audio.play();document.getElementsByClassName("k")[0].click();document.getElementsByClassName("k")[0].classList.add("button-active");setTimeout(function(){document.getElementsByClassName("k")[0].classList.remove("button-active")},100);break;
    case "l":audio=new Audio("sounds/kick-bass.mp3");audio.play();document.getElementsByClassName("l")[0].click();document.getElementsByClassName("l")[0].classList.add("button-active");setTimeout(function(){document.getElementsByClassName("l")[0].classList.remove("button-active")},100);break;
    default:cosole.log(event);break;
  }
}


// document.onkeypress = function(e){
//     if(e.key="w"){
//         document.getElementsByClassName("w")[0].click();
//         document.getElementsByClassName("w")[0].classList.add("button-active")
//         setTimeout(function(){document.getElementsByClassName("w")[0].classList.remove("button-active")},100)}};
