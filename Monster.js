class Monster {
    constructor(x,y,r){
        var options= {
            density: 1,
           friction: 0.5
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Monster-01.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
		ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,this.r*2, this.r*2);
        pop();
    }
}