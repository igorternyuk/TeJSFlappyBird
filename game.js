const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 450;
const INITIAL_NUM_OF_PIPES = 4;
const SPAN = 300;

var bird;
var pipes = [];
var isGamePaused = false;
var isGameOver = false;
var scoreIncreased = false;
var imageBird, imagePipeTop, imagePipeBottom, bgSound;

function preload(){
	imageBird = loadImage("resources/images/bird.png");
	imagePipeTop = loadImage("resources/images/pipeNorth.png");
	imagePipeBottom = loadImage("resources/images/pipeSouth.png");
	bgSound = loadSound("resources/sounds/fly.mp3");
	scoreSound = loadSound("resources/sounds/score.mp3");	
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
//  bird = new Bird(imageBird);
  startNewGame();
}

function createPipes(){
	pipes.splice(0, pipes.length);
	for(var i = 0; i < INITIAL_NUM_OF_PIPES; ++i){
		pipes.push(new Pipe(imagePipeTop, imagePipeBottom, width + i * SPAN));
	}
}

function startNewGame(){
	bird = new Bird(imageBird);
	createPipes();
	isGamePaused = false;
    isGameOver = false;
    scoreIncreased = false;
    bgSound.loop();
}

function checkCollisions(){
	for (var i = 0; i < pipes.length; i++) {
		let isBirdInGap = bird.right() >= pipes[i].left() &&
		                  bird.x < pipes[i].right();
		if(isBirdInGap){
			if(bird.top() > pipes[i].top &&
			   bird.bottom() < height - pipes[i].bottom){
				if(!scoreIncreased){
					bird.increaseScore();
					scoreIncreased = true;
					scoreSound.play();
				}
			} else {
				console.log("HIT");
				gameOver();
			}
			break;
		} else {
			scoreIncreased = false;
		}
	}
}

function gameOver(){
	isGameOver = true;
	bgSound.stop();
}

function mouseClicked(){
	if( mouseButton === LEFT){
		bird.jump();
	} else if(mouseButton === CENTER){
		togglePause();
	}
}

function togglePause(){
	isGamePaused = !isGamePaused;
	if(isGamePaused){
		bgSound.stop();
	} else {
		bgSound.loop();
	}
}
	

function keyPressed(){
	switch(key){
		case ' ':
			bird.jump();
			break;
		case 'N':
			startNewGame();
			break;
		case 'P':
			togglePause();
			break;
		default:
			break;
	}
}

function update(){
	if(!isGamePaused && !isGameOver){
  		bird.update();
  		for (var i = pipes.length - 1; i >= 0; --i){
	  	if(pipes[i].isOffScreen()){
	  		pipes.splice(i, 1);
	  		pipes.push(new Pipe(imagePipeTop, imagePipeBottom, 
	  			pipes[pipes.length - 1].x + SPAN));
	  	} else {
	  		pipes[i].update();
	  	}
  		checkCollisions();	
  	}	
  }
}

function renderScore(){
	textSize(32);
	fill(255,0,0);
	var score = "SCORE: " + bird.score;
	text(score, 0, 50);
}

function renderGameStatus(){
	textSize(64);
	if(isGameOver){
		fill("#d41137");
		text("GAME OVER!!!", 5, height / 2);
	} else if(isGamePaused){
		fill("#197f00");
		text("Paused", 100, height / 2);
	}
}

function draw() {
	update();
  	background("#9faded");
  	for(var i = 0; i < pipes.length; ++i){
  		pipes[i].render();
  	}
  	bird.render();
  	renderScore();
  	renderGameStatus();
}

