
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //createCanvas(600, 600);
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  

fruitGroup=new Group();
obstacleGroup=new Group();
  var survivalTime=0;
  
  //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
  // monkey.addImage(bananaImage)
   monkey.scale=0.1
  
  
  
  score=0;
}


function draw() {
  background("black")
  
   
  
  
  
  if(keyDown("space")&&monkey.y >= 250) {
      monkey.velocityY = -10; 
    }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  if(ground.x<0){
     ground.x=ground.width/2;
     }
  if(monkey.isTouching(fruitGroup)){
    score=+1;
  }
  
  spawnFruit();
  spawnobstacle();
  
   drawSprites();
 if(obstacleGroup.isTouching(monkey)){
    monkey.velocityY=0;
    ground.velocityX=0;
    obstacleGroup.setVelocityXEach(0);
    fruitGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    fruitGroup.setLifetimeEach(-1);
  }
  stroke("white");
  textSize(20);
  fill("green");
  survivalTime=Math.round(frameCount/frameRate());
  text("survival Time:"+survivalTime,100,50);
  text("score:"+score,300,50)
  
}

  function spawnFruit(){
    if(frameCount%60===0){
      fruit=createSprite(600,100,10,10);
      fruit.addImage(bananaImage);
      fruit.velocityX=-5;
      fruit.scale=0.1;
      fruit.y=Math.round(random(100,200));
      fruit.lifetime=150;
      fruitGroup.add(fruit);
    }
    
  }
  function spawnobstacle(){
    if(frameCount%60===0){
      obstacle=createSprite(300,328,10,10);
      obstacle.addImage(obstaceImage);
      obstacle.velocityX=-5;
      obstacle.scale=0.1;
      
      obstacle.lifetime=150;
      obstacleGroup.add(obstacle);
    }
    
  }
  
    
  
  
  
   
    
 
 
  
  
    
  
 




