let cubeWidth = 60;

class IsometricCube {
	constructor(x, y, width, height, leftColor, rightColor, topColor, movingSpeed=0.01) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.leftColor = leftColor;
		this.rightColor = rightColor;
		this.topColor = topColor;
		this.progress = 0;
		this.currentHeight = this.height;
		this.moving = false;
		this.movingSpeed = movingSpeed;
		this.moved = true;

		this.moveHeight = 0;
	}
	
	show() {

		// left face
		fill(this.leftColor);
		let newLeftX = this.x - (this.width * Math.cos(Math.PI/6));
		let newLeftY = this.y - (this.width * Math.sin(Math.PI/6));
		beginShape();
		vertex(this.x, this.y);
		vertex(newLeftX, newLeftY);
		vertex(newLeftX, newLeftY-this.currentHeight);
		vertex(this.x, (newLeftY-this.currentHeight) + (this.y-newLeftY));
		endShape(CLOSE);

		// right face
		fill(this.rightColor);
		let newRightX = this.x + (this.width * Math.cos(Math.PI/6));
		let newRightY = this.y - (this.width * Math.sin(Math.PI/6));
		beginShape();
		vertex(this.x, this.y);
		vertex(newRightX, newRightY);
		vertex(newRightX, newRightY-this.currentHeight);
		vertex(this.x, (newRightY-this.currentHeight) + (this.y-newRightY));
		endShape(CLOSE);

		// top face
		fill(this.topColor);
		beginShape();
		vertex(this.x, this.y-this.currentHeight);
		vertex(newLeftX, newLeftY-this.currentHeight); //out to the left
		vertex(this.x, (newLeftY-this.currentHeight) - (this.y-newRightY));
		vertex(newRightX, newRightY-this.currentHeight);
		endShape(CLOSE);
	}

	move(moveHeight=this.moveHeight, movingSpeed=this.movingSpeed) {
		this.movingSpeed = movingSpeed;
		this.moveHeight = moveHeight;

		let progressTimesPi = this.progress * Math.PI - Math.PI/2;
		progressTimesPi = (Math.sin(progressTimesPi) + 1)/2;
		this.currentHeight = lerp(this.height, this.moveHeight, progressTimesPi);

		if (!this.moved && this.progress <= 1) {
			this.progress += this.movingSpeed;
		} else {
			this.moved = true;
			this.height = this.currentHeight;
			this.progress = 0;
		}
	}

	getMovedStatus() {
		return (this.moved);
	}
	setMovedStatus(moved) {
		this.moved = moved;
	}
}

let x = [];
let pixelGrid = [];
let posXDiff = cubeWidth * Math.cos(Math.PI/6) * 2;
let posYDiff = cubeWidth * Math.sin(Math.PI/6);

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	
	//create grid of cubes
	
	for (let x = 0; x < width+(cubeWidth*2); x += posXDiff) {
		let tempYList = [];
		let xi = Math.round(x/posXDiff);

		for (let y = 0; y < height+(cubeWidth*4); y += posYDiff) {
			let yi = Math.round(y/posYDiff);
			if (yi%2 == 0) {
				var thingy = posXDiff/2;
			} else {
				thingy = 0;
			}
			/// color
			let r = Math.floor(random(1, 25));
			let g = Math.floor(random(125, 250));
			let b = Math.floor(random(150, 250));
			let color1 = "rgb(" + r + "," + g + "," + b + ")";
			/// color
			let r2 = Math.floor(random(1, 30));
			let g2 = Math.floor(random(40,75));
			let b2 = Math.floor(random(40,100));
			let color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
			/// color
			let r3 = Math.floor(random(70, 80));
			let g3 = Math.floor(random(165, 185));
			let b3 = Math.floor(random(190, 210));
			let color3 = "rgb(" + r3 + "," + g3 + "," + b3 + ")";


			tempYList.push(new IsometricCube(x-thingy, y, cubeWidth, random(10, 100), color1, color2, color3));
		}
		pixelGrid.push(tempYList);
	}
}

function draw() {
	background(255);
	stroke('rgb(0, 0, 0)');
	fill('rgb(100, 200, 50)')
	strokeWeight(1);
	for (let y = 0; y < height+(cubeWidth*4); y += posYDiff) {
		let yi = Math.round(y/posYDiff);
		for (let x = 0; x < width+(cubeWidth*2); x += posXDiff) {
			let xi = Math.round(x/posXDiff);
			if (pixelGrid[xi][yi].getMovedStatus()) {
				pixelGrid[xi][yi].setMovedStatus(false);
				pixelGrid[xi][yi].move(random(10, 130), random(15, 50)/1000);
			} else {
				pixelGrid[xi][yi].move();
			}
			pixelGrid[xi][yi].show();
		}
	}
}