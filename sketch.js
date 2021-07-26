const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var bg,bgImg



function preload() {
  towerImage = loadImage("./assets/tower.png");
  bgImg = loadImage("assets/background.gif")
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(200,200,140,30,-PI/4)

}

function draw() {
  background(189);
  Engine.update(engine);
  imageMode(CENTER)
  image(bgImg,600,300,width,height)
  ground.display();
  
  tower.display();
  
  cannon.display()
 
}
