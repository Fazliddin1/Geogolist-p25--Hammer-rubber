class Rubber {
    constructor(x, y) {
      var options = {
        'density':2,
        'friction': 1.0,
        'restitution':0.5
      };

      this.body = Bodies.circle(x, y, 50,options);
      this.radius = 50;
      World.add(world, this.body);
    };


    display(){
  
      push();
      translate(this.body.position.x, this.body.position.y);
      fill('blue')
      ellipseMode(CENTER)
      ellipse(0, 0, this.radius, this.radius);
      pop();
    };
  };
  