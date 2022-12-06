
import { parseInput,parseNumbers,parseBoards, draw, isWinner, getScore } from "../a/a.js";
export function getScoreForLastBoardToWin(inputString) {
  const input = parseInput(inputString);
  const numbers = parseNumbers(input);
  const boards = parseBoards(input.slice(2));
  for(const number of numbers) {
    let i = boards.length;
    while(i--) {
      let board = boards[i];
      draw(board, number);
      if(isWinner(board)) {
        boards.splice(i, 1);
        if(boards.length === 0) {
          const score = getScore(board, number);
          return score;
        }
      }
    }
  }
  return 0;
}