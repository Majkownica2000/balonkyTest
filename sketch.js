let baloons = [];
let score = 0;


function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < 10; i++) {
    baloons.push(new Baloon());
  }
}

function draw() {
  background(220);
  fill(0);
  text("Pocet prasknutych balonku pomoci kliknuti:" + score, 10, 480);

  for (let i = baloons.length - 1; i >= 0; i--) {
    baloons[i].update();
    baloons[i].display();

    if (baloons[i].isOffScreen()) {
      baloons.splice(i, 1);
      baloons.push(new Baloon());
    }
  }
}


function mousePressed() {
  for (let i = baloons.length - 1; i >= 0; i--) {
    if (baloons[i].isClicked(mouseX, mouseY)) {
      baloons.splice(i, 1);
      score++;
      baloons.push(new Baloon());
      break;
    }
  }
}