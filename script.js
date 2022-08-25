//Everything is loaded
document.addEventListener("DOMContentLoaded", start);

//Starts the game
start();
function start() {
  console.log("start");

  //const for all the buttons
  const buttons = document.querySelectorAll("button");

  //forEach botton, add click and do getUserSelction function
  buttons.forEach((button) =>
    button.addEventListener("click", getUserSelction)
  );
}

//playerChoice, pcChoice variables and my variable for my mathRandom
let myRand;
let playerChoice;
let pcChoice;

//User selcetion function checks whether its rock, paper or scissors that's been selected
function getUserSelction() {
  console.log("hej");
  if (this.classList.contains("rock")) {
    playerChoice = "rock";
  } else if (this.classList.contains("paper")) {
    playerChoice = "paper";
  } else {
    playerChoice = "scissors";
  }

  //When getUserSelction is done do makeRandomChoice
  makeRandomChoice();
}

//makeRandomChoice function
function makeRandomChoice() {
  console.log("random choice");

  //Pick a "number" between 1-3
  myRand = Math.floor(Math.random() * 3);

  //Making an array for the mathRandom instead of numbers so it picks randomly between the stuff in the array
  const pcChoiceArray = ["rock", "paper", "scissors"];
  pcChoice = pcChoiceArray[myRand];

  //Do showAnimation
  showAnimation();
}

//showAnimation function
function showAnimation() {
  console.log("animtaion");

  //Add the class shake to each hand
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  //When animation is done, do determineWin
  document
    .querySelector("#player1")
    .addEventListener("animationend", determineWin);
}

//determineWin function
function determineWin() {
  console.log("winner");

  //Removes the class shake
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");

  //Adds the varible playerChoice + pcChoice to each hand
  document.querySelector("#player1").classList.add(playerChoice);
  document.querySelector("#player2").classList.add(pcChoice);

  //If playerChoice is the same as pcChoice, do showDraw function
  if (playerChoice == pcChoice) {
    showDraw();

    //Else if playerChoise is a winning condition do showWinner function
  } else if (
    (playerChoice == "rock") & (pcChoice == "scissors") ||
    (playerChoice == "paper") & (pcChoice == "rock") ||
    (playerChoice == "scissors") & (pcChoice == "paper")
  )
    showWinner();
  //Else showLose function
  else showLose();
  {
  }
}

//showWinner function
function showWinner() {
  console.log("u win");

  //Removes the class hidden on the div with the id #win
  document.querySelector("#win").classList.remove("hidden");

  //Resets the game when clicking on a button
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => button.addEventListener("click", newGame));
}

//showLose function
function showLose() {
  console.log("loser");

  //Removes the class hidden on the div with the id #lose
  document.querySelector("#lose").classList.remove("hidden");

  //Resets the game when clicking on a button
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => button.addEventListener("click", newGame));
}

//showDraw function
function showDraw() {
  console.log("draw");

  //Removes the class hidden on the div with the id #draw
  document.querySelector("#draw").classList.remove("hidden");

  //Resets the game when clicking on a button
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => button.addEventListener("click", newGame));
}

//newGame function
function newGame() {
  console.log("nyt spil");

  //Adds the class hidden to the divs (#lose, #win, #draw)
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");

  //Removes the class from the hands (.rock, .paper. scissors)
  document.querySelector("#player1").classList.remove("rock");
  document.querySelector("#player1").classList.remove("paper");
  document.querySelector("#player1").classList.remove("scissors");

  document.querySelector("#player2").classList.remove("rock");
  document.querySelector("#player2").classList.remove("paper");
  document.querySelector("#player2").classList.remove("scissors");
}
