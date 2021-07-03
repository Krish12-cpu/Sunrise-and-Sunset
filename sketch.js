const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg,hour

function preload() {
    getBackgroundImg()   
}
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}
function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);
    textSize(20)
    if(hour<12&& hour>0){
        text("Time:"+hour+"am",100,100)
    }
    else{
        text("Time:"+hour+" pm",100,100)
    }
    
}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Australia/Sydney")
    var responseJSON = await response.json()
    var time = responseJSON.datetime;
    hour = time.slice(11,13)
    console.log(hour)

    if(hour>=04 && hour <=05){
        bg = "sunrise1.png"
    }else if(hour>=6 && hour <=7){
        bg = "sunrise2.png"
    }else if(hour>=8 && hour <=9){
        bg = "sunrise3.png"
    }
    else if(hour>=10 && hour <=11){    
        bg = "sunrise4.png"
    }
    else if(hour>=12 && hour <=13){
        bg = "sunrise5.png"
    }
    else if(hour>=14 && hour <=15){
        bg = "sunrise6.png"
    }
    else if(hour>=16 && hour <=17){
        bg = "sunset7.png"
    }
    else if(hour>=18 && hour <=19){
        bg = "sunset8.png"
    }
    else if(hour>=20 && hour <=21){
        bg = "sunset9.png"
    }
    else if(hour>=22 && hour <=23){
        bg = "sunset10.png"
    }
    else if(hour>=0 && hour <=1){
        bg = "sunset11.png"
    }
    else{
        bg = "sunset12.png"
    }
    backgroundImg = loadImage(bg)
}
