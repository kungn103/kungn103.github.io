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



// let bite = document.getElementsById("bite");

// function eat() {
//   bite.classList.add("eat");
//   button.classList.toggle("buttonOn");
// }

// let button = document.querySelector(".button-2");
// button.addEventListener("click", eat);


// change flavor
let button = document.querySelector(".button");

let grape = document.querySelector(".grape");
let choc = document.querySelector(".choc");
let wine = document.querySelector(".wine");
let orange = document.querySelector(".orange");
let blueberry = document.querySelector(".blueberry");
let plum = document.querySelector(".plum");
let berry = document.querySelector(".berry");

let colors = ["grape", "choc", "wine", "orange", "blueberry", "plum", "berry"];
let flavor = document.querySelector(".cls-2");

// function newColor() {
//   let randIndex = Math.floor(Math.random() * colors.length);
//   let randColor = colors[randIndex];
//   flavor.style.filter = randColor;
// }

function flavorChange() {
  flavor.classList.add("colors")
}

button.addEventListener("click", newColor);

