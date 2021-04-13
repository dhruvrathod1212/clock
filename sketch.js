
var hour, minuite, second;




function setup() {
  createCanvas(1360, 650);
  noStroke();


}

function draw() {
  background(0);
  // Scale the mouseX value from 0 to 720 to a range between 0 and 175
  let c = map(mouseX, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);

  
  let h = hour();
  text('Current hour:\n' + h, 100, 500);

  let m = minute();
  text('Current minute: \n' + m, 300, 700);

  let s = second();
  text('Current second: \n' + s, 500, 800);


}
