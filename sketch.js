let tilemap = {
  src: [],
};

let columns = 15;
let rows = 15;

let offset;
let resolution = 1;
let canvas;

function setup() {
  createCanvas(800, 800);
  offset = createVector(0, 0);
  tilemap.size = createVector(160, 160);
  canvas = createVector(width, height);
  
  for(let i = 0; i < rows; i++) {
    let row = [];
    for(let j = 0; j < columns; j++) {
      row.push(0);
    }
    tilemap.src.push(row);
  }
  console.log(tilemap);
}

function draw() {
  background(236, 232, 225);

  push();
  scale(resolution);
  translate(canvas.x/2 - offset.x, canvas.y/2 - offset.y);

  for(let y = 0; y < tilemap.src.length; y++) {
    for(let x = 0; x < tilemap.src[y].length; x++) {
      rect(x * tilemap.size.x, y * tilemap.size.y, tilemap.size.x, tilemap.size.y);
    }
  }

  if(mouseIsPressed) {
    let diff = createVector();
    diff.x = pmouseX - mouseX;
    diff.y = pmouseY - mouseY;

    offset.add(diff);
  }
  pop();

  

  if(keyIsDown(65)) {
    offset.x--;
  }

  if(keyIsDown(68)) {
    offset.x++;
  }

  if(keyIsDown(87)) {
    offset.y--;
  }

  if(keyIsDown(83)) {
    offset.y++;
  }
 
}

function mouseWheel(event) {
  let delta = -event.delta * 0.001;
  resolution += delta;

  canvas.x = width / resolution;
  canvas.y = height / resolution
}