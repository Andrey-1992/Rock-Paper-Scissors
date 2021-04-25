GAME.JS
class Game {
  constructor(player1, player2) {
    this.human = new Player({name:"human", icon:"humanIcon", score: 0, chooseWeapon: ""});
    this.computer = new Player({name:"computer", icon:"comptureIcon", score: 0, chooseWeapon: ""});
  }
