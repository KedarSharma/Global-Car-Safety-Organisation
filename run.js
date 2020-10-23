var car,wall;
var red, yellow, green;
var damage;

function setup() {
    createCanvas(700,400);
    car = createSprite(50, 200, 50, 20);
    car.shapeColor = "gray";
    wall = createSprite(450,200,10,300);
    wall.shapeColor = "white";
    red = createSprite(20,25,15,15);
    red.shapeColor = "red";
    yellow = createSprite(160,25,15,15);
    yellow.shapeColor = "yellow";
    green = createSprite(360,25,15,15);
    green.shapeColor = "green";
}

function draw(){
    background("black");

    data = name();
    damage = (data['KE'])/22500;

    car.velocityX = data["speed"]/100;

    stroke("white");
    strokeWeight(3);
    line(0,50,800,50);
    line(0,350,800,350);
    line(230,350,230,400);
    line(450,350,450,400)

    noStroke();
    textSize(27);
    text("= Fatal",37,34);
    text("= Injurious",177,34);
    text("= Safe",377,34);

    textSize(25);
    text("CERTIFICATION",485,75);

    textSize(25);
    text("NAME: ",5,386);
    text("MASS: ",238,386)
    text("SPEED: ",460,386);

    if(car.isTouching(wall)){
        car.velocityX = 0;

        //changing wall's color
        if((data['KE'])/22500 > 180){
            wall.shapeColor="red";
        }
        else if((data['KE'])/22500 > 80 && (data['KE'])/22500 <= 180){
            wall.shapeColor = "yellow";
        }
        else if((data['KE'])/22500 <= 80){
            wall.shapeColor = "green";
        }

        //grading
        if(damage <= 65){
            textSize(120);
            fill(wall.shapeColor);
            text("A+",500,250)
        }
        else if(damage <= 80 && damage > 65){
            textSize(120);
            fill(wall.shapeColor);
            text("A-",500,250)
        }
        else if(damage <= 95 && damage > 80){
            textSize(120);
            fill(wall.shapeColor);
            text("B+",500,250)
        }
        else if(damage <= 110 && damage > 95){
            textSize(120);
            fill(wall.shapeColor);
            text("B-",500,250)
        }
        else if(damage <= 130 && damage > 110){
            textSize(120);
            fill(wall.shapeColor);
            text("C+",500,250)
        }
        else if(damage <= 150 && damage > 130){
            textSize(120);
            fill(wall.shapeColor);
            text("C-",500,250)
        }
        else if(damage <= 165 && damage > 150){
            textSize(120);
            fill(wall.shapeColor);
            text("D+",500,250)
        }
        else if(damage <= 180 && damage > 165){
            textSize(120);
            fill(wall.shapeColor);
            text("D-",500,250)
        }
        else if(damage <= 200 && damage > 180){
            textSize(120);
            fill(wall.shapeColor);
            text("E",525,250)
        }
        else if(damage > 200){
            textSize(120);
            fill(wall.shapeColor);
            text("F",525,250)
        }
    }

    //car color
    if(data["name"] == "Mercedes"){
        car.shapeColor = "gray";
    }
    else if(data["name"] == "Lamborghini"){
        car.shapeColor = "white"
    }
    else if(data["name"] == "Bugatti"){
        car.shapeColor = "cyan"
    }

    drawSprites();
}

function name(){
    var url_string = document.URL;
    var url = new URL(url_string);
    var car = url.searchParams.get("carName");
    var spd = url.searchParams.get("speed");
    var mass = url.searchParams.get("weight");
    var msSpeed = spd*(5/18);
    textSize(25);
    text(car,90,386);
    text(mass + " kg",319,386);
    text(spd + " km/hr",565,386);
    return {
        KE: 0.5*msSpeed*msSpeed*mass, 
        name: car,
        speed: spd
    };
}