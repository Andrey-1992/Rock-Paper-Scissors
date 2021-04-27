class Player {
  constructor(features) {
    this.name = features.name;
    this.token = features.icon;
    this.wins = 0;
    this.weapon = "";
    this.weapons = ["rock", "scissors", "paper"];
  }
  chooseRandomWeapon() {
  var randomIndex = Math.floor(Math.random() * this.weapons.length);
  this.weapon = this.weapons[randomIndex];
  }
  saveWinsToStorage() {
    var win = this.wins;
    var scoreWin = JSON.stringify(win);
    localStorage.setItem('scoreWinData', scoreWin);
  }
  retrieveWinsFromStorage() {
    var retrievedData = localStorage.getItem('scoreWinData');
    var parsedScore = JSON.parse(retrievedData);
  }
  takeTurn() {

  }
  updateScore() {
   this.wins ++ ;
  }
  chooseWeapon(weapon) {
    this.weapon = weapon;
  }
}





// if (localStorage.getItem("data") === null) {
//   localStorage.setItem("data", "[]");
// }
// var localStorageData = JSON.parse(localStorage.getItem("wins"));
// localStorageData.push(human);
// localStorage.setItem("data", JSON.stringify(human));
