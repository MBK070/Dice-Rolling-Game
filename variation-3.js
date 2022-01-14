/* Additional Game Rules:

  Variation-3: Add an input field to the HTML where players can set the winning 
  score, so that they can change the predfined score of 100. Now Add another 
  dice to the game so that there will be two dices in total. The player loses 
  his current score when one of the dices rolled comes out to be a 1.

*/

var scores, roundScore, activePlayer, gamePlaying;

initialize();

var lastDice;

// scores = [0, 0]; // Each player's total score
// roundScore = 0; // Each round's score for the active player
// activePlayer = 0; // e.g. Player identifier. Player 1 is assigned activePlayer = 0

//dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector("#current--" + activePlayer).textContent = dice;

/* document.querySelector("#current--" + activePlayer).innerHTML =
   "<em>" + dice + "</em>";
*/

//var x = document.querySelector("#score--0").textContent;

/* document.querySelector(".dice").style.display = "none";

document.getElementById("score--0").textContent = "0";
document.getElementById("score--1").textContent = "0";
document.getElementById("current--0").textContent = "0";
document.getElementById("current--1").textContent = "0";
*/

document.querySelector(".btn--roll").addEventListener("click", function () {
  /* If condition only has the gamePlaying variable without an operater because 
     it is already a true/false condition. If condition needed here to stop the 
     'Dice Rolling Button' (function here) from running when the game has ended
  */
  if (gamePlaying) {
    // 1. Random Number
    //var dice = Math.floor(Math.random() * 6) + 1;

    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    //var diceDOM = document.querySelector(".dice");
    document.getElementById("dice-1").style.display = "block";
    document.getElementById("dice-2").style.display = "block";
    document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
    document.getElementById("dice-2").src = "dice-" + dice2 + ".png";

    /*
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    2b. Player loses turn and his entire score if two consecutive dice rolls are 6
    if (dice === 6 && lastDice === 6) {
      scores[roundScore] = 0;
      document.querySelector("#score--" + activePlayer).textContent = "0";
      nextPlayer();
      // 3. Update the roundScore IF the rolled number was NOT a 1
    } else if (dice !== 1) {
      // Add Score
      roundScore += dice;
      document.querySelector("#current--" + activePlayer).textContent =
        roundScore;
    } else {
      // Next Player and roundScore reset to Zero
      nextPlayer();
    }

    lastDice = dice;
    */
  }
  // 3. Update the roundScore IF the rolled number was NOT a 1
  if (dice1 !== 1 && dice2 !== 1) {
    // Add Score
    roundScore += dice1 + dice2;
    document.querySelector("#current--" + activePlayer).textContent =
      roundScore;
  } else {
    // Next Player and roundScore reset to Zero
    nextPlayer();
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  // Hold Button only allowed to work when the gamePlaying condition is true
  if (gamePlaying) {
    // Add current score to global score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score--" + activePlayer).textContent =
      scores[activePlayer];

    // User manually allowed to input a specific winning score
    var input = document.querySelector(".final-score").value;
    var winningScore;

    // Undefined, 0, null & "" are coerced to false.
    // Anything else is coerced to true
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }
    // Check if the current player has won the game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name--" + activePlayer).textContent = "Winner!";

      // CSS manipulation for the winner
      //document.querySelector(".dice").style.display = "none";
      document.getElementById("dice-1").style.display = "none";
      document.getElementById("dice-2").style.display = "none";
      document
        .querySelector(".player--" + activePlayer)
        .classList.add("player--winner");
      document
        .querySelector(".player--" + activePlayer)
        .classList.remove("player--active");
      gamePlaying = false;
    } else {
      // Next player if nobody won the game yet
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";

  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");

  //document.querySelector(".dice").style.display = "none";
  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
}

/* initialize function is without the () because we are passing the function as 
   an argument and not actually calling it at this instance 
*/
document.querySelector(".btn--new").addEventListener("click", initialize);

function initialize() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  gamePlaying = true;

  //document.querySelector(".dice").style.display = "none";
  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";

  document.getElementById("score--0").textContent = "0";
  document.getElementById("score--1").textContent = "0";
  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";
  document.getElementById("name--0").textContent = "Player 1";
  document.getElementById("name--1").textContent = "Player 2";
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--0").classList.remove("player--active");
  document.querySelector(".player--1").classList.remove("player--active");

  // New game should start with Player 0 having the CSS class theme for active player
  document.querySelector(".player--0").classList.add("player--active");
}
