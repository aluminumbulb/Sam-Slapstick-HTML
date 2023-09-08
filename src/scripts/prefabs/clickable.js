/*
    Constructor for all clickable objects
    x = x position (number)
    y = y position (number)
    r = preferred radius (number)
*/

class Clickable{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }

    checkClicked = function(mX, mY){
        
        var d = dist(mX, mY, this.x, this.y)
        if (d<this.r){
            return true;
        }
    }
 
    debugDraw = function(){
        Push()
        fill
        ellipse(this.x, this.y, this.r, this.r);

    }
}


class Exit extends Clickable{
    constructor(x, y, r){
        super(x, y, r);
    }

    /*sends user to path
    args: 
        -relativePath (String) 
    */
    exitTo = function(relativePath){
        if(typeof relativePath == 'string')
            document.location.href = relativePath;
        //send user to desired page
    }
}