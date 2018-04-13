function Bird(img){
	this.image = img; 
	this.x = width / 2;
	this.y = height / 2;
	this.liftAcceleration = -5;
	this.gravity = 0.1;
	this.velocity = 0;
	this.score = 0;
	
	this.reset = function(){
		this.x = width / 2;
		this.y = height / 2;
		this.velocity = 0;
		this.score = 0;
	}

	this.width = function(){
		return this.image.width;
	}

	this.height = function(){
		return this.image.height;
	}

	this.left = function(){
		return this.x;
	}

	this.right = function(){
		return this.x + this.width();
	}

	this.top = function(){
		return this.y;
	}

	this.bottom = function(){
		return this.y + this.height();
	}

	this.update = function(){
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;
		this.checkGround();
		this.checkCeil();
	}

	this.increaseScore = function(){
		this.score += 1;
	}

	this.jump = function(){
		this.velocity += this.liftAcceleration;
	}

	this.checkGround = function(){
		if(this.y + this.image.height >= height){
			this.y = height - this.image.height;
			this.velocity = 0;
		}
	}

	this.checkCeil = function(){
		if(this.y - this.image.height <= 0){
			this.y = 0;
			this.velocity = 0;
		}
	}

	this.render = function(){
		image(this.image, this.x, this.y, this.image.width, this.image.height);
	}
}