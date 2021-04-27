class Player {
  constructor(features) {
    this.name = features.name;
    this.token = features.icon;
    this.wins = 0;
    this.weapon = "";
    this.weapons = ["rock", "scissors", "paper"];
    this.weaponsDifVer = ["rock", "scissors", "paper", "iguana", "ufo"];
  }
  chooseRandomWeapon() {
  var randomIndex = Math.floor(Math.random() * this.weapons.length);
  this.weapon = this.weapons[randomIndex];
  }
  chooseRandomWeaponDifVer() {
  var randomIndex = Math.floor(Math.random() * this.weaponsDifVer.length);
  this.weapon = this.weaponsDifVer[randomIndex];
  }
  saveWinsToStorage() {
    var win = this.wins;
    var scoreWin = JSON.stringify(win);
    localStorage.setItem(this.name, scoreWin);
  }
  retrieveWinsFromStorage() {
    var retrievedData = localStorage.getItem(this.name);
    var parsedScore = JSON.parse(retrievedData);
    this.wins = parsedScore;
    return parsedScore;
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
