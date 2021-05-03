var w1,w2,w3,w4,w5,w6;
var ncs,ncsSound;
var car1,car2,car3,car4,car1Img,car2Img,car3Img,carImg;
var rider,rider_2,rider_3,riderImg,rider_2Img,rider_3Img;
var gameState = "start";
var score = 0;
var edges;
var r,l;
function preload(){
  car1Img = loadImage("car1-cutout.jpg");
  car2Img = loadImage("car2.jpg");
  car3Img = loadImage("car3.jpg");
  car4Img = loadImage("car4.jpg");
  riderImg = loadAnimation("rider.jpg");
  rider_2Img = loadAnimation("rider_2.jpg");
  rider_3Img = loadAnimation("rider_3.jpg");
}

function setup(){
  createCanvas(400 ,400);
  
  
w1 = createSprite(125, 340, 10, 80);
w1.shapeColor = "black";

w2 = createSprite(280, 190, 10, 80);
w2.shapeColor = "black";

w3 = createSprite(280, 50, 10, 80);
w3.shapeColor = "black";

w4 = createSprite(280, 340, 10, 80);
w4.shapeColor = "black";

w5 = createSprite(125, 50, 10, 80);
w5.shapeColor = "black";

w6 = createSprite(125, 190, 10, 80);
w6.shapeColor = "black";

rider = createSprite(200, 340, 150, 100);
rider.addAnimation("static",riderImg);
rider.addAnimation("boost",rider_2Img);
rider.addAnimation("collided",rider_3Img);  
rider.scale = 0.07;

car1 = createSprite(190, -60, 10,10);
car1.addImage(car1Img);
car1.scale = 0.1;
car1.velocityY = 0;

car2 = createSprite(325, -500, 10,10);
car2.addImage(car2Img);
car2.scale = 0.1;
car2.velocityY = 0;

car3 = createSprite(60, -200, 10,10);
car3.addImage(car3Img);  
car3.scale = 0.1;
car3.velocityY = 0;

car4 = createSprite(60, -350, 10,10);
car4.addImage(car4Img);  
car4.scale = 0.1;
car4.velocityY = 0;
}

