function setup(){
    canvas= createCanvas(600,500);
    canvas.center();

    video= createCapture(VIDEO);
     video.hide();
     PoseNet= ml5.poseNet(video, modelloaded);
     PoseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelloaded(){
console.log("You finally got here!")
}

function preload(){
    song= loadSound("music.mp3");
    song2= loadSound("music2.mp3");
}

function play(){
    song.play();
    song.setVolume();
    song.rate(1);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log(leftWristX +" "+ leftWristY +" "+ rightWristX +" "+ rightWristY);
    }
    else{
        
    }
}