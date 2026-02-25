class Baloon {
    constructor() {
        this.x = random(width);
        this.y = height + 50;
        this.size = random(30, 60);
        this.color = color(random(255), random(255), random(255));
        this.speed = random(1, 3);

    }

    update() {
        this.y -= this.speed;
    }

    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }

    isOffScreen() {
        if (this.y <= 0) {
      return true;
        }
    }
    isClicked(mx, my) {
        return dist(mx, my, this.x, this.y) < this.size / 2;

    }
}

