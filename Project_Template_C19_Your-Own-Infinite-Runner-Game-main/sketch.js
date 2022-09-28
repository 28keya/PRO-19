var bow ,ball, arrow,  background,arrowGroup;
var bowImage, arrowImage, ballImage;
var score =0;
function preload(){  
  backgroundImage = loadImage("bg.png");
  
  arrowImage = loadImage("Arrow.png");
  bowImage = loadImage("Bow.png");
  ballImage = loadImage("soccerBall.png");
}

function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0  
  balls = new Group();
  arrowGroup= new Group();  
}

function draw() {
 background(0);
 
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  

  bow.y = World.mouseY

  if (keyDown("space")) {
    createArrow();  
  }
  

  if (arrowGroup.isTouching(ball)) {
    ball.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }

  drawSprites();
  text("Score: "+ score, 300,50);
  
  
  }


  function ball() {
    var ball = createSprite(0,Math.round(random(20, 370)), 10, 10);
    ball.addImage(ballImage);
    ball.velocityX = 3;
    ball.lifetime = 150;
    ball.scale = 0.1;
    balls.add(ball);
  }

  

  













 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  

  arrowGroup.add(arrow);
   
}











