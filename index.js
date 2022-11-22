var n1 , n2;
n1 = Math.floor(Math.random()*6)+1;
n2 = Math.floor(Math.random()*6)+1;
var att1 ,att2,winner;
att1 = "/images/dice"+n1+".png";
att2 = "/images/dice"+n2+".png";
var p1=prompt("enter player 1 name");
if(p1 !== '' && p1 !== null)
{
    document.querySelector(".p1").innerHTML=p1;
}
var p2=prompt("enter player 2 name");
if(p2 !== '' && p1 !== null)
{
    document.querySelector(".p2").innerHTML=p2;
}
document.querySelector(".img-dice-p1").setAttribute("src",att1);
document.querySelector(".img-dice-p2").setAttribute("src",att2);
if(n1>n2)
{
    winner="Player1 wins!!!"
}
else if(n1===n2)
{
    winner="ITS A DRAW";
}
else
{
    winner="Player2 wins!!!"
}
document.querySelector(".winner").textContent=winner;