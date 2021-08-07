var dog,Dog,happy_Dog;
var database;
var foodS,foodStock;

function preload(){
   Dog=loadImage("Images/dogImg.png");
   happy_Dog=loadImage("Images/dogImg1.png");
  }

function setup() {
  database=firebase.database();
  createCanvas(1000,500);

  dog=createSprite(800,250,100,100);
  dog.addImage(Dog);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
}

function draw() {
  background(46,139,87);

  if(keyWentDown("space") && foodS===0){
    writestock(foodS);
    dog.addImage(Dog);
  }

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happy_Dog);
  }

  

  drawSprites();
  fill(255,255,254);
  stroke("black");
  textSize(18);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
} 

function writestock(x){
    x=20;
  database.ref('/').update({
    Food:x
  })
} 