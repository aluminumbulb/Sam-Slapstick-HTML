/*const ClickableTypes = {Default: 0, 
                        Circular: 1, 
                        Rectancular: 2};
*/

/*
Defines the Clickable Class, and its children.
Intended for use as a basic form of click-handling in defined areas
*/
class Clickable{
    constructor(x, y, id = "Clickable Object", action){
        
        this.x = x;//int
        this.y = y;//int
        this.id = id;//str
        this.action = action //a function to be performed on a successful click
        this.clicked = 0;//int
    }

    //Checks to see if coordinates are within the area
    //Clickable parent considered to have area = 0
    checkClicked(mx, my){
        if(mx==this.x && my==this.y){

            this.performAction();
            clicked+=1;
            this.clicked=true;
            
            return true;
        }

        return false;
    }

    performAction(){
        //check to ensure action
        console.log("action performed from ", this.id,
        " action is of type ", typeof this.action);
        
        if(typeof this.action == "function"){

            //ACTION INPUT DEFINED HERE it will not vary otherwise
            this.action();
        }
    }
}

class ClickableArea extends Clickable{
    constructor(x, y, w, h, id, action){
        super(x, y, id, action);
        this.w = w;
        this.h = h;
        this.r = 0;
    }

    debugDraw = function(){
        push();
            fill(255,0,0,50);
            ellipse(this.x, this.y, this.r);
            noFill();
            stroke(0)
            textSize(12);
            text(this.id, this.x-this.r/2, this.y)
        pop();
    }

    
    checkClicked(mx, my){
        if(mx>this.x&&mx<this.x+this.w){
            if(my>this.y&&my<this.y+this.h){
                
                this.performAction();
                
                this.clicked += 1;
                console.log(this.id+" clicked: "+this.clicked+" times");
                
                return true;
            }
        }  
    }
}

class ClickableCircumference extends Clickable{
    constructor(x, y, r, id, action){
        
        super(x, y, id, action);
        this.r = r;
    }

    debugDraw = function(){
        push();
            fill(255,0,0,50);
            ellipse(this.x, this.y, this.r);
            noFill();
            stroke(0)
            textSize(12);
            text(this.id, this.x-this.r/2, this.y)
        pop();
    }

    
    checkClicked(mx, my){
        if(dist(mx,my, this.x, this.y) < this.r){

            super.performAction();
            
            this.clicked += 1;
            console.log(this.id+" clicked: "+this.clicked+" times");
            
            return true;
        }
    }
}