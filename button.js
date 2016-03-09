
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
  var gifs = [
    {
      "link": "http://i.giphy.com/12MgUpnxEq3ypy.gif",
      "text": "💥🔫"
    },
    {
      "link": "http://i.giphy.com/l0O9yF8Mto1mdnogE.gif",
      "text": "💥🔫"
    },
    {
      "link": "http://i.giphy.com/l41m4yUAia33XkNwc.gif",
      "text": "💥🔫"
    },
    {
      "link": "http://i.giphy.com/LhSahsTMJio2A.gif",
      "text": "💥🔫"
    },
    {
      "link": "http://i.giphy.com/xIytx7kHpq74c.gif",
      "text": "💥🔫"
    },
    {
      "link": "http://i.giphy.com/NXWYyKAHim63u.gif",
      "text": "💥🔫"
    },
    {
      "link": "http://i.giphy.com/wP3wOy7woMBDW.gif",
      "text": "💥🔫"
    },
    {
      "link": "http://i.giphy.com/3YNaQqbBw3YJy.gif",
      "text": "💥🔫"
    },
    {
      "link": "http://i.giphy.com/LvomsQTyM4QQU.gif",
      "text": "💥🔫"
    },
    {
      "link": "http://i.giphy.com/gO0LTAIDaEtNK.gif",
      "text": "💥🔫"
    },
    {
      "link": "http://i.giphy.com/LaWwAKKraEH7y.gif",
      "text": "💥🔫"
    },
    {
      "link": "http://i.giphy.com/UAHZijO91QCl2.gif",
      "text": "💥🔫"
    },
    {
      "link": "img/approve.gif",
      "text": "Young Metro trust you 🙏"
    }
];
   var randomIndex = Math.floor(Math.random() * gifs.length);
   $.backstretch(gifs[randomIndex].link);

   document.getElementById('response').innerHTML = gifs[randomIndex].text;
}


$(document).ready(function(){
  $("#everybodydance").click(onclick);
})
