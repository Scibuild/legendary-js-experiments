var spinner;
var speed = 10;
var rotation = 0;
var drag = 0.995;

function setup() {
  //create canvas the same size as the window
  createCanvas(window.innerWidth, window.innerHeight);
  spinner = loadImage("/assets/spinner.png");
  noStroke();
  angleMode(DEGREES);
  //background(0);

}
function draw() {
  //handle mouse
  if (mouseIsPressed) {
    speed = (pmouseX-mouseX)/10;
  }


  background(255);
  translate(width/2, height/2);
  //rotate((millis()*speed) % 360);
  rotate(rotation);
  image(spinner, - spinner.width/4,- spinner.height/4 , spinner.width/2, spinner.height/2);
  //draw ellipse at mouse position
  speed *= drag;
  rotation += speed;
}
