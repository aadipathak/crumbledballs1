class ground{
    constructor(x,y,width,height){
    var options = {
        'restitution' : 1,
      'friction':0,
      'density':0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    width = width;
    height = height;

    World.add(world,this.body);

    }
    display(){
        rectMode(CENTRE);
        fill(255,0,0);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}