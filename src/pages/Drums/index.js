for(i=0;i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //sonido  
        //boton animación             
    });
}

document.addEventListener("keypress", function(event){
    playSound(event.key);
    buttonAnimation(event.key); 
});