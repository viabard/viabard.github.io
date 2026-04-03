class PointString {
    /*
        A string of points.
    */
    constructor(x, y, num_points=10, point_distance=20, damper=0.95, line_distance=50, fixed=true, loop=false) {
        this.num_points = num_points;
        this.line_distance = line_distance;

        this.points = [];
        this.points.push(new Point(x, y, fixed));
        for(let i = 0; i < num_points-1; i++) {
            this.points.push(new Point(Math.random() * windowWidth, Math.random() * windowHeight, false, this.points[i], damper, point_distance));
        }
        if(loop) {
            this.points[0].update_prev(this.points[num_points-1]);
        }
    }

    move() {
        for(let i = 0; i < this.num_points; i++) {
            this.points[i].move();
        }
    }

    show() {
        let prev = this.points[0];
        circle(prev.x, prev.y, 1);
        for(let i = 1; i < this.num_points; i++) {
            let current = this.points[i];
            let distance = Math.sqrt((current.x - prev.x)**2 + (current.y - prev.y)**2);

            if(distance <= this.line_distance) {
                line(current.x, current.y, prev.x, prev.y);
            } else {
                
                circle(current.x, current.y, 1)
            }
            prev = this.points[i];
        }
    }
}