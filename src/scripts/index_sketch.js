"use strict";

let click = new Exit(50,50,100);
let cX = window.innerWidth, cY=400;
function setup() {
  let can = createCanvas(cX, cY);
  createDoor();
}

function mousePressed(){
    if(click.checkClicked(mouseX, mouseY)){
        //written assuming index location
        click.exitTo("/src/pages/example_p5.html");
    }
}

function draw() {
  click.debugDraw();
}

//hypothetical utility function
function checkForRefresh(){
    if(windowResized()){
        //somethin
    }
}

function createDoor(){
  let dX = 200, dY=height
  rect((cX-dX)/2, (cY-dY)/2, dX, dY);
  let kX = 70, kY=50;
  circle(kX+width/2, kY+dY/2, 50);
  let wX = 0, wY = 0;
}