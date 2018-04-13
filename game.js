var bird;
var pipes = [];
const INITIAL_NUM_OF_PIPES = 4;
var span = 200;
var isPaused = false;

function createPipes(){
	for(var i = 0; i < INITIAL_NUM_OF_PIPES; ++i){
		pipes.push(new Pipe(width + i * span));
	}
}

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  createPipes();
}

function keyPressed(){
	switch(key){
		case ' ':
			console.log("SPACE was pressed!");
			break;
		case 'N':
			console.log("n was pressed");
			break;
		case 'p':
			console.log("p was pressed");
			break;
		case 'q':
			console.log("q was pressed");
			break;
	}
	
	if( key == ' '){
		console.log("SPACE was pressed");
		bird.jump();
	} else if(key == 'n'){
		console.log("n was pressed");
	}
	
}

function draw() {
  background("#9faded");
  //console.log("pipes.length = ", pipes.length);
  for (var i = pipes.length - 1; i >= 0; --i){
  	//console.log("px[" + i + "] = ", pipes[i].x);
  	if(pipes[i].isOffScreen()){
  		pipes.splice(i, 1);
  		pipes.push(new Pipe(pipes[pipes.length - 1].x + span));
  	} else {
  		pipes[i].update();
  		pipes[i].render();
  	}
  }
  bird.update();
  bird.render();
}

