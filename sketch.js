let tilemap = {
  src: [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ],
}

let offset;

function setup() {
  createCanvas(800, 800);
  offset = createVector(0, 0);
  tilemap.size = createVector(160, 160);
}

function draw() {
  background(236, 232, 225);

  push();
  translate(width/2 - offset.x, height/2 - offset.y);
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