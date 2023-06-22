let randomNumberP1 = Math.floor(Math.random()*6+1);
let randomNumberP2 = Math.floor(Math.random()*6+1);

document.querySelector(".img1").setAttribute("src", "public/Images_DiceGames/dice"+randomNumberP1+".png");
document.querySelector(".img2").setAttribute("src", "public/Images_DiceGames/dice"+randomNumberP2+".png");

if(randomNumberP1 > randomNumberP2){
    document.querySelector("h1").innerHTML = "🚩Player 1 is the winner";
}
else if(randomNumberP1 < randomNumberP2){
    document.querySelector("h1").innerHTML = "Player 2 is the winner🚩";
}
else{
    document.querySelector("h1").innerHTML = "🚩Draw🚩";
}