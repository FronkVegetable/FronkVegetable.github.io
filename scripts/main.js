var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "/image/kosch.1.jpg"){
        myImage.setAttribute ("src","/image/kosch.2.jpg");
    }else {
myImage.setAttribute ("src","/image/kosch.1.jpg");
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "This litle kitty realy like you," + myName;
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "This litle kitty realy like you," + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }

  document.querySelector("html").onclick = function(){
    alert ("Ouch! Stop poking me!");
  }
