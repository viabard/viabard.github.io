class Spaghetti {
    constructor(starting_x, starting_y, length = 20){
        
        this.length = length; // create bodies
        this.spaghetti_width = 20;
        this.spaghetti_segment_length = 20;
        this.spaghetti_segments = [];
        
        let prev = null;
        for (var i = 0; i < this.length; i++){

            
            let spaghetti_segment = new Box(starting_x, starting_y + this.spaghetti_segment_length*i, this.spaghetti_width, this.spaghetti_segment_length, false, 'rgb(254,246,158)', 'rgb(155,155,075)');
            this.spaghetti_segments.push(spaghetti_segment);
            if(prev){
                var options = {
                    bodyA: prev.body,
                    bodyB: spaghetti_segment.body,
                    pointA: {x: 0, y: this.spaghetti_segment_length/2},
                    pointB: {x: 0, y: -this.spaghetti_segment_length/2},
                    length: 0,
                    stiffness: 1.1
                }
                var constraint = Constraint.create(options);
                World.add(world, constraint);
            }
            prev = spaghetti_segment; 
        }
    }
    show(){
        for (var i = 0; i < this.length; i++){
            this.spaghetti_segments[i].show();
        }
    }
}