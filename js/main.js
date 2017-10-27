var spinner;
var speed = 1;
var rotation;

function setup() {
  //create canvas the same size as the window
  createCanvas(window.innerWidth, window.innerHeight);
  spinner = loadImage("/assets/spinner.png");
  noStroke();
  //background(0);

}
function draw() {
  background(255);
  translate(width/2, height/2);
  //rotate((millis()*speed) % 360);
  rotate(rotation);
  image(spinner, - spinner.width/4,- spinner.height/4 , spinner.width/2, spinner.height/2);
  //draw ellipse at mouse position
  speed *= 0.999
  rotation += speed
}
function mousePressed() {
  speed += 0.002
}
