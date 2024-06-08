song="";
LeftwristX = 0;
LeftWristY = 0;
RightWristX = 0;
RightWristY = 0;


function setup() {
    createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();


    posenet = ml5.poseNet(video, modelloaded)
    posenet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 600, 500)
}

function modelloaded() {
    console.log("Model has been loaded successfully.")
    }

    
function preload() {
    song = loadSound("music2.mp3");
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        LeftwristX = results[0].pose.leftWrist.x
        LeftWristY = results[0].pose.leftWrist.y
        console.log("LeftwristX " + LeftwristX + "LeftwristY" + LeftWristY )

        RightWristX = results[0].pose.rightWrist.x
        RightWristY = results[0].pose.rightWrist.y
        console.log("RightwristX" + RightWristX + "RightwristY" + RightWristY)
    }
}