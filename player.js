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

  }
  retrieveWinsFromStorage() {

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
