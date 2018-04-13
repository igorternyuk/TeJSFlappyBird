function Pipe(x){
	this.x = x;
	this.velocity = -1;
	this.top = random(height / 2);
	this.GAP = 256;
	this.bottom = height - this.top - this.GAP;
	this.width = 20;

	this.isOffScreen = function(){
		return this.x <= -this.width;
	}

	this.update = function(){
		this.x += this.velocity;
	}

	this.render = function(){
		fill("#7f6600");
		rect(this.x,0, this.width, this.top);
		rect(this.x, height - this.bottom, this.width, this.bottom);
	}
}
