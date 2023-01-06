function setup() { //runs once
createCanvas(720, 720); //creates canvas 720 pixels by 720 pixels
background(255, 255, 0); //background color
}

function draw() { //runs in a loop
  fill(255, 0, 0); //fills shape with RGB color
  strokeWeight(8); //assigns stroke weight
translate(60,60); //creates new origin point (60,60)

for(var y = 0; y < 600; y += 300){
  for(var x = 0; x < 600; x += 300) {
    quad(x,y,
          x + 300, y,
          x + 300, 300 + y,
          x, 300 + y);
  }
}
}
