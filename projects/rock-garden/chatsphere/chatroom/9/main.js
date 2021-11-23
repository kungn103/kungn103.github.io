// eye movement 

var balls = document.getElementsByClassName("ball")
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerWidth + "%";

  for(var i=0;i<20;i++){
    balls[i].style.left = x; 
    balls[i].style.top = y; 
    balls[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}

// sound control 

function changeImg() {
    var image = document.getElementById("soundon");
    if (image.src.match("../assets/sound.png")) {
        image.src = "../assets/soundoff.png";
    }
    else {
        image.src = "../assets/sound.png";
    }
}

var audio = new Audio("../assets/audio9.mp3");

// sound play automatically on hover 
document.onmouseover = function() {
  audio.play();
}

//muting
document.getElementById("soundon").addEventListener("click", function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);


