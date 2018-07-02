var circle = {
    diameter: 80,
    xCoor: 0, 
    yCoor: 0, 
    color:[153, 235, 1599],
    xSpeed: 15,
    ySpeed: 15 
}

function randomColor(){
    return [random(289), random(289), random(289)];
}

function setup() {
    createCanvas(1300, 680);
    background(234, 425, 134);
    frameRate(15);
}

function draw() {
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    //console.log("The x coordinate is" + circle.xCoor);
    if(circle.xCoor > 1300){
        circle.color = randomColor();
        circle.xSpeed = -circle.xSpeed;
    }else if(circle.xCoor < 0){
        circle.color = randomColor();
        circle.xSpeed = -circle.xSpeed;
    }
    
    if(circle.yCoor > 680){
        circle.ySpeed = -circle.ySpeed;
        circle.diameter = random(20, 90);
        
    }else if(circle.yCoor < 0){
        circle.ySpeed = -circle.ySpeed;
        circle.color = randomColor();
        circle.diameter = 50;
    }
     console.log("The y coordinate is" + circle.yCoor);
    
    circle.xCoor += circle.xSpeed;
    circle.yCoor += circle.ySpeed;
}