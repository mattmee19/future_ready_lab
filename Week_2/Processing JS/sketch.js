/*var circle = {
    diameter: 80,
    xCoor: 0, 
    yCoor: 0, 
    color:[153, 235, 1599],
    xSpeed: 15,
    ySpeed: 15 
}
*/


function randomColor(){
    return [random(289), random(289), random(289)];
}




function Circle(x,y, size, color, xSpeed, ySpeed){
    this.xCoor = x;
    this.yCoor = y;
    this.diameter = size;
    this.color = color || [0,0,0]; 
    this.xSpeed = xSpeed || 5;
    this.ySpeed = ySpeed || 7;
}

var circleList= [];

function createCircle(){
    var numCircles = random ([2, 5, 9, 16]);
    for (var i = 0; i < numCircles; i++){
        circleList.push(new Circle(random(width), random(height), 50));
    }
}

function setup() {
    createCanvas(parseInt(prompt("Enter a value for the width")),parseInt(prompt("Enter a value for the height")));
    createCircle();
}


function draw() {
    background(27, 74, 150);
    for(var i = 0; i < circleList.length; i++){
        fill(circleList[i].color);
        ellipse(circleList[i].xCoor, circleList[i].yCoor, circleList[i].diameter);
        if(circleList[i].xCoor > width || circleList[i].xCoor < 0){
            circleList[i].color = randomColor();
            circleList[i].xSpeed = -circleList[i].xSpeed;
        }

        if(circleList[i].yCoor > height || circleList[i].yCoor < 0){
            circleList[i].ySpeed = -circleList[i].ySpeed;
            circleList[i].diameter = random(20, 90);

        }

        circleList[i].xCoor += circleList[i].xSpeed;
        circleList[i].yCoor += circleList[i].ySpeed;
    }
}