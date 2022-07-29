function setup ()  {
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(550,550);
    posenet=ml5.poseNet('video',modalLoaded);
    posenet.on('pose',gotPoses);
}
function modalLoaded(){
    console.log('Posenet is intialized');
}
 function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
 }
 function draw(){
    background('4, 181, 163');
 }
