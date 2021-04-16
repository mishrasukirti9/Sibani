class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
   
    Matter.Bodies.polygon(10, 20, 6, 4, [options])
    this.width = width;
    this.height = height;
   
    
    
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
   
    strokeWeight(5);
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};