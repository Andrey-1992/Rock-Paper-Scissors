GAME.JS
class Game {
  constructor(player1, player2) {
    this.human = new Player({name:"human", icon:"humanIcon", score: 0, chooseWeapon: ""});
    this.computer = new Player({name:"computer", icon:"comptureIcon", score: 0, chooseWeapon: ""});
  }
  classicGame(player1, player2) {
    if (player1.chooseWeapon === player2.chooseWeapon) {
      return "It's a DRAW";
    }
    if (player1.chooseWeapon === "rock") {
      if (player2.chooseWeapon === "scissors") {
        return `${player1.name} Won!`;
      }
      if (player2.chooseWeapon === "paper") {
        return `${player2.name} Won!`;
      }
   }
   if (player1.chooseWeapon === "scissors") {
      if (player2.chooseWeapon === "paper") {
         return `${player1.name} Won!`;
     }
      if (player2.chooseWeapon === "rock") {
       return `${player2.name} Won!`;
     }
  }
  if (player1.chooseWeapon === "paper") {
      if (player2.chooseWeapon === "rock") {
      return `${player1.name} Won!`;
    }
      if (player2.chooseWeapon === "scissors") {
      return `${player2.name} Won!`;
    }
  }
}
