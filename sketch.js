var movingRect, fixedRect, box1;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(300,300,30,50)
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(400,500,30,60)
  movingRect.shapeColor = "yellow"

  box1 = createSprite(150,50,70,70)
  box1.shapeColor = "green";
}

function draw() {
  background(0);  

  movingRect.y = World.mouseY
  movingRect.x = World.mouseX

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "yellow"
    fixedRect.shapeColor = "blue";
  }
  if(isTouching(movingRect,box1)){
    movingRect.shapeColor = "red";
    box1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "yellow"
    box1.shapeColor = "blue";
  }
  


  drawSprites();
}

