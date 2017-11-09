


//  Declaration
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var r = 250;
var count = 0;
var drops = [];
var bgColor = "#ffffff";
var dropColor = "#000000";

// set canvas size
c.width = window.innerWidth;
c.height = window.innerHeight;

// Clear screen
ctx.clearRect(0,0,c.width,c.height);

// Raindrops class
function Raindrops() {
  this.x    = Math.round(Math.random() * c.width);
  this.y    = Math.round(Math.random() * c.height);
  this.r    = Math.round(Math.random() * r);
  this.age  = 0;
}

// draw Raindrops
function drawRaindrop(dX,dY,dR, dAge) {
  fade = (dR-dAge)/dR;
  ctx.globalAlpha = fade;
  ctx.beginPath();
  ctx.arc( dX, dY, dAge, 0, 2*Math.PI );
  ctx.stroke();
  ctx.closePath();
  ctx.globalAlpha = 1.0;
}

// draw - where all the animation take place
function draw() {

  // fade/clear the canvas
  ctx.globalAlpha=1.0;
  ctx.fillStyle= bgColor;
  ctx.fillRect(0,0,c.width,c.height);

  // add new Drops to array after delay
  if (count >= 5) {
    //new raindrop
    drops.push(new Raindrops);
    count = 0;
  }

  // draw each drops in array
  for(var i=0; i < drops.length; i++) {
    drops[i].age += 1;
    eachDrop = drops[i];
    if (eachDrop.age >= eachDrop.r) {
      drops.splice(i,1);
    }
    drawRaindrop(eachDrop.x, eachDrop.y, eachDrop.r, eachDrop.age);
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
