function Pipe(imageTop, imageBottom, x){
	this.imageTop = imageTop;
	this.imageBottom = imageBottom;
	this.x = x;
	this.velocity = -1;
	this.top = random(height / 2);
	this.GAP = 100;
	this.bottom = height - this.top - this.GAP;
	
	this.width = function(){
		return this.imageTop.width;
	}

	this.left = function(){
		return this.x;
	}

	this.right = function(){
		return this.x + this.width();
	}

	this.isOffScreen = function(){
		return this.x <= -this.imageTop.width;
	}

	this.update = function(){
		this.x += this.velocity;
	}

	this.render = function(){
		image(this.imageTop, this.x, height - this.bottom - this.GAP - this.imageTop.height,
		 this.imageTop.width, this.imageTop.height);
		image(this.imageBottom, this.x, height - this.bottom,
		 this.imageBottom.width, this.imageBottom.height);
	}
}
