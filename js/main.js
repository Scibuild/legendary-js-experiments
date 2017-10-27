function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  background(0);
}
function draw() {
  //background(0);

  fill(map(mouseX,0,width, 0, 255, true),
          map(mouseY,0,height, 0, 255, true), 128);
  rect(mouseX,mouseY,80,80);
}
