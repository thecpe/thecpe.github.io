/*===================
Global Variables
=====================*/
var gifs = [
  {
    "link": "img/0.gif",
    "text": "💥🔫"
  },
  {
    "link": "img/1.gif",
    "text": "💥🔫"
  },
  {
    "link": "img/2.gif",
    "text": "💥🔫"
  },
  {
    "link": "img/3.gif",
    "text": "💥🔫"
  },
  {
    "link": "img/4.gif",
    "text": "💥🔫"
  },
  {
    "link": "img/5.gif",
    "text": "💥🔫"
  },
  {
    "link": "img/6.gif",
    "text": "💥🔫"
  },
  {
    "link": "img/7.gif",
    "text": "💥🔫"
  },
  {
    "link": "img/8.gif",
    "text": "💥🔫"
  },
  {
    "link": "img/9.gif",
    "text": "💥🔫"
  },
  {
    "link": "img/10.gif",
    "text": "💥🔫"
  },
  {
    "link": "img/11.gif",
    "text": "💥🔫"
  },
  {
    "link": "img/approve.gif",
    "text": "Young Metro trust you 🙏"
  }
];

var secondGifs = [];
var useFirstArray = true;


var audio = new Audio('metro.mp3');
audio.play();
var contextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
var dance = document.getElementById("everybodydance");
if (contextClass) {
  var context = new contextClass();
} else {
  onError;
}
var request = new XMLHttpRequest();
request.open('GET', "http://s3.amazonaws.com/metroaudio/trust.mp3", true);
request.responseType = 'arraybuffer';
request.onload = function() {
 context.decodeAudioData(request.response, function(theBuffer) {
  buffer = theBuffer;
  }, onError);
}
request.send();

function onError() { console.log("Bad browser! No Web Audio API for you"); }

function unpress() { dance.classList.remove("pressed"); }

function playSound() {
 dance.classList.add("pressed");
  var source = context.createBufferSource();
  source.buffer = buffer;
 source.connect(context.destination);
  source.start(0);
  var delay = 2000;
  setTimeout(unpress,delay);
}
dance.addEventListener('click', function(event) { playSound(); });

function onclick() {
    // splice logic
    if (useFirstArray == true){
      // Get random index from array
      var randomIndex = Math.floor(Math.random() * gifs.length);
      // splice first array
      var removedArray = gifs.splice(randomIndex, 1);
      var removedElement = removedArray[0];
      // pushes removed element from 1st array to the second
      secondGifs.push(removedElement);
      // displays the element that was removed as a wallpaper
     $.backstretch(removedElement.link);
     document.getElementById('response').innerHTML = removedElement.text;
     if (gifs.length == 0) {
       useFirstArray = false;
     }
    }
    //second array splice logic
    else {
        // Get random index from second array
        var randomIndex = Math.floor(Math.random() * secondGifs.length);
        // splice first second array
        var removedArray = secondGifs.splice(randomIndex, 1);
        var removedElement = removedArray[0];
        // pushes removed element from 1st array to the second
        gifs.push(removedElement);
        // displays the element that was removed as a wallpaper
       $.backstretch(removedElement.link);
      document.getElementById('response').innerHTML = removedElement.text;
       if (secondGifs.length == 0) {
         useFirstArray = true;
       }
    }
}


$(document).ready(function(){
  $("#everybodydance").click(onclick);
})
