status="";
function setup()
{
    canvas=createCanvas(700,380);
    canvas.position(350,200);
    video=createCapture(VIDEO);
    video.hide();
    
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status=Detecting Objects";

}

function modelLoaded()
{
    console.log('modelLoaded');
    inputvar=document.getElementById("input").value;
    console.log(inputvar);
    status=true;
}

function draw()
{
    image(video,0,0,700,380);
    
}