var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 80, 30);
  fixedRect = createSprite(100, 200, 30, 80);
  fixedRect.velocityX = 5;
}

function draw() {
  background(0);
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
    fixedRect.velocityX = fixedRect.velocityX * -1
  }

  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      fixedRect.velocityY =fixedRect.velocityY * -1
    }

  drawSprites();
}