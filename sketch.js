const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;

var division=[];
var plinkos=[];
var particales=[];

var divisionHeight = 300;

function setup() {

  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
   // console.log(k);
   // console.log(height);

    division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 40; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 15; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 40; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 15; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }  


  Engine.run(engine);
}

function draw() {
 
  background(0);
  Engine.update(engine);
  fill("red");
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
 //line(0,490,900, 490);

   
   if(frameCount%60===12){
    particales.push(new Particle(random(width/2-100, width/2+100), 10,10));
  }

 for (var j = 0; j < particales.length; j++) {
  
  particales[j].display();
  }
  
   for (var k = 0; k < division.length; k++) {
     
    division[k].display();
   }

  
  
   
}
