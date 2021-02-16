const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var superhero, superheroImage1, superheroImage2;
var monster, monsterImage1, monsterImage2;
var backgroundImage; 
var ground;
var block1, block2, block3, block4, block5, block6, block7, block8,block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var rope;
var monster;

function preload() {
//preload the images here
superheroImage1 = loadImage("Superhero-01.png");
superheroImage2 = loadImage("Superhero-02.png");
monsterImage1 = loadImage ("Monster-01.png");
monsterImage2 = loadImage ("Monster-02.png");
backgroundImage = loadImage ("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,600,900,20);

  superhero = new Hero(180, 500, 150);

  monster = new Monster(800, 300, 80);

  rope = new Fly(superhero.body, {x: 300, y: 300});

  block1 = new Blocks(460, 590, 50,50);
  block2 = new Blocks(460, 540, 50,50);
  block3 = new Blocks(460, 490, 50,50);
  block4 = new Blocks(460, 440, 50,50);
  block5 = new Blocks(460, 390, 50,50);
  block6 = new Blocks(460, 340, 50,50);
  block7 = new Blocks(460, 290, 50,50);

  block8 = new Blocks(530, 590, 50,50);
  block9 = new Blocks(530, 540, 50,50);
  block10 = new Blocks(530, 490, 50,50);
  block11 = new Blocks(530, 440, 50,50);
  block12 = new Blocks(530, 390, 50,50);
  block13 = new Blocks(530, 340, 50,50);

  block14 = new Blocks(600, 590, 50,50);
  block15 = new Blocks(600, 540, 50,50);
  block16 = new Blocks(600, 590, 50,50);
  block17 = new Blocks(600, 540, 50,50);
  block18 = new Blocks(600, 490, 50,50);
  block19 = new Blocks(600, 440, 50,50);
  block20 = new Blocks(600, 390, 50,50);

  block21 = new Blocks(670, 590, 50,50);
  block22 = new Blocks(670, 540, 50,50);
  block23 = new Blocks(670, 490, 50,50);
  block24 = new Blocks(670, 440, 50,50);
  block25 = new Blocks(670, 390, 50,50);


}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  ground.display();
  superhero.display();
  rope.display();
  monster.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  block23.display();
  block24.display();
  block25.display();



}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  rope.fly(superhero.body);
}
