function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(450,450);
    canvas.position(650,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Posenet is initialized');
}

function draw(){
    background('#ADD8E6');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}