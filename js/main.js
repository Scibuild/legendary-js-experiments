var brightness;

function setup() {
  //create canvas the same size as the window
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  background(0);
}
function draw() {
  //set fill colour based on position
  brightness = map(mouseY, 0, height, 0.0, 1.0, true);

  for (var x = 0; x<width; x += 8) {
    for (var y = 0; y<height; y += 8) {
      fill(map(x, 0, width, 0, 255, true)*brightness,
        map(y, 0, height, 0, 255, true)*brightness,
        map(mouseX, 0, width, 0, 255, true)*brightness);
      ellipse(x, y, 4, 4);
    }
  }
}
