"use strict";
const newGame=document.querySelector(".new-game-btn");
const rollDice=document.querySelector(".roll-dice-btn");
const hold=document.querySelector(".hold-btn");

let currentScore = 0;
let activePlayer = 0;

// random dice generator
const generateDice = ()=> {
    const imgs = document.querySelectorAll("img");
     imgs.forEach(element => {
        if (!element.classList.contains("not-active")){
            element.classList.add("not-active");
        }
        
    });
    let randomNumber = Math.trunc(Math.random()*6)+1;
    console.log(typeof randomNumber);
    console.log(typeof currentScore);
    const diceImg=document.querySelector(`img[data-img="${randomNumber}"]`)
    // console.log(diceImg);

    diceImg.classList.remove("not-active");
    if (randomNumber == 1) {
        document.querySelector(`#current-${activePlayer}`).textContent = 0;
        document.querySelector(`.player-${activePlayer}`).classList.add("active");
        currentScore = 0;
        // change the player
        activePlayer = activePlayer === 0? 1: 0;
        document.querySelector(`.player-${activePlayer}`).classList.remove('active');
        console.log(document.querySelector(`.player-${activePlayer}`));
    }
    else {
        currentScore += randomNumber;
        // `current${activePlayer}`.textContent = currentScore;
        // console.log(`current${activePlayer}`);
        // typeof `current${activePlayer}`;
        document.querySelector(`#current-${activePlayer}`).textContent=currentScore;
    }
}

rollDice.addEventListener("click",generateDice);


