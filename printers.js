img="";
status="";
objects=[];

function preload(){
    img=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TebDIOHrDO44ifERe-pcdMZiWFzG8M6_mA&usqp=CAU');
}

function setup(){
    canvas=createCanvas(640 , 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status_printers").innerHTML="Status:-Detecting Objects";
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
text("Printer", 40, 150)
noFill()
stroke("#FF0000")
 rect(20, 130, 450, 280)
}

function back(){
window.location="index.html";
}