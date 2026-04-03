class Box {
    constructor(x, y, w, h, fixed = false, fill = 'rgb(255, 100, 0)', stroke = 0){
        var options = {
            friction: 0.2,
            restitution: 0
        }
        options['isStatic'] = fixed;
        this.fill = fill;
        this.stroke = stroke;
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.fixed = fixed;
        World.add(world, this.body);
    }
    show(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(this.stroke);
        fill(this.fill);
        rect(0, 0, this.w, this.h);
        pop();
    }
}