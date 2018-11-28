function setup() {
  createCanvas(800, 450);
}

function draw() {
	background(0);
  if (mouseIsPressed) {
    fill(255);
		stroke(10);
  } else {
    fill(0);
		noStroke();
  }
  ellipse(mouseX, mouseY, 80, 80);
}
