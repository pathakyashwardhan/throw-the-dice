var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);
var first="images/dice"+randomNumber1+".png";
var second="images/dice"+randomNumber2+".png";
document.querySelector("img.img1").setAttribute("src",first);
document.querySelector("img.img2").setAttribute("src",second);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 won"
}else{
    document.querySelector("h1").innerHTML="Draw";
}
