//create program that enables customization of number of squares in grid

function setup() { //runs once
createCanvas(windowWidth, windowWidth); //creates canvas 720 pixels by 720 pixels
//background(255, 255, 0); //background color
}

function draw() { //runs in a loop
  fill(255, 0, 0); //fills shape with RGB color
  strokeWeight(1); //assigns stroke weight
var num = 30; //number of sides in array
var sideLen = windowWidth/num; //side length variable
for(var y = 0; y < windowWidth; y += sideLen){
  for(var x = 0; x < windowWidth; x += sideLen) {
    quad(x,y,
          x + sideLen, y,
          x + sideLen, sideLen + y,
          x, sideLen + y);
  }
}
}
