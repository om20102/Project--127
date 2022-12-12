song = "";
leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    Canvas = createCanvas(600,500);
    Canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotPoses);
}

function modalLoaded(){
    console.log('Pose is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = "+scoreRightWrist+"scoreLeftWrist = "+scoreLeftWrist);
        

        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+ leftWristX+ "leftWristY = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightWristX+ "rightWristY = "+rightWristY);
    }
}

function draw() {
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("FF0000");
}

function Play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}