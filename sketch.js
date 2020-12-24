let tilemap = {
  src: [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ],
}

let x = 0;
let y = 0;

function setup() {
  createCanvas(800, 800);

  tilemap.size = createVector(160, 160);
}

function draw() {
  background(236, 232, 225);

  push();

  pop();

  for(let y = 0; y < tilemap.src.length; y++) {
    for(let x = 0; x < tilemap.src[y].length; x++) {
      rect(x * tilemap.size.x, y * tilemap.size.y, tilemap.size.x, tilemap.size.y);
    }
  }

}