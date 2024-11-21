function getDice(Number) {

  switch (Number) {
    case 1: return "⚫ ⚫ ⚫\n⚫ ⚪ ⚫\n⚫ ⚫ ⚫\n";
    case 2: return "⚫ ⚫ ⚫\n⚪ ⚫ ⚪\n⚫ ⚫ ⚫\n";
    case 3: return "⚫ ⚪ ⚫\n⚫ ⚪ ⚫\n⚫ ⚪ ⚫\n";
    case 4: return "⚪ ⚫ ⚪\n⚫ ⚫ ⚫\n⚪ ⚫ ⚪\n";
    case 5: return "⚪ ⚫ ⚪\n⚫ ⚪ ⚫\n⚪ ⚫ ⚪\n";
    case 6: return "⚪ ⚫ ⚪\n⚪ ⚫ ⚪\n⚪ ⚫ ⚪\n";
  }
}

function rollDice() {
  let dice = Math.ceil(Math.random() * 6);

  console.log(getDice(dice));
  return dice;
}


function moveToken(Number) {
  switch (Number) {
    //snake
    case 28: return 10;
    case 37: return 3;
    case 48: return 16;
    case 75: return 32;
    case 96: return 42;
    //ladder
    case 4: return 56;
    case 12: return 50;
    case 14: return 55;
    case 41: return 79;
    case 54: return 88;

  }

  return Number;
}

function horizontalLine(times, line) {
  if (times === 0) {
    return "_";
  }
  line = line + horizontalLine(times - 1, line);
  return line;
}


function getPad(SCORE1, SCORE2) {
  let pad = "";

  for (let Number = 100; Number > 0; Number--) {
    let num = Number === SCORE1 ? "🔴" : Number;
    if (Number === 28 || Number === 37 || Number === 48 || Number === 75 || Number === 96) {
      num = "🐍";
    }
    if (Number === 4 || Number === 12 || Number === 14 || Number === 41 || Number === 54) {
      num = "🪜";
    }
    if (Number === SCORE2) {
      num = "🟢";
    }
    if (Number === SCORE2 && Number === SCORE1) {
      num = "⭕"
    }

    if (Number % 10 === 0) {
      pad = pad + "\n" + horizontalLine(99, "_") + "\n";
    }

    if (Number === 100) {
      pad = pad + "|  " + num + "   |";
      continue;
    }

    if (Number > 0 && Number < 10) {
      pad = pad + "|    " + num + "   |";
      continue;
    }

    pad = pad + "|   " + num + "   |";
  }

  return pad;
}

function snakeAndLadders(Player1, Player2, player1Score, player2Score) {

  if (player1Score > 99 || player2Score > 99) {
    const winner = player1Score > player2Score ? Player1 : Player2;
    return "HURRAY!!!  " + winner + " WIN THE GAME";
  }

  prompt("PRESS ENTER TO ROLL DICE", Player1);
  console.clear();
  const PLAYER1DICE = rollDice();
  player1Score = player1Score + PLAYER1DICE;
  player1Score = moveToken(player1Score);
  console.log(getPad(player1Score, player2Score));
  console.log("\n", Player1, " GOT NUMBER", PLAYER1DICE);
  console.log("\n\n", "TOKEN OF ", Player1, "is ", "🔴")
  console.log("\n\n", "TOKEN OF ", Player2, "is ", "🟢")

  if (player1Score > 99 || player2Score > 99) {
    const winner = player1Score > player2Score ? Player1 : Player2;
    return "HURRAY!!!  " + winner + " WIN THE GAME";
  }

  prompt("PRESS ENTER TO ROLL DICE", Player2);
  console.clear();
  const PLAYER2DICE = rollDice();
  player2Score = player2Score + PLAYER2DICE;
  player2Score = moveToken(player2Score);
  console.log(getPad(player1Score, player2Score));
  console.log("\n", Player2, " GOT NUMBER", PLAYER2DICE);
  console.log("\n\n", "TOKEN OF ", Player1, "is ", "🔴")
  console.log("\n\n", "TOKEN OF ", Player2, "is ", "🟢")

  return snakeAndLadders(Player1, Player2, player1Score, player2Score);

}
const Player1 = prompt("Enter Player1 Name");
const Player2 = prompt("Enter Player2 Name");

console.log(snakeAndLadders(Player1, Player2, 0, 0));  
