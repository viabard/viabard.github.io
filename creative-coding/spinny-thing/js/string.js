class PointString {
    /*
        A string of points.
    */
    constructor(x, y, num_points=10, point_distance=20, damper=0.95, line_distance=50, fixed, loop=false) {
        this.num_points = num_points;
        this.line_distance = line_distance;
        this.loop = loop;
        this.points = [];
        this.damper = damper;
        this.point_distance = point_distance;

        if(fixed == undefined){
            fixed = new Array(num_points).fill(false);
        } else if(fixed == true || fixed == false) {
            fixed = [fixed];
            fixed = fixed.concat(Array(num_points-1).fill(false));
        } 

        if(!(x instanceof Array)){
            x = [x];
            x = x.concat(Array.from({length: num_points-1}, () => Math.random()*windowWidth));
        }

        if(!(y instanceof Array)){
            y = [y];
            y = y.concat(Array.from({length: num_points-1}, () => Math.random()*windowHeight));
        }

        if(this.loop) {
            this.points.push(new Point(x[0], y[0], fixed[0], this.points[-1], damper, point_distance));
        } else {
            this.points.push(new Point(x[0], y[0], fixed[0], undefined, damper, point_distance));
        }

        for(let i = 1; i < num_points; i++) {
            this.points.push(new Point(x[i], y[i], fixed[i], this.points[i-1], damper, point_distance));
        }

        if(this.loop) {
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
        
        if(this.loop) {
            let current = this.points[0];
            let distance = Math.sqrt((current.x - prev.x)**2 + (current.y - prev.y)**2);
            if(distance <= this.line_distance) {
                line(current.x, current.y, prev.x, prev.y);
            }
        }
    }

    add_to_string(fixed, location=this.points.length) {
        let rand_ind = Math.floor(Math.random() * this.points.length);
        let second_rand_ind = Math.floor(Math.random() * this.points.length);
        location = second_rand_ind;
        let point = new Point(mouseX, mouseY, fixed, this.points[rand_ind], this.damper, this.point_distance);
        this.num_points += 1;
        this.points.splice(location, 0, point);
    }
}