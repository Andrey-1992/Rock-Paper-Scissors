var human = new Player({
  name: "human",
  icon: "humanIcon",
  score: 0,
  weapon: ""
});
var computer = new Player({
  name: "computer",
  icon: "computerIcon",
  score: 0,
  weapon: ""
});

class Game {
  constructor() {
    this.winner = "";
  }
  classicGame() {
    if (human.weapon === computer.weapon) {
      this.winner = "It's a DRAW";
      return this.winner;
  }
    if (human.weapon === "rock" && computer.weapon === "scissors") {
      human.updateScore();
      this.winner = `${human.name} Won!`;
      return this.winner;
  } else if (human.weapon === "rock" && computer.weapon === "paper") {
      computer.updateScore();
      this.winner = `${computer.name} Won!`;
      return this.winner;
  }
    if (human.weapon === "scissors" && computer.weapon === "paper") {
      human.updateScore();
      this.winner = `${human.name} Won!`;
      return this.winner;
  } else if (human.weapon === "scissors" && computer.weapon === "rock") {
      computer.updateScore();
      this.winner = `${computer.name} Won!`;
      return this.winner;
  }
    if (human.weapon === "paper" && computer.weapon === "rock") {
      human.updateScore();
      this.winner = `${human.name} Won!`;
      return this.winner;
    } else if (human.weapon === "paper" && computer.weapon === "scissors") {
      computer.updateScore();
      this.winner = `${computer.name} Won!`;
      return this.winner;
    }
  }
  difficultGame() {
   if (human.weapon === computer.weapon) {
     this.winner = "It's a DRAW";
     return this.winner;
 }
   if (human.weapon === "rock" && computer.weapon === "scissors" || computer.weapon === "iguana") {
     human.updateScore();
     this.winner = `${human.name} Won!`;
     return this.winner;
 } else if (human.weapon === "rock" && computer.weapon === "paper" || computer.weapon === "ufo") {
     computer.updateScore();
     this.winner = `${computer.name} Won!`;
     return this.winner;
 }
   if (human.weapon === "scissors" && computer.weapon === "paper" || computer.weapon === "iguana") {
     human.updateScore();
     this.winner = `${human.name} Won!`;
     return this.winner;
 } else if (human.weapon === "scissors" && computer.weapon === "rock" || computer.weapon === "ufo") {
     computer.updateScore();
     this.winner = `${computer.name} Won!`;
     return this.winner;
 }
   if (human.weapon === "paper" && computer.weapon === "rock" || computer.weapon === "ufo") {
     human.updateScore();
     this.winner = `${human.name} Won!`;
     return this.winner;
 } else if (human.weapon === "paper" && computer.weapon === "scissors" || computer.weapon === "iguana") {
     computer.updateScore();
     this.winner = `${computer.name} Won!`;
     return this.winner;
 }
   if (human.weapon === "iguana" && computer.weapon === "paper" || computer.weapon === "ufo") {
     human.updateScore();
     this.winner = `${human.name} Won!`;
     return this.winner;
 } else if (human.weapon === "iguana" && computer.weapon === "rock" || computer.weapon === "scissors") {
     computer.updateScore();
     this.winner = `${computer.name} Won!`;
     return this.winner;
 }
   if (human.weapon === "ufo" && computer.weapon === "scissors" || computer.weapon === "rock") {
     human.updateScore();
     this.winner = `${human.name} Won!`;
     return this.winner;
 } else if (human.weapon === "ufo" && computer.weapon === "paper" || computer.weapon === "iguana") {
     computer.updateScore();
     this.winner = `${computer.name} Won!`;
     return this.winner;
   }
 }
}
