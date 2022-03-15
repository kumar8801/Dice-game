var randomNumber1=Math.random();
var rN1=Math.floor(randomNumber1*6+1);

if (rN1==1){
    document.querySelector(".f1").setAttribute("src","image/dice1.png");
}else if(rN1==2){
    document.querySelector(".f1").setAttribute("src","image/dice2.png");
}else if(rN1==3){
    document.querySelector(".f1").setAttribute("src","image/dice3.png");
}else if(rN1==4){
    document.querySelector(".f1").setAttribute("src","image/dice4.png");
}else if(rN1==5){
    document.querySelector(".f1").setAttribute("src","image/dice5.png");
}else{
    document.querySelector(".f1").setAttribute("src","image/dice6.png");
}

var randomNumber2=Math.random();
var rN2=Math.floor(randomNumber2*6+1);

if (rN2==1){
    document.querySelector(".f2").setAttribute("src","image/dice1.png");
}else if(rN2==2){
    document.querySelector(".f2").setAttribute("src","image/dice2.png");
}else if(rN2==3){
    document.querySelector(".f2").setAttribute("src","image/dice3.png");
}else if(rN2==4){
    document.querySelector(".f2").setAttribute("src","image/dice4.png");
}else if(rN2==5){
    document.querySelector(".f2").setAttribute("src","image/dice5.png");
}else{
    document.querySelector(".f2").setAttribute("src","image/dice6.png");
}


if (rN1>rN2){
    document.querySelector("h1").innerHTML="Player 1 Wins 🥇"
}else if(rN1<rN2){
    document.querySelector("h1").innerHTML=" 🥇 Player 2 Wins"
}else if (rN1==rN2){
    document.querySelector("h1").innerHTML="Draw ‼"
}