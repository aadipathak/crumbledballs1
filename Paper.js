class paper{
    constructor(x,y,radius){
    var options = {
        'restitution' : 1,
      'friction':0,
      'density':0
    }
    this.body = Bodies.circle(x,y,radius,options);
   radius = radius ;
    World.add(world,this.body);

    }
    display(){
        rectMode(CENTRE);
        fill(255,0,0);
        circle(this.body.position.x,this.body.position.y,this.radius);
    }
}