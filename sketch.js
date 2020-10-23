var car,wall;

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 50, 50, 10);
  car.visible = false;
  wall = createSprite(600,300,10,600);
  wall.visible = false;
}

function draw() {
  background(0,0,0);

  validateForm();

  textSize(30);
  fill("yellow");
  noStroke();
  text("Global Car Safety Organisation",200,30);

  stroke("red");
  strokeWeight(3);
  line(198,42,620,42);

  drawSprites();
}

function EnterName() {
  var name = document.forms['master']['carName'].value;
  textSize(25);
  fill("yellow");
  stroke("red");
  strokeWeight(3);
  text("Car's name: ", 20, 100);
  fill("white");
  stroke("red");
  text(name,160,100)
}

function EnterSpeed() {
  var speed = document.forms['master']['speed'].value;
  textSize(25);
  fill("yellow");
  stroke("red");
  strokeWeight(3);
  text("Max. Speed: ", 20, 200);
  if(speed.length >=1){
    if(speed == "" || speed > 300 || speed < 60){
      fill("white");
      stroke("red");
      text("PLEASE ENTER A VALID SPEED",170,200);
      return false;
    }
    else{
      fill("white");
      stroke("red");
      text(speed + " km/hr", 170, 200);
      return true;
    }
  }
}

function EnterMass() {
  var weight = document.forms['master']['weightNum'].value;
  textSize(25);
  fill("yellow");
  stroke("red");
  strokeWeight(3);
  text("Mass: ", 20, 300);
  if(weight.length >= 1){
    if(weight == "" || weight > 4000 || weight < 820){
      fill("white");
      stroke("red");
      text("PLEASE ENTER A VALID MASS",100,300);
      return false;
    }
    else{
      fill("white");
      stroke("red");
      text(weight +" kg", 100, 300);
      return true;
    }
  }
}

function validateForm(){
  EnterName();
  EnterMass();
  EnterSpeed();
}