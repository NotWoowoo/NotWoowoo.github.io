function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0.15);
  if (mouseIsPressed) {
    fill(255);
		stroke(10);
  } else {
    fill(0);
		noStroke();
  }
  ellipse(mouseX, mouseY, 80, 80);
  
  let title = "Nothing here...";
  
  textSize(32);
  for(let i = 1; i > 0; i-=0.1){
	fill(0, i*200, i*255);
    text(title, 10, 30+i*400);
  }
}
