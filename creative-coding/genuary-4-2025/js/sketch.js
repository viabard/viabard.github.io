let Black = 'rgb(0, 0, 0)';
let onBlack = 'rgb(6, 6, 20)';
let b = 'rgb(255, 255, 255)'; //background
let pixelSize = 100;
let pixelSpeed = 0.005; //0 to 1
let sw = 1; // stroke weight
let s = 'rgb(6,6,6)';

class vanishingPixel {
	constructor(x, y, size, vanishingSpeed = 0.1, progress = 0) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.vanishingSpeed = vanishingSpeed;
		this.progress = progress;
		
		// vanish location
		this.vanishX = this.x;
		this.vanishY = this.y;
		
		this.shrinking = false;
	}
	 
	move() {
		if (this.progress <= 1 && this.shrinking) {
			this.progress += this.vanishingSpeed;
		} else if (!this.shrinking && this.progress > 0) {
			this.progress -= this.vanishingSpeed;
		} else if (!this.shrinking && this.progress <= 0) {
			this.progress = 0;
		} else {
			this.shrinking = false;
		}
	}
	
	setShrinking() {
		this.shrinking = true;
	}
	
	show() {
		let progressTimesPi = this.progress * Math.PI - Math.PI/2;
		progressTimesPi = (Math.sin(progressTimesPi) + 1)/2;
		let currentX = lerp(this.x, this.vanishX, progressTimesPi);
		let currentY = lerp(this.y, this.vanishY, progressTimesPi);
		let currentSize = lerp(this.size, 0, progressTimesPi);

        let currentRoundedness = lerp(0, this.size/2, progressTimesPi);
		rect(currentX, currentY, currentSize, currentSize, currentRoundedness);
	}
}

let gridPixels = [];

function setup() {
    rectMode(CENTER);
	createCanvas(windowWidth, windowHeight);
	background(b);
	for (let x = 0; x < width + pixelSize; x += pixelSize) {
		var tempYList = [];
		for (let y = 0; y < height + pixelSize; y += pixelSize) {
			tempYList.push(new vanishingPixel(x, y, pixelSize, pixelSpeed));
		}
		gridPixels.push(tempYList);
	}
    strokeWeight(sw);
    stroke(s);
    fill(Black);

    textSize(width/30);
}

function draw() {
	background(onBlack);
    text("remember", width/10, height/4);
    text("listen", width/2, height*3/4);
    text("learn", width*7/8, height/5);
	if (mouseIsPressed) {
		let x = Math.floor((mouseX+pixelSize/2)/pixelSize);
        let y = Math.floor((mouseY+pixelSize/2)/pixelSize);
        if (x >= 0 && y >= 0 && x <= Math.floor(width/pixelSize) && y <= Math.floor(height/pixelSize)) {
            gridPixels[x][y].setShrinking();
        }
	}
	for (let x = 0; x < width + pixelSize; x += pixelSize) {
        let xi = x/pixelSize;
		for (let y = 0; y < height + pixelSize; y += pixelSize) {
            let yi = y/pixelSize;
			let pixel = gridPixels[xi][yi];
            pixel.move();
			pixel.show();
		}
	}
    
}