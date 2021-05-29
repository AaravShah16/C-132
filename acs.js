img="";
status="";
objects=[];

function preload(){
    img=loadImage('https://images-na.ssl-images-amazon.com/images/I/61HzjDO4m4L._SX679_.jpg');
}

function setup(){
    canvas=createCanvas(640 , 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status_acs").innerHTML="Status:-Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResult)
}

function gotResult(error , results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    image(img, 0, 0, 640, 420)
fill("#FF0000")
text("AC", 55, 75)
noFill()
stroke("#FF0000")
 rect(50, 60, 530, 220)
}

function back(){
window.location="index.html.html";
}