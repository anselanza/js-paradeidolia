import p5 from 'p5';

let myP5 = new p5( function (p) {

  const actualWidth = 400;
  const actualHeight = 400;

  const resolution = 10;

  const randomGrid = (resolution) => {
    let grid = {};
    for (var row = 0; row < resolution; row++) {
      grid[row] = {}
      for (var col = 0; col < resolution; col++) {
        grid[row][col] = Math.random() > 0.5 ? 255 : 0;
      }
    }
    return grid;
  }

  let grid = {};

  console.log('grid:', JSON.stringify(grid));

  p.setup = function() {
    let myCanvas = p.createCanvas(actualWidth, actualHeight);
    myCanvas.parent('myContainer');
    grid = randomGrid(resolution);
  }

  p.draw = function() {
    p.background(127);

    for (var row = 0; row < resolution; row++) {
      for (var col = 0; col < resolution; col++) {
        p.noStroke();
        p.fill(grid[col][row]);
        p.rect(col * actualWidth/resolution, row * actualHeight/resolution, actualWidth/resolution, actualHeight/resolution);
      }
    }

    p.filter(p.BLUR, resolution * 4);
  }

  p.mousePressed = function() {
    grid = randomGrid(resolution);
  }


} )
