function makebubble(){
    var clutter = "";

for(var i= 0; i<102; i++){
    var rn = Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
var timer= 60;
function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent= timer;}
        else{
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
    },1000);
}
var hitrun=0;
function getnewhit(){
    hitrun = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent= hitrun;
}
var score = 0;
function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent= score;
}

document.querySelector("#pbtm")
.addEventListener("click",function(details){
    var clickedno=Number(details.target.textContent);
    if(clickedno===hitrun){
        increasescore();
        makebubble();
        getnewhit();
    }
});

getnewhit();
runtimer();
makebubble();