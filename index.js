let sumEl = document.getElementById("sum-el");
let result = document.getElementById("result");
let cardNum = document.getElementById("card-number");
let gameActive = true; 


let randomDecimal = Math.random();
let num1 = Math.floor(randomDecimal * 11) + 1;
let num2 = Math.floor(randomDecimal * 11) - 1;
let num3 = Math.floor(randomDecimal * 11) +2;
let num4 = Math.floor(randomDecimal * 11) +2;
let num5= Math.floor(randomDecimal * 11) +2;


function  start(){
    if(!gameActive){
        console.log("Game is not active. Press reset to start a new game.");
        return;
    }
    cardNum.textContent = "Cards: ";
    result.textContent = "Want to play a round?";
    sumEl.textContent = "Sum: "; 

    cardNum.textContent +=  num1 + " - "+ num2;
    let total = num1+num2
    sumEl.textContent = "Sum: " + total
    checking()
    
}

function carding(){
    if (!gameActive) {
        console.log("Game is not active. Press reset to start a new game.");
        return;
    }
    cardNum.textContent = " Cards: " + num1 + " - "+ num2  +  " - "+ num3 ;
    let total = num1+num2+ num3
    sumEl.textContent = "Sum: " + total
    checking()

}
function secondRound(){
    if (!gameActive) {
        console.log("Game is not active. Press reset to start a new game.");
        return;
    }
    cardNum.textContent = " Cards: " + num1 + " - "+ num2  +  " - "+ num3 + " - " + num4;
    let total = num1+num2+ num3+num4
    sumEl.textContent = "Sum: " + total
    checking()
}
function secondRound(){
    if (!gameActive) {
        console.log("Game is not active. Press reset to start a new game.");
        return;
    }
    cardNum.textContent = " Cards: " + num1 + " - "+ num2  +  " - "+ num3 + " - " + num4;
    let total = num1+num2+ num3+num4
    sumEl.textContent = "Sum: " + total
    checking()
}

function checking() {
    console.log("sumEl", typeof sumEl.textContent);
    let sumText = sumEl.textContent;
    let totalSum = parseInt(sumText.replace("Sum: ", ""));

    console.log("total", totalSum);

    if (totalSum < 21) {
        result.textContent = "Do you want to draw a new card?🎁 ";
        gameActive= true
    } else if (totalSum === 21) {
        result.textContent = "You've got Blackjack! 🎉$250🎉";
        gameActive= false
    } else {
        result.textContent = "You're out of the game! 😭";
        gameActive=false
    }
}