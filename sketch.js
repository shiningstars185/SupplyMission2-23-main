var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, boxBase, boxLeft, boxRight;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 60, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxPosition = width/2-100;
	boxY = 650;
	//create a box
	boxBase = createSprite(boxPosition,boxY,200,20);
	boxBase.shapeColor = color(255,20,0)

	boxLeft = createSprite(boxPosition-115,boxY-100,20,200);
	boxLeft.shapeColor = color(255,20,0)

	boxRight = createSprite(boxPosition+115,boxY-100,20,200);
	boxRight.shapeColor = color(255,20,0)

    boxLeft = Bodies.rectangle(boxPosition-115, boxY-100,20,200, {isStatic:true}) ;
    World.add(world, boxLeft);

	boxRight = Bodies.rectangle(boxPosition+115, boxY-100,20,200, {isStatic:true}) ;
    World.add(world, boxRight);

	boxBase = Bodies.rectangle(boxPosition, boxY-200,20,200, {isStatic:true}) ;
    World.add(world, boxBase);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {

 if (keyCode === LEFT_ARROW){
	helicopterSprite.x = helicopterSprite.x-30
	translation = {x:-30,y:0}
	Matter.Body.translate(packageBody,translation)
 }

 else if (keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x+30
	translation = {x:+30,y:0}
	Matter.Body.translate(packageBody,translation)
 }
 
 
 else if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false);
    
  }

}



