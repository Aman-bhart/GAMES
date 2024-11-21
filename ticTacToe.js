let ONE = " 1";
let TWO = " 2";
let THREE = " 3";
let FOUR = " 4";
let FIVE = " 5";
let SIX = " 6";
let SEVEN = " 7";
let EIGHT = " 8";
let NINE = " 9";


function getFig() {
  console.log("         ", "┃", "     ", "┃", "   ");
  console.log("    ", ONE, " ", "┃", " ", TWO, " ┃", " ", THREE, " ");
  console.log("   ───────╋───────╋──────");
  console.log("    ", FOUR, " ", "┃", " ", FIVE, " ┃", " ", SIX, " ");
  console.log("   ───────╋───────╋──────");
  console.log("    ", SEVEN, " ", "┃", " ", EIGHT, " ┃", " ", NINE, " ");
  console.log("         ", "┃", "     ", "┃", "   ");
}


function putToe(input, toe) {
  console.log("COMPUTER TOE : ", toe);
  switch (input) {
    case "1": return ONE = toe;
    case "2": return TWO = toe;
    case "3": return THREE = toe;
    case "4": return FOUR = toe;
    case "5": return FIVE = toe;
    case "6": return SIX = toe;
    case "7": return SEVEN = toe;
    case "8": return EIGHT = toe;
    case "9": return NINE = toe;
  }

}

function getUserInput() {

  return prompt("ENTER THE NUMBER TO PLAY YOUR MOVE");
}

function MOVEUSER() {
  getFig();
  const USERCHANCE = getUserInput();
  putToe(USERCHANCE, "🔴");
  console.clear();
  getFig();
  return USERCHANCE;
}

function isValidCoice(computerTurn) {
  switch (computerTurn) {
    case ONE:
    case TWO:
    case THREE:
    case FOUR:
    case FIVE:
    case SIX:
    case SEVEN:
    case EIGHT:
    case NINE: return true;
  }
  return false;
}

function stopWinning(computerTurn, conditon) {
  const WIN = conditon;
  if (ONE + TWO === WIN && THREE == " 3") {
    return "3";
  }
  if (ONE + FOUR === WIN && SEVEN == " 7") {
    return "7";
  }
  if (ONE + FIVE === WIN && NINE == " 9") {
    return "9";
  }

  if (THREE + TWO === WIN && ONE == " 1") {
    return "1";
  }
  if (THREE + SIX === WIN && NINE == " 9") {
    return "9";
  }
  if (THREE + FIVE === WIN && SEVEN == " 7") {
    return "7";
  }

  if (NINE + SIX === WIN && THREE == " 3") {
    return "3";
  }
  if (NINE + EIGHT === WIN && SEVEN == " 7") {
    return "7";
  }
  if (NINE + FIVE === WIN && ONE == " 1") {
    return "1";
  }

  if (SEVEN + FOUR === WIN && ONE == " 1") {
    return "1";
  }
  if (SEVEN + EIGHT === WIN && NINE == " 9") {
    return "9";
  }
  if (NINE + FIVE === WIN && ONE == " 1") {
    return "1";
  }

  if (TWO + FIVE === WIN && EIGHT == " 8") {
    return "8";
  }
  if (FOUR + FIVE === WIN && SIX == " 6") {
    return "6";
  }
  if (SIX + FIVE === WIN && FOUR == " 4") {
    return "4";
  }
  if (EIGHT + FIVE === WIN && TWO == " 2") {
    return "2";
  }

  if (ONE + NINE === WIN && FIVE == " 5") {
    return "5";
  }
  if (THREE + SEVEN === WIN && FIVE == " 5") {
    return "5";
  }

  if (ONE + THREE === WIN && TWO == " 2") {
    return "2";
  }
  if (ONE + SEVEN === WIN && FOUR == " 4") {
    return "4";
  }
  if (NINE + THREE === WIN && SIX == " 6") {
    return "6";
  }
  if (NINE + SEVEN === WIN && EIGHT == " 8") {
    return "8";
  }

  return computerTurn;

}



function moveComputer() {
  getFig();
  let hello = true;
  let computerTurn = 0;

  while (hello) {
    computerTurn = "" + Math.ceil(Math.random() * 8);
    if (isValidCoice(" " + computerTurn)) {
      hello = false;
    }
  }

  computerTurn = stopWinning(computerTurn, "🔴🔴");

  computerTurn = stopWinning(computerTurn, "❎❎");

  console.clear();
  putToe(computerTurn, "❎")

}

function istie() {

  if (ONE !== " 1" && TWO !== " 2" && THREE !== " 3" && FOUR !== " 4" && FIVE !== " 5" && SIX !== " 6"
    && SEVEN !== " 7" && EIGHT !== " 8" && NINE !== " 9"
  ) {
    getFig();
    console.log("OHHH!!!!  GAME TIE");
    return true;
  }
  return false;

}

function iswon(conditon) {
  if (
    ONE + TWO + THREE === conditon ||
    FOUR + FIVE + SIX === conditon ||
    SEVEN + EIGHT + NINE === conditon ||
    ONE + FOUR + SEVEN === conditon ||
    TWO + FIVE + EIGHT === conditon ||
    THREE + SIX + NINE === conditon ||
    ONE + FIVE + NINE === conditon ||
    SEVEN + FIVE + THREE === conditon
  ) {
    getFig();
    const WISH = conditon === "❎❎❎" ? "SORRY!!! YOU LOOSE THE GAME" : "WOW!!!!! YOU WON THE GAME";
    console.log(WISH)
    return true;
  }

  return false;
}



function runGame() {
  if (iswon("❎❎❎") || iswon("🔴🔴🔴") || istie()) {
    return;
  }

  MOVEUSER();

  if (iswon("❎❎❎") || iswon("🔴🔴🔴") || istie()) {
    return;
  }

  moveComputer();

  runGame();

}

runGame();
