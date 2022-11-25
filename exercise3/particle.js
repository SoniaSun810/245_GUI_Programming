// code and inspiration from:
// https://youtu.be/MfxBfRD0FVU

class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    // update the size of the element we render
    update() {
      this.x += random(-5, 5);
      this.y += random(-5, 5);
    }
  
    // render the element on the screen
    // by default the shape will be a point/circle
    show() {
      stroke(255);
      strokeWeight(25);
      point(this.x, this.y);
    }
  }

  class Box extends Particle {
    constructor(x, y) {
      super(x, y);
      this.bright = random(255);
      this.r = 10;
    }
  
    update() {
      super.update();
      this.r += random(-8, 8);
    }
  
    show() {
      strokeWeight(1);
      stroke(255);
      fill(this.bright);
      square(this.x, this.y, this.r);
    }
  }

class ParticleLarge extends Particle {
    constructor(x, y, brightness) {
        super(x, y);
        this.bright = brightness;
    }

    update() {
        super.update();
    }

    show() {
        stroke(100);
        strokeWeight(25);
        point(this.x, this.y);
      }  
}


let p1, p2, p3;

function setup() {
  createCanvas(500, 500);
  p1 = new Particle(300, 300);
  p2 = new Box(300, 300);
  p3 = new ParticleLarge(300, 300, 100)
}

function draw() {
  background(0);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
  p3.update();
  p3.show();
}