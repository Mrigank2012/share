x=0
y=0
draw_circle="";
draw_rect="";

var speechRecognition = window.webkitSpeechRecognition;

var recognition= new speechRecognition();

function start(){
    document.getElementById("status").innerHTML="Mriganks System is listening pleas speak";
    recognition.start();

}

recognition.onresult=function(event){
    console.log(event);

    var content=event.results[0][0].transcript;

    document.getElementById("status").innerHTML="The Speech Has been recognised as:"+content;
    if(content=="circle")
    {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started Drawning Circle";
        draw_circle="set";
    }
    if(content=="rectangle")
    {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started Drawning Rectangle";
        draw_rect="set";
    }
}

function setup(){
    canvas=createCanvas(1000,700);
    if(draw_circle=="set")
    {
        radius.Math.floor(Math.randow()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is drawn.";
        draw_circle="";
    }

    if(draw_rect=="set")
    {
       
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="Rectangle is drawn.";
        draw_rect="";
    }
}