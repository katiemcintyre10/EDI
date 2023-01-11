let gif;
function preload() {
  gif = loadImage ('Assets/OfficialSnowFlakeBETTER.gif');
}
function setup() { //runs once
createCanvas(720, 720); //creates canvas 720 pixels by 720 pixels
background(255, 255, 0); //background color
}

function draw() { //runs in a loop
  background(255); //fills shape with RGB color
translate(-100,-100); //creates new origin point (60,60)
var num = 10;
var sideLen = windowWidth/num;

for(var y = 0; y < 2*windowHeight; y += sideLen){
  for(var x = 0; x < 2*windowWidth; x += sideLen) {
    image(gif, x, y, windowWidth/num, windowWith/num);
  }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
}
