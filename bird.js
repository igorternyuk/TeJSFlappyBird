function Bird(){
	this.x = width / 2;
	this.y = height / 2;
	this.width = 32;
	this.height = 32;
	this.liftAcceleration = -5;
	this.gravity = 0.1;
	this.velocity = 0;
	
	this.update = function(){
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;
		this.checkGround();
		this.checkCeil();
	}

	this.jump = function(){
		this.velocity += this.liftAcceleration;
		print(this.velocity);
		//console.log(this.velocity);
	}

	this.checkGround = function(){
		if(this.y + this.height / 2 >= height){
			this.y = height - this.height / 2;
			this.velocity = 0;
		}
	}

	this.checkCeil = function(){
		if(this.y - this.height / 2 <= 0){
			this.y = this.height / 2;
			this.velocity = 0;
		}
	}

	this.render = function(){
		fill("#5cb82e");
		ellipse(this.x, this.y, this.width, this.height);
	}
}