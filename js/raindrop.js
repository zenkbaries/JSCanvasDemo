

// Initialize

// -- Declaration
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var r = 100;
var count = 0;

// set canvas size
c.width = window.innerWidth;
c.height = window.innerHeight;

// Clear screen
ctx.clearRect(0,0,c.width,c.height);
// draw circle
function drawRaindrop() {
  ctx.beginPath();
  ctx.arc(
    Math.round(Math.random() * c.width),
    Math.round(Math.random() * c.height),
    Math.round(Math.random() * r),
    0,
    2*Math.PI
  );
  ctx.stroke();
  ctx.closePath();
}

// draw - where all the animation take place
function draw() {
  // fade the canvas
  ctx.globalAlpha=0.1;
  ctx.fillStyle="#FFFFFF";
  ctx.fillRect(0,0,c.width,c.height);
  ctx.globalAlpha=1.0;

  // draw random raindrop with delay
  if (count == 10) {
    // draw random raindrop
    drawRaindrop();
    count = 0;
  }
  count += 1;

}

// Initalize the animationFrame
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

// animat function
function animate() {
  requestAnimFrame(animate);
  draw();
}

//start animation
animate();
