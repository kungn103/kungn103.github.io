// getting name from user 

function enterName() {
  let text;
  let person = window.prompt("Hi there! What is your name?");
  if (person == null || person == "") {
    text = "Oh. Well, you can enter too";
  } 
  if (person == "Themis"|| person == "themis") {
    text = "Welcome home.";
  } 
  else {
    text = "Welcome, " + person + "!<br>Please click to enter the Themisverse.";
  }
  document.getElementById("welcome").innerHTML = text;
}

window.onload = enterName()

