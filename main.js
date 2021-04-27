/* DOM */
var classicVersion = document.getElementById("classicVersion");
var difficultVersion = document.getElementById("difficultVersion");
var rock = document.getElementById("rockWeapon");
var scissors = document.getElementById("scissorsWeapon");
var paper = document.getElementById("paperWeapon");
var chooseGameOrFighter = document.getElementById("chooseGameOrFighter");
var gameTypesView = document.getElementById("gameTypesView");
var weaponTypesView = document.getElementById("weaponTypesView");
var changeGameView = document.getElementById("changeGameView");
var showWinnerView = document.getElementById("showWinnerView");
var changeGameBtn = document.getElementById("changeGameBtn");
var humanScore = document.getElementById("humanScore");
var computerScore = document.getElementById("computerScore");

/* Evenet Listeners */
window.addEventListener("load", playerScores);
classicVersion.addEventListener('click', classicVersionGame);
rock.addEventListener('click', startClassicGame);
scissors.addEventListener('click', startClassicGame);
paper.addEventListener('click', startClassicGame);
changeGameBtn.addEventListener('click', changeGameVersion);

var game = new Game();

/* Functions */
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function playerScores() {
  human.retrieveWinsFromStorage();
  computer.retrieveWinsFromStorage();
  humanScore.innerText = human.wins;
  computerScore.innerText = computer.wins;
}

function classicVersionGame() {
  show(weaponTypesView);
  show(changeGameView);
  hide(gameTypesView);
  chooseGameOrFighter.innerText = "fighter!";
}

function startClassicGame(event) {
  human.chooseWeapon(event.target.value);
  computer.chooseRandomWeapon();
  game.classicGame();
  computer.saveWinsToStorage();
  human.saveWinsToStorage();
  human.retrieveWinsFromStorage();
  computer.retrieveWinsFromStorage();
  humanScore.innerText = human.wins;
  computerScore.innerText = computer.wins;
  render();
  setTimeout(resetGame, 1500);
}

function resetGame() {
 human.weapon = "";
 computer.weapon = "";
 rock.checked=false;
 scissors.checked=false;
 paper.checked=false;
 hide(showWinnerView);
 show(weaponTypesView);
}

function changeGameVersion() {
  hide(changeGameView);
  hide(weaponTypesView);
  show(gameTypesView);
  chooseGameOrFighter.innerText = "game!";
}

function render() {
  var winnerHTML =
  `<section class="show-winner-view" id="showWinnerView">
    <p>winner: ${game.winner}</p>
    <p>human weapon: ${human.weapon}</p>
    <p>computer weapon: ${computer.weapon}</p>
  </section>`
  showWinnerView.innerHTML = winnerHTML;
  show(showWinnerView);
  hide(weaponTypesView);
}
