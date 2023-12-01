let sumEl = document.getElementById("sum-el");
let result = document.getElementById("result");
let cardNum = document.getElementById("card-number");
let gameActive = true; 
//let total = 0;


let randomDecimal = Math.random();

function drawCards(){
    return Math.floor(randomDecimal * 11) + 1; 
}


function  start(){
    if(!gameActive){
        console.log("Game is not active. Press reset to start a new game.");
        return;
    }
    let cards = [drawCards(),drawCards()]
    displayCard(cards)   
}

function carding(){

    if (!gameActive) {
        console.log("Game is not active. Press reset to start a new game.");
        return;
    }
    
    let cards = [drawCards(),drawCards(),drawCards()]
   
    displayCard(cards)

//     while (gameActive && total < 21) {
//         cards.push(drawCards());
//         displayCard(cards);
//     }
 }

function displayCard(cards) {
    cardNum.textContent = "Cards: " + cards.join(" - ");
    let total = cards.reduce((sum, card) => sum + card, 0);
    sumEl.textContent = "Sum: " + total;
    checking();
}


function checking() {
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