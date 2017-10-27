function setup() {
  //create canvas the same size as the window
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  background(0);
}
function draw() {
  //set fill colour based on position
  fill(map(mouseX,0,width, 0, 255, true),
          map(mouseY,0,height, 0, 255, true), 128);
  //draw ellipse at mouse position
  ellipse(mouseX,mouseY,80,80);
}
