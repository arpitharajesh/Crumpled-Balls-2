class ball {

    constructor(x,y,width, height){

        var options={
            'isStatic': true,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2
        }
        this.image = loadImage("paper.png")
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.x = x;
        this.y = y;
       this.width = width;
       this.height= height;
        World.add(world, this.body)
    }

    display(){
        
        var pos = this.body.position;
        imageMode(CENTER);
        fill("red");
         image(this.image,pos.x, pos.y, this.radius);
       // ellipse(pos.x, pos.y, this.width, this.height);
      
    }

}