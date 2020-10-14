
var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 200, 20, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(200,200,50,20);
  movingRect.shapeColor = "green";

 gameObject1 = createSprite(100,100,50,20);
 gameObject1.shapeColor = "green";

 gameObject1 = createSprite(200,100,50,20);
 gameObject1.shapeColor = "green";
 
 gameObject1 = createSprite(300,100,50,20);
 gameObject1.shapeColor = "green";

 gameObject1 = createSprite(400,100,50,20);
 gameObject1.shapeColor = "green";
}

function draw() {
  background(0);

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

 /* console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2);*/

  if (isTouching(movingRect, gameObject1)){
    gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}
function isTouching(obj1,obj2){


  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2
    &&obj2.x-obj1.x<obj1.width/2+obj2.width/2
    &&obj2.y-obj1.y<obj1.height/2+obj2.height/2
    &&obj1.y-obj2.y<obj1.height/2+obj2.height/2
    ){
   
    return true;
  }
else{
  
  return false;
}


}