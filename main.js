img="";
 status="";
 sound="";
 objects = [];
 baby_Status="";


 
 function setup()
 {
     canvas = createCanvas(600, 450);
     canvas.center();
     objectDetector = ml5.objectDetector("cocossd", modelLoaded);
     document.getElementById("status").innerHTML = "Status: Detecting Objects";
 }  

function preload()
{
    img =loadImage("baby_pic.jpeg");
    sound = loadSound("warning.mp3");
}

 function modelLoaded()
 {
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
 }

 function draw()
 {
     image(img,0, 0, 640, 450);
     if( status != "")
     {
        for(i=0; i<objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Object Detected"; 
            baby_Status = objects[i].label;
        }

        if(baby_Status == "person")
        {
             document.getElementById("baby_status").innerHTML = "Baby Detected";  
        }
        if(baby_Status != "person")
        {   
            document.getElementById("baby_status").innerHTML = "Baby not Detected";
            sound.play();
        }
    }
} 


 function gotResult(error, results)
 {
    if(error)
    {
        console.log(error);
    }
    console.log(results)
    objects = results;
}