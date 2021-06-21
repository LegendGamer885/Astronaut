var bgImg;

var sleepImg,drinkImg,brushImg,gymImg,moveImg,eatImg,bathImg;

function preload(){
  bgImg = loadImage("iss.png");
  sleepImg = loadImage("sleep.png");
  drinkImg= loadAnimation("drink1.png","drink2.png");
  brushImg = loadAnimation("brush.png");
  bathImg = loadAnimation("bath1.png","bath2.png");
  drinkImg = loadAnimation("drink1.png","drink2.png");
  eatImg = loadAnimation("eat1.png","eat2.png");
  moveImg = loadAnimation("move.png","move1.png");
  gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
}

function setup() {
  createCanvas(800,400);
  
  astronaut = createSprite(400,300);
  astronaut.addImage(sleepImg);
  astronaut.scale = 0.05;
}

function draw() {
  background(bgImg);  

  drawSprites();

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gymImg);
    astronaut.changeAnimation("gyming");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bathImg);
    astronaut.changeAnimation("bathing");
    astronaut.y = 300;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eatImg);
    astronaut.changeAnimation("eating");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
  move();
  }
}

function move(){
  astronaut.y=World.mouseY;
  astronaut.x=World.mouseX;
 
}