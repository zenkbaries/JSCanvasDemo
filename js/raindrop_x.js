// declare variable

//  set up canvas

// clear screen


{
  // fade screen

  // draw circle
  {
    // select randome x,y,r

  }
}


// Declare variable
var can = document.querySelector('canvas');
var ctx = can.getContext('2d');
// var drops = [];
// var numRaindrop = 10;
var r = 10 // Max Radius

// Set up animation

// Setup canvas
can.width = window.innerWidth;
can.height = window.innerHeight;

function raindrop() {
  ctx.beginPath();

}

// function Raindrop() {
//   this.x = Math.round(Math.random() * can.width);
//   this.y = Math.round(Math.random() * can.height);
//   this.r = Math.round(Math.random() * r);
// }

function init() {
  for (i = 0; i < numRaindrop; i++) {
    drops.push(new Raindrop);
  }
  ctx.strokeStyle = "#ffffff";
  draw();

}

function draw() {
  ctx.strokeStyle = "#ffffff";
  for (i = 0; i < numRaindrop; i++) {
    drawRaindrop(drops[i]);
  }

}


// function drawStuff() {
//   context.beginPath();
//   context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
//   context.fillStyle = 'green';
//   context.fill();
//   context.lineWidth = 1;
//   context.strokeStyle = '#003300';
//   context.stroke();
// }



window.requestAnimFrame = (
  function() {
    return  window.requestAnimationFrame        ||
            window.webkitRequestAnimationFrame  ||
            window.mozRequestAnimationFrame     ||
            function(callback) {
              window.setTimeout(callback, 1000 / 60);
            };
  }
)();
