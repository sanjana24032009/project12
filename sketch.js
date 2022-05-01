var track, trackImage;
var boy, boyImage;
var ground;
var ground1;
function preload() {
  //pre-load images
  trackImage = loadImage("path.png");
  boyImage = loadImage("Runner-1.png");
}

function setup() {
  createCanvas(400, 400);
  //create sprites here
  track = createSprite(200, 400);
  track.addImage("track", trackImage);
  track.velocityY = 2;
  boy = createSprite(200, 200,300,300);
  boy.addAnimation("Runner-1.png","Runner-2.png", boyImage);
  boy.scale = 0.05;
  boy.velocityY=-0.05;

  var ground = createSprite(350, 200, 29, 400);
  ground.visible = false;
  var ground1 = createSprite(60, 200, 25, 400);
  ground1.visible = false;
  

}

function draw() {
  background(255);
  drawSprites();
  
 if (track.y > 400) {
  track.y= 300
 } 

boy.x = World.mouseX;

 edges=createEdgeSprites();
 boy.collide(edges);
}






