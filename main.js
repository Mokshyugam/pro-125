
difference =0;
rightwristx = 0;
leftwristx =0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        

        rightwristx =results[0].pose.rightWrist.x;
        leftwristx =results[0].pose.leftWrist.x;
        console.log('leftwristx  ='+ leftwristx + "rightwristx ="+ rightwristx);
        difference = floor(leftwristx - rightwristx);
    }
}


function draw(){
    background('#6e7078');
    textSize()(difference);
    text()(Yugam , 50, 300);
    fill("#2a2b2a");
    document.getElementById('text_side').innerHTML = "Width And Height of a text will be = " + difference +"px";
}
