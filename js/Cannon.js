class Cannon{
    constructor(x, y, width, height,angle) {
        var options = {
          isStatic: true
        };
        this.width = width;
        this.height = height;
        this.angle = angle
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
      }
      display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.angle)
        fill("gray");
        rectMode(CENTER);
        rect(110, -30, this.width, this.height);
        pop();
        fill("gray")
        arc(pos.x-50,pos.y,150,200,PI,2*PI)
}
}