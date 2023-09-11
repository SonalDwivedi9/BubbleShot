// code to create the bubbles
function makeBubble(){
var clutter = "";

for(var i = 1; i<=133; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

// create timer
var timer = 60;
function runTimer(){
var timerint = setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timerVal").textContent = timer;
    }else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML= `<h2>GAME OVER</h2>`;
        document.querySelector("#hitVal").innerHTML = `0`;
    }
},1000);
}


// create random hit
var hitrn = 0;
function getNewHit(){
hitrn = Math.floor(Math.random()*10);
document.querySelector("#hitVal").textContent = hitrn;
}

// increase Score
var Score = 0;
function increaseScore(){
    Score += 10;
    document.querySelector("#scoreVal").textContent = Score;
}


document.querySelector("#pbtm").addEventListener("click",function(details){
var clickedNum = Number(details.target.textContent);
if(clickedNum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}
} );


runTimer();
makeBubble();
getNewHit();




