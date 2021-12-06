function setup() {
createCanvas(windowWidth, windowHeight);
  background("black");
}

function draw() {
  noStroke();
  fill(232, 255, 84, 20);
  triangle(mouseX, mouseY, mouseY, mouseX, mouseX, 80);
}

function mousePressed() {
noStroke
  if (mouseButton == LEFT) {
 fill(154, 107, 255);
  } else if (mouseButton == RIGHT) {
    fill(154, 107, 255); }
 triangle(mouseX, mouseY, mouseY, mouseX, mouseX, 80);
}