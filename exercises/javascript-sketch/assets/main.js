var balls = document.getElementsByClassName("ball")
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerWidth + "%";

  for(var i=0;i<2;i++){
    balls[i].style.left =x; 
    balls[i].style.top = y; 
    balls[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}

//taking bite 

let bite = document.querySelector(".bite");
let button2 = document.querySelector(".button-2");

function eat() {
  bite.classList.toggle("eat");
}
button2.addEventListener("click", eat);


// change flavor

let button1 = document.querySelector(".button");
let colors = ["#6e8cf0","#fcb4c5", "#ab87ed", "#b9f0c6", "#ebf0b9", "#f0eeda"];
let body = document.querySelector(".flavor");

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  body.style.fill = randColor;
}

button1.addEventListener("click", newColor);

