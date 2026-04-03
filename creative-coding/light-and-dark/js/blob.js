class MyBlob {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.xv = random(-1, 1);
        this.yv = random(-1, 1);
    }

    move(){
        this.x += this.xv;
        this.y += this.yv;

        if(this.x < 0 || this.x > width) this.xv *= -1;
        if(this.y < 0 || this.y > height) this.yv *= -1;
    }

    show(){
        circle(this.x, this.y, 100);
    }
}