"use strict";

let cX = window.innerWidth, cY=400;

//----Object References
let listeners = [];

function setup() {
  let can = createCanvas(cX, cY);
  drawVisuals();
  drawFunctionals();
}

function draw() {
  listeners.forEach((listener)=>listener.debugDraw());
}

function mousePressed(){
  
    listeners.forEach(
      (listener)=>{
        if(listener.recieveClickAt(mouseX, mouseY)){
          
        }
      }
    )
}

//hypothetical utility function
function checkForRefresh(){
    if(windowResized()){
        //somethin
    }
}

//-----VISUALS-------

function drawVisuals(){
  createDoor();
}

function createDoor(){
  const dX = 200, dY=height;
  rect((cX-dX)/2, (cY-dY)/2, dX, dY);
  const kX = 70, kY=50;
  circle(kX+width/2, kY+dY/2, 50);
  //window
  const wW = 150, wH = 120, wX = (width-wW)/2, wY = 50 ;
  rect( wX, wY, wW, wH);
}

//-----FUNCTIONALS---
function drawFunctionals(){
  //knob exit
  const kX = 70, kY=50;
  const dX = 200, dY=height;
  let knob = new ClickableCircumference(kX+width/2, kY+dY/2, 50, "knob");
  listeners.push(knob);

  //window exit
  const wW = 150, wH = 120, wX = (width-wW)/2, wY = 50 ;
  let window = new ClickableArea(wX, wY, wW, wH, "window");
  listeners.push(window);
}