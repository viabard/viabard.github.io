class Rectangle {
    constructor(x1, y1, x2, y2) {
        // top left
        this.x1 = x1;
        this.y1 = y1;

        // bottom right
        this.x2 = x2;
        this.y2 = y2;

        // colors
        let colors = ['rgb(255, 66, 66)', 'rgb(255, 255, 105)', 'rgb(66, 85, 255)', 'rgb(46, 46, 46)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    show() {
        stroke(0);
        fill(this.color);
        rect(this.x1, this.y1, this.x2, this.y2);
    }
}