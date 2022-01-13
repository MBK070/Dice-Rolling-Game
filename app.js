//"use strict";

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

//dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector("#current--" + activePlayer).textContent = dice;

/* document.querySelector("#current--" + activePlayer).innerHTML =
"<em>" + dice + "</em>"; */

//var x = document.querySelector("#score--0").textContent;

document.querySelector(".dice").style.display = "none";

document.getElementById("score--0").textContent = "0";
document.getElementById("score--1").textContent = "0";
document.getElementById("current--0").textContent = "0";
document.getElementById("current--1").textContent = "0";

document.querySelector(".btn--roll").addEventListener("click", function () {
  // 1. Random Number
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  //3. Update the roundScore IF the rolled number was NOT a 1
  if (dice !== 1) {
    // Add Score
    roundScore += dice;
    document.querySelector("#current--" + activePlayer).textContent =
      roundScore;
  } else {
    // Next Player and roundScore reset to Zero
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;

    document.getElementById("current--0").textContent = "0";
    document.getElementById("current--1").textContent = "0";

    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");

    //document.querySelector(".player--0").classList.remove("active");
    //document.querySelector(".player--1").classList.add("active");

    document.querySelector(".dice").style.display = "none";
  }
});
