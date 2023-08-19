var audio1 = new Audio("sounds/tom-1.mp3");
var audio2 = new Audio("sounds/tom-2.mp3");
var audio3 = new Audio("sounds/tom-3.mp3");
var audio4 = new Audio("sounds/tom-4.mp3");
var audio5 = new Audio("sounds/snare.mp3");
var audio6 = new Audio("sounds/crash.mp3");
var audio7 = new Audio("sounds/kick-bass.mp3");

for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var button = this.innerHTML;
        keystroke(button);
        keyAnimation(button);
    });
}

document.addEventListener("keydown" , function(event){
        keystroke(event.key);
        keyAnimation(event.key);
});

function keystroke(keyword){
        // this button trigger the inner HTML written in the button switch statement
        // ensures that if specfic button is pressed and inner HTML is matched with the case then what what should it do
    switch (keyword) {
        case "w":
            audio1.currentTime = 0;
            audio1.play();
            break;
        case "a":
            audio2.currentTime = 0;
            audio2.play();
            break;
        case "s":
            audio3.currentTime = 0;
            audio3.play();
            break;
        case "d":
            audio4.currentTime = 0;
            audio4.play();
            break;
        case "j":
            audio5.currentTime = 0;
            audio5.play();
            break;
        case "k":
            audio6.currentTime = 0;
            audio6.play();
            break;
        case "l":
            audio7.currentTime = 0;
            audio7.play();
            break;
        default:
            break;
    }
}
function keyAnimation(key){
    var pressed = document.querySelector("."+key);
    pressed.classList.add("pressed");
    setTimeout(function(){
        pressed.classList.remove("pressed");
    }, 100);
}
