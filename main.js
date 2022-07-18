img = "";
objects = [];
Status = "";
objectDetector = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function modelLoaded()
{
    console.log("You are very lazy for using this :|");
    Status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error){
    console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image(img, 0, 0, 640, 420);
    if(Status != "")
    {
        for(i=0; i<objects.length; i++)
        {
         document.getElementById("status").innerHTML = "Status: Objects Detected";
         fill('#000080');
         percent = floor(objects[0].confidence*100);
         text(objects[0].label + "" + percent + "%", objects[0].x + 15, objects[0].y + 15);
         noFill();
         stroke('#000080');
         rect(objects[0].x, objects[0].y, objects[0].width, objects[0].height);
        }
    
    }
    
    }