"use strict";
const newGame=document.querySelector(".new-game-btn");
const rollDice=document.querySelector(".roll-dice-btn");
const hold=document.querySelector(".hold-btn");
const scores = [0,0];

let currentScore = 0;
let activePlayer = 0;
let playing = true;

// switch player function 
function switchPlayer() {
    document.querySelector(`#current-${activePlayer}`).textContent = 0;
    document.querySelector(`.player-${activePlayer}`).classList.add("active");
    currentScore = 0;
    // change the player
    activePlayer = activePlayer === 0? 1: 0;
    document.querySelector(`.player-${activePlayer}`).classList.remove('active');

}

// random dice generator
// this function is called when the user hits the roll dice btn 
const generateDice = ()=> {
    if(playing) {
        const imgs = document.querySelectorAll("img");
        imgs.forEach(element => {
            if (!element.classList.contains("not-active")){
                element.classList.add("not-active");
            }
            
        });
        let randomNumber = Math.trunc(Math.random()*6)+1;
        const diceImg=document.querySelector(`img[data-img="${randomNumber}"]`)
        // console.log(diceImg);

        diceImg.classList.remove("not-active");
        if (randomNumber == 1) {
            switchPlayer();
        
        }
        else {
            currentScore += randomNumber;
            document.querySelector(`#current-${activePlayer}`).textContent=currentScore;
            // currentScore = 0;
        }
    }
}


// holdScore function is called when the user click hold btn 
const holdScore = ()=> {
    if(playing) {
        // add the current scor to the mail sccore 
        currentScore = 0;

        let score =Number(document.querySelector(`#current-${activePlayer}`).textContent);
        scores[activePlayer] += score
        document.querySelector(`.score-${activePlayer}`).textContent = scores[activePlayer];
        document.querySelector(`#current-${activePlayer}`).textContent = 0;

        // if the score is less than 100 switch the player if the score is 100 or more player wins 
        if(scores[activePlayer]<10){

            switchPlayer();
        }
        else {
            playing = false;
            console.log(`player-${activePlayer} wins`);
            document.querySelector(`.player-${activePlayer}`).classList.add("winner");
        }
    }

}

// newGaemfunction
function newGamefunc() {
    playing = true;
    console.log(scores);
    for(let i=0; i<scores.length; i++) {
        scores[i] = 0;
    }
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.score-0').textContent = 0;
    document.querySelector('.score-1').textContent = 0;
    document.querySelector(`.player-${activePlayer}`).classList.remove("winner");
    console.log(document.querySelector(".player-1"));
    document.querySelector(".player-0").classList.remove("active");
    document.querySelector(".player-1").classList.add("active");
    currentScore = 0;
}
// when each button is clicked

rollDice.addEventListener("click",generateDice);
hold.addEventListener('click',holdScore);
newGame.addEventListener('click',newGamefunc);

