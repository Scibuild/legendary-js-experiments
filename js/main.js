var hourHand, minuteHand, secondHand;
var millisOffset, pSecond;
var timesRun;
function setup() {
  //create canvas the same size as the window
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  background(0);
  angleMode(DEGREES);
  calcMillis();

}
function draw() {
  //pSecond = second();
  background(0);
  fill(255)
  //Print time and day
  /*textSize(64);
  //text(day()+"/"+month()+"/"+year(), 40,100);
  text(hour()+":"+minute()+":"+second()+":"+pSecond+":"+millisOffset, 40,200);
  */
  //setTimeout(function () {
  //  calcMillis();
  //}, 0);


  translate(width/2,height/2);

  hourHand = map(hour()%12, 0, 12, 0, 360, true) +
              map(minute(), 0, 60, 0.0, 30.0, true)+
              map(second(), 0, 60, 0.0, 0.5, true);

  minuteHand = map(minute(), 0, 60, 0, 360, true)+
                map(second(), 0, 60, 0.0, 6.0, true);
  secondHand = map(second()+((millis()-millisOffset)%1000/1000),
                0, 60, 0, 360, true);

  drawHour(hourHand);
  drawMinute(minuteHand);
  drawSecond(secondHand);
}
async function calcMillis() {
  pSecond = second();
  while(pSecond == second());
  millisOffset = millis();
}
function drawHour(hourHand) {
  push();
  rotate(hourHand);
  ellipse(0, -250, 50, 50);
  stroke(255);
  strokeWeight(3);
  line(0,-250,0,0);
  pop();
}
function drawMinute(minuteHand) {
  push();
  rotate(minuteHand);
  ellipse(0, -300, 50, 50);
  stroke(255);
  strokeWeight(3);
  line(0,-300,0,0);
  pop();
}
function drawSecond(secondHand) {
  push();
  rotate(secondHand);
  ellipse(0, -200, 50, 50);
  stroke(255);
  strokeWeight(3);
  line(0,-200,0,0);
  pop();
}
