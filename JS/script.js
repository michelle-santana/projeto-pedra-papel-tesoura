let options = ["paper","rock","scissor"];
let pcScore = 0;
let userScore = 0;
let tieScore = 0;
document.getElementById("win").hidden = true;
document.getElementById("lose").hidden = true;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function computerPlay(){
  return options[getRandomInt(0, 3)];
}

buttons = document.getElementsByTagName("button")
for (var i = 0; i < buttons.length; i++){
  if (window.addEventListener){
    buttons[i].addEventListener("click", userPlay, false);
  }
}
function userPlay(){
  let winner = playRound(this.name, computerPlay());
  console.log(winner);
  console.log(score(winner));
  document.getElementById("win").hidden = true;
  document.getElementById("lose").hidden = true;
  gameEnd()
  document.getElementById("user").innerHTML = userScore;
  document.getElementById("pc").innerHTML = pcScore;
  document.getElementById("tie").innerHTML = tieScore;
}

function score(winner){
  if (winner == "tie") { 
    return ++tieScore
  }
  else if (winner == "win"){
    return ++userScore
  }
  else {
    return ++pcScore
  }
}  

function gameEnd(){
  if (userScore == 5){
    pcScore = 0;
    userScore = 0;
    empateScore = 0; 
    document.getElementById("win").hidden = false; 
  }
  if (pcScore == 5){
    pcScore = 0;
    userScore = 0;
    empateScore = 0;
    document.getElementById("lose").hidden = false;
  }
}

function playRound(playerSelection, computerSelection){
  if (playerSelection == computerSelection){
    return "tie";
  }
  else if ((playerSelection == "paper" && computerSelection == "rock")||
  (playerSelection == "rock" && computerSelection == "scissor")||
  (playerSelection == "scissor" && computerSelection == "paper"))
      
    return "win";
  else {
    return "lose";
  }  
}
