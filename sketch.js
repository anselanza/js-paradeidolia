import p5 from 'p5';

let myP5 = new p5( function (p) {

  const actualWidth = 800;
  const actualHeight = 800;

  const resolution = 10;

  let grid = {};

  for (var row = 0; row < resolution; row++) {
    grid[row] = {}
    for (var col = 0; col < resolution; col++) {
      grid[row][col] = Math.round(p.random(0, 255));
    }
  }

  console.log('grid:', JSON.stringify(grid));

  p.setup = function() {
    p.createCanvas(actualWidth, actualHeight);
  }

  p.draw = function() {
    p.background(127);

    for (var row = 0; row < resolution; row++) {
      for (var col = 0; col < resolution; col++) {
        p.fill(grid[col][row]);
        p.rect(col * actualWidth/resolution, row * actualHeight/resolution, actualWidth/resolution, actualHeight/resolution);
      }
    }


    p.filter(p.BLUR, 10)
  }


} )
