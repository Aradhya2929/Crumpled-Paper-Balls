class Dustbin{
    constructor(x,y,width,height){
        var options={
isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.body)
        
    }
    
display(){
var pos = this.body.position
translate(pos.x,pos.y)
translate(this.body.position.x, this.body.position.y);
imageMode(CENTER);
 image(this.image,this.pos.x,this.pos.y, this.width, this.height);

}
}