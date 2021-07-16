const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg, hr ;

function preload() {
    
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    {
        background(backgroundImg);
    }
    

    Engine.update(engine);

    
    fill("black");
    textSize(30);

    if(hr>=12){
        text("Time : "+ hr%12 + " PM", 50,100);
       }else if(hr==0){
         text("Time : 12 AM",100,100);
       }else{
        text("Time : "+ hr%12 + " AM", 50,100);
       }


}

async function getBackgroundImg(){

    var response =  await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseType = await response.json();
    console.log(responseType)
    var dt = responseType.datetime;
    console.log(dt)
     hr = dt.slice(11,13);
    console.log(hr)

    if(hr>=4 && hr<=6)
    {
       
        bg = "sunrise1.png"
        
    }
    else if(hr>= 6 && hr<= 8)
    {
       
        bg = "sunrise2.png"


    }
    else if(hr>=8 && hr <= 11)
    {
        bg = "sunrise3.png"

    }

    else if(hr>=11 && hr <= 13)
    {
        bg = "sunrise4.png"

    }
    else if(hr>=13 && hr <= 15)
    {
        bg = "sunrise5.png"

    }
    else if(hr>=15 && hr <= 17)
    {
        bg = "sunrise6.png"

    }
    else if(hr>=17 && hr <= 19)
    {
        bg = "sunset7.png"

    }
    else if(hr>=19 && hr <= 23)
    {
        bg = "sunset8.png"

    }
    else if(hr>=23 && hr === 0)
    {
        bg = "sunset9.png"

    }
    else if(hr>=0 && hr <= 3)
    {
        bg = "sunset10.png"

    }
    else if(hr>=3 && hr <= 4)
    {
        bg = "sunset11.png"

    }
    else{

        bg = "sunset12.png"
    }

    backgroundImg = loadImage(bg);

}
