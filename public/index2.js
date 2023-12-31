for(i=0;i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        playSound(event.key);
        buttonAnimation(event.key);            
    });
}

document.addEventListener("keypress", function(event){
    playSound(event.key);
    buttonAnimation(event.key); 
});

function playSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("/public/sounds_Drums/tom-1.mp3");
                tom1.play();
            break;
        case "a":
            var tom2 = new Audio("/public/sounds_Drums/tom-2.mp3");
                tom2.play();
            break;
        case "s":
            var tom3 = new Audio("/public/sounds_Drums/tom-3.mp3");
                tom3.play();
            break;
        case "d":
            var tom4 = new Audio("/public/sounds_Drums/tom-4.mp3");
                tom4.play();
            break;
        case "j":
            var crash = new Audio("/public/sounds_Drums/crash.mp3");
                crash.play();
            break;
        case "k":
            var kick = new Audio("/public/sounds_Drums/kick-bass.mp3");
                kick.play();
            break;
        case "l":
            var snare = new Audio("/public/sounds_Drums/snare.mp3");
                snare.play();
            break;
    
        default: console.log(this.innerHTML)
            break;
    }
}

function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");  
    }, 100);
}