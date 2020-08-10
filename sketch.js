//Global Variables
var banana, bananaImage, stone, stoneImage, back, backImage, ground, stoneGroup, BananaGroup;
var monkey, monkeyAnimation;

var score = 0;

function preload() {
  monkeyAnimation = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")
  
  backImage = loadImage("jungle.png");
  
  bananaImage = loadImage("banana.png");
  
  stoneImage = loadImage("stone.png");
}


function setup() {
  createCanvas(600, 400);
  
  back = createSprite(0,0,600,400);
  back.scale = 2.4;
  back.x = back.width/2;
  back.velocityX = -3;
  back.addImage(backImage);
  
  ground = createSprite(300,375,600,10);
  ground.visible = false;
  ground.x = ground.width/2;
  

  monkey = createSprite(100, 340, 60, 60);
  monkey.scale = 0.10;
  monkey.addAnimation("running" , monkeyAnimation);
  
  StoneGroup = new Group();
  
  BananaGroup = new Group();
  
  
  
}


function draw() {
  background(225);
  
   if(back.x < 0){
    back.x = back.width/2;
   }
  
  if(ground.x < 0) {
   ground.x = ground.width/2; 
  } 

  if (BananaGroup.isTouching(monkey)) {
   
    BananaGroup.destroyEach();
    score = score + 5;
  }  
  
  if (keyDown("space")) {
    
    monkey.velocityY = -6;
    
  }  
  
  switch(score){
      
    case 10:monkey.scale = 0.15;
      break;
      case 20:monkey.scale = 0.20;
      break;
      case 30:monkey.scale = 0.25;
      break;
      case 40:monkey.scale = 0.30;
      break;
      default: break;
      
      
      
  }
  
  monkey.velocityY = monkey.velocityY + 1.3;
  monkey.collide(ground);
  
    

  SpawnBanana();
  SpawnStone();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : " + score,400,50);
}


function SpawnBanana() {
  
  if (frameCount % 150 === 0) {
    
    var banana = createSprite(600,random(120,200),15,15);
    banana.addImage(bananaImage);
    banana.scale = 0.07;
    banana.velocityX = -5;
    BananaGroup.add(banana);
  }  
  
  
  
  
}  

function SpawnStone() {
  
  if (frameCount % 100 === 0) {
    
    var stone = createSprite(300,350,15,15);
    stone.addImage(stoneImage);
    stone.velocityX = -4;
    stone.scale = 0.1;
    StoneGroup.add(stone);
  
  }  
}  