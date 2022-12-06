import { assert } from "chai";
import { getScoreForWinningBoard, parseBoards, draw, isWinner, getScore } from "./a.js";

describe("04-a Giant Squid Bingo", () => {
  it("should return 4512", () => {
    const input = 
`7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;
    const result = getScoreForWinningBoard(input);
    assert.equal(result, 4512);
  });
  
  it("should parse a board", () => {
    const input = [
      " 1 2 3",
      " 4 5 6",
      " 7 8 9"]
    const result = parseBoards(input)[0];
    assert.equal(result.length, 3);
    assert.equal(result[0][2], 3);
    assert.equal(result[2][0], 7);
  });

  it("should parse two boards", () => {
    const input = [
      "1 2",
      "3 4",
      "",
      "5 6",
      "7 8"];
    const result = parseBoards(input);
    assert.equal(result.length, 2);
  });

  it("should mark the drawn number on the board", () => {
    let board = [
      [1, 2],
      [3, 4]
    ];
    const result = draw(board, 2);
    const upperLeft = result[0][1];
    assert.isUndefined(upperLeft);
  });

  it("should find winning col", () => {
    let board = [
      [1, undefined],
      [3, undefined]
    ];
    const result = isWinner(board);
    assert.isTrue(result);
  });

  it("should find winning row", () => {
    let board = [
      [undefined, undefined],
      [3, 4]
    ];
    const result = isWinner(board);
    assert.isTrue(result);
  });

  it("should return score 35", () => {
    let board = [
      [undefined, undefined],
      [3, 4]
    ];
    const draw = 5;
    const score = getScore(board, draw);
    assert.equal(score, 35);
  });
});
