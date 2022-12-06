let character = document.getElementById("character");
let game = document.getElementById("game");
let interval;
let both = 0;
let  counter = 0;
let currentBlocks = [];

function moveLeft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>0){
        character.style.left = left - 2 + "px";
    }};

    function moveRight(){
        let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        if(left>380){
            character.style.left = left + 2 + "px";
        }
    };
    



    document.addEventListener("keydown", event => {
        if(both==0){
            both++;
            if(event.key==="ArrowLeft"){
                interval = setInterval(moveLeft, 1);
            }
            if(event.key==="ArrowRight"){
                interval = setInterval(moveRight, 1);
            }
        }
    });
    document.addEventListener("keyup", event => {
        clearInterval(interval);
        both=0;
    });