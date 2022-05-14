X = '';
Y = '';

function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound('jump.wav');
	coinGet = loadSound('coin.wav');
	kick = loadSound('kick.wav');
	dead = loadSound('mariodie.wav');
	gameover = loadSound('gameover.wav');
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");

	instializeInSetup(mario);

	video = createCapture(VIDEO);
    video.size(800,400);
	video.parent('game_console');

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}

function draw() {
	game()
}

function modelLoaded() {
	console.log('model loaded');
}

function gotPoses(results) {
	if(results.length > 0){
		X = results[0].pose.nose.x;
		Y = results[0].pose.nose.y;
	}
}