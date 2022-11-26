"use strict";
const newGame=document.querySelector(".new-game-btn");
const rollDice=document.querySelector(".roll-dice-btn");
const hold=document.querySelector(".hold-btn");
const current1=document.querySelector("#current-1");
const current2=document.querySelector("#current-2");

let currentScore=0;

// random dice generator
const generateDice=()=>{
    const imgs=document.querySelectorAll("img");
     imgs.forEach(element => {
        if(!element.classList.contains("not-active")){
            element.classList.add("not-active");
        }
        
    });
    let randomNumber=Math.trunc(Math.random()*6)+1;
    console.log(typeof randomNumber);
    console.log(typeof currentScore);
    const diceImg=document.querySelector(`img[data-img="${randomNumber}"]`)
    // console.log(diceImg);

    diceImg.classList.remove("not-active");
    if(randomNumber==1){
        // change the player
    }
    else{
        currentScore+=randomNumber;
        current1.textContent=currentScore;
    }
}

rollDice.addEventListener("click",generateDice);


