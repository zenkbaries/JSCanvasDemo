

// Initialize
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;

r = 100;

// Clear screen
ctx.clearRect(0,0,c.width,c.height);


// draw - where all the animation take place
function draw() {
  // draw circle
  ctx.globalAlpha=0.1;
  ctx.fillStyle="#FFFFFF";
  ctx.fillRect(0,0,c.width,c.height);
  ctx.globalAlpha=1.0;
  ctx.beginPath();
  // ctx.arc(c.width/2,c.height/2,r,0,2*Math.PI);
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
