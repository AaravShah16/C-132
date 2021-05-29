img="";
status="";
objects=[];

function preload(){
    img=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXu2Tmcr6dJ1WIgSlmHlHi3T16x5ZykMAEQ&usqp=CAU');
}

function setup(){
    canvas=createCanvas(640 , 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status_shank").innerHTML="Status:-Detecting Objects";
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
text("Sink", 40, 150)
noFill()
stroke("#FF0000")
 rect(100, 120, 520, 300)
}

function back(){
window.location="index.html";
}