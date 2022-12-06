
import { input } from "./input.js";
import { getScoreForWinningBoard } from "./a/a.js";
import { getScoreForLastBoardToWin } from "./b/b.js";

const resultA = getScoreForWinningBoard(input);
console.log(resultA);

const resultB = getScoreForLastBoardToWin(input);
console.log(resultB);