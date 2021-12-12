// document.querySelector("button").addEventListener("click",handleclick);
// // no paranthesis becoz by using () in fucntion alert will shiow when we refresh page immediately not by clicking
//
// function handleclick(){
//   alert("I got clicked!");
// }
//####### same work as above.



var numberofbuttons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofbuttons;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){

  var x=this.innerHTML;
  makesound(x);
  buttonanimation(x);

});

document.addEventListener("keydown",function (event){

  makesound(event.key);
  buttonanimation(event.key);

});

function makesound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio ("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio ("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio ("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio ("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio ("sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var kickbass = new Audio ("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "k":
      var crash = new Audio ("sounds/crash.mp3");
      crash.play();
      break;

    default: console.log(x);

  }

}

function buttonanimation(currentkey){
  var activeButton=document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}

}
