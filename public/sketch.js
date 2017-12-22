var socket;

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(51);

  socket = io.connect('http://localhost:1000/');
}

function draw() {
  // put drawing code here
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 20, 20);
}