function draw() {
 background("white");
  createEdgeSprites();
  rider.setCollider("circle",0,0,150);
  r = createSprite(400,0,10,1000);
  l = createSprite(0,0,10,1000);
  r.shapeColor="white";
  l.shapeColor="white";

  rider.bounce(r);
  r.bounce(rider);
  rider.bounce(l);
  l.bounce(rider);

car1.lifetime = -0.1;
 car2.lifetime = -0.1;
 car3.lifetime = -0.1;
 car4.lifetime = -0.1;
 w1.lifetime = -0.1;
 w2.lifetime = -0.1;
 w3.lifetime = -0.1;
 w4.lifetime = -0.1;
 w5.lifetime = -0.1;
 w6.lifetime = -0.1;



 if(gameState==="play"){
 collideCars();
 showScore();
 moveWhite();
 movePlayer();
 moveCars();
 Collision();
 }

 if(gameState==="start"){

 showText();


 if(keyDown("space")){
 gameState="play";
 car1.x = Math.round(random(0,400));
 car2.x = Math.round(random(0,400));
 car4.x = Math.round(random(0,400));
 car3.x = Math.round(random(0,400));
 car1.x = Math.round(random(0,Math.round(random(0,400))));
 car2.x = Math.round(random(0,Math.round(random(0,400))));
 car4.x = Math.round(random(0,Math.round(random(0,400))));
 car3.x = Math.round(random(0,Math.round(random(0,400))));

 }
 }

 if(gameState==="over"){
 fill("blue");
 textSize(25);
 textFont("courier");
 text("SCORE", 160, 110);
 fill("red");
 textSize(40);
 textFont("arial");
 text(score, 160, 160);
 textSize(20);
 fill("navy");
 text("Press 'R' To Retry >>", 120, 70);
   
 if(keyDown("r") || mouseDown("leftButton")){
 reset();
 gameState = "start";
 }
 }
drawSprites();
}
function reset(){
 rider.changeAnimation("static",riderImg);
 score = 0;
 car1.x = Math.round(random(0,400));
 car1.y = Math.round(random(-60,-200));
 car2.x = Math.round(random(0,400));
 car2.y = Math.round(random(-60,-200));
 car3.x = Math.round(random(200,400));
 car3.y = Math.round(random(-60,-200));
 car4.x = Math.round(random(0,400));
 car4.y = Math.round(random(-60,-200));
 w1.x = 125;
 w1.y = 340;
 w2.x = 280;
 w2.y = 190;
 w3.x = 280;
 w3.y = 50;
 w4.x = 280;
 w4.y = 340;
 w5.x = 125;
 w5.y = 50;
 w6.x = 125;
 w6.y = 190;
 rider.x = 200;
 rider.y = 340;
}
function showText(){
 textSize(30);
 textFont("Courier New");
 fill("royalblue");
 text("| Roader |", 112,120);
 textSize(20);
 fill("navy");
 textFont("Candara Light");
 text("PRESS space TO START", 100,145);
 textSize(18);
 text("USE arrow keys TO MOVE", 8, 275);
}
function collideCars(){
 car1.bounce(car2);
 car1.bounce(car3);
 car1.bounce(car3);
 car2.bounce(car1);
 car2.bounce(car3);
 car2.bounce(car4);
 car3.bounce(car1);
 car3.bounce(car2);
 car3.bounce(car4);
 car4.bounce(car1);
 car4.bounce(car2);
 car4.bounce(car3);
}
function showScore(){
 fill("blue");
 textSize(25);
 textFont("courier");
 text("SCORE", 20, 40);
 score = score + 1;
 fill("red");
 textSize(40);
 textFont("arial");
 text(score, 20,80);
}
function movePlayer(){
  if(keyDown(RIGHT_ARROW)){
    rider.x = rider.x + 5;
    }
    if(keyDown(LEFT_ARROW)){
    rider.x = rider.x - 5;
   }
 car1.velocityY = score/50;
 car2.velocityY = score/50;
 car3.velocityY = score/50;
 car4.velocityY = score/50;
 w1.velocityY = score/50;
 w2.velocityY = score/50;
 w3.velocityY = score/50;
 w4.velocityY = score/50;
 w5.velocityY = score/50;
 w6.velocityY = score/50;
}
function moveCars(){
 if(car1.y>400){
 var c1 = random(1,3);
 if(c1===1){
 car1.setAnimation("car2.jpg");
 }
 if(c1===2){
 car1.setAnimation("car3.jpg");
 }
 if(c1===3){
 car1.setAnimation("car4.jpg");
 }
 var pos11 = random(1, 3);
 if(pos11===1){
 car1.x = Math.round(random(0,400));
 }
 if(pos11===2){
 car1.x = Math.round(random(0,400));
 }
 if(pos11===3){
 car1.x = Math.round(random(0,400));
 }
 var pos12 = random(-100, -300);
 car1.y = pos12;
 }
  
 if(car2.y>400){
 var c2 = random(1,3);
 if(c2===1){
 car2.setAnimation("car1.jpg");
 }
 if(c2===2){
 car2.setAnimation("car3.jpg");
 }
 if(c2===3){
 car2.setAnimation("car4.jpg");
 }
 var pos21 = random(1,3);
 if(pos21===1){
 car2.x = Math.round(random(0,400));
 }
 if(pos21===2){
 car2.x = Math.round(random(0,400));
 }
 if(pos21==3){
 car2.x = Math.round(random(0,400));
 }
 var pos22 = random(-100, -500);
 car2.y = pos22;
 }
  
  if(car3.y>400){
 var c3 = random(1,3);
 if(c3===1){
 car3.setAnimation("car1.jpg");
 }
 if(c3===2){
 car3.setAnimation("car2.jpg");
 }
 if(c3===3){
 car3.setAnimation("car4.jpg");
 }
 var pos31 = random(1, 3);
 if(pos31===1){
 car3.x = Math.round(random(200,400));
 }
 if(pos31===2){
 car3.x = Math.round(random(200,400));
 }
 if(pos31===3){
 car3.x = Math.round(random(200,400));
 }
 var pos32 = random(-100, -300);
 car3.y = pos32;
 }
  
 if(car4.y>400){
 var c4 = random(1,3);
 if(c4===1){
 car4.setAnimation("car1.jpg");
 }
 if(c4===2){
 car4.setAnimation("car2.jpg");
 }
 if(c4===3){
 car4.setAnimation("car3.jpg");
 }
 var pos41 = random(1,3);
 if(pos41===1){
 car4.x = Math.round(random(0,400));
 }
 if(pos41===2){
 car4.x = Math.round(random(0,400));
 }
 if(pos41==3){
 car4.x = Math.round(random(0,400));
 }
 var pos42 = random(-100, -500);
 car4.y = pos42;
 }
}
function moveWhite(){
 w1.velocityY = 10;
 w2.velocityY = 10;
 w3.velocityY = 10;
 w4.velocityY = 10;
 w5.velocityY = 10;
 w6.velocityY = 10;

 if(w1.y>450){
 w1.x = 125;
 w1.y = -10;
 }
 if(w2.y>450){
 w2.x = 280;
 w2.y = -10;
 }
 if(w3.y>450){
 w3.x = 285;
 w3.y = -10;
 }
 if(w4.y>450){
 w4.x = 280;
 w4.y = -10;
 }
 if(w5.y>450){
 w5.x = 125;
 w5.y = -10;
 }
 if(w5.y>450){
 w5.x = 125;
 w5.y = -10;
 }
 if(w6.y>450){
 w6.x = 125;
 w6.y = -10;
 }
}
function Collision(){
edges= createEdgeSprites();
 if(rider.isTouching(car1)||rider.isTouching(car2)||rider.isTouching(car3)||rider.isTouching(car4)){
 car1.velocityY=0;car2.velocityY=0;car3.velocityY=0;car4.velocityY=0;

w1.velocityY=0;w2.velocityY=0;w3.velocityY=0;w4.velocityY=0;w5.velocityY=0;w6.velocityY=0;
if(keyDown(RIGHT_ARROW)){
  rider.x = rider.x - 5;
  }
  if(keyDown(LEFT_ARROW)){
  rider.x = rider.x + 5;
 }
 rider.changeAnimation("collided",rider_3Img);
 gameState = "over";
 }
}