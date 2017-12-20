import p5 from 'p5';

console.log("I'm running!");

let myP5 = new p5( function (sketch) {

  // for red, green, and blue color values
  let r, g, b;

  sketch.setup = function() {
    console.log('setup');
    sketch.createCanvas(720, 400);
    // Pick colors randomly
    r = sketch.random(255);
    g = sketch.random(255);
    b = sketch.random(255);
  }

  sketch.draw = function() {
    sketch.background(127);
    // Draw a circle
    sketch.strokeWeight(2);
    sketch.stroke(r, g, b);
    sketch.fill(r, g, b, 127);
    sketch.ellipse(360, 200, 200, 200);
  }
} )
