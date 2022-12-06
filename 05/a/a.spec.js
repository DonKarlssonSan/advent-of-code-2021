import { assert } from "chai";
import { a, parseLines, updateGrid, isPointBetween, getNrOfPointsAbove1 } from "./a.js";

describe("05-a Hydrothermal Venture", () => {
  it("should return 5 points that are above 1", () => {
    const input = 
`0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;
    const result = a(input);
    assert.equal(result, 5);
  });

  it("should parse a line", () => {
    const rows = [
      "0,9 -> 5,9",
      "0,0 -> 8,8" // diagonal
    ];
    const lines = parseLines(rows);
    assert.equal(lines.length, 1);
    const line = lines[0];
    assert.deepEqual(line, [0, 9, 5, 9]);
  });

  it("should return true because p is between a and b", () => {
    const p = [2, 1];
    const a = [1, 1];
    const b = [3, 1];
    const result = isPointBetween(p, a, b);
    assert.isTrue(result);
  });

  it("should return false because p is NOT between a and b", () => {
    const p = [2, 4];
    const a = [1, 1];
    const b = [3, 1];
    const result = isPointBetween(p, a, b);
    assert.isFalse(result);
  });

  it("should return 3 points above 1", () => {
    const input = [
      [1, 3],
      [2, 5]
    ]
    const result = getNrOfPointsAbove1(input);
    assert.equal(result, 3);
  });

  it("should update grid correctly", () => {
    const grid = [
      [0, 0],
      [0, 0]
    ];
    const lines = [
      [0, 0, 1, 0],
    ];
    updateGrid(grid, lines, 2);
    assert.equal(grid[0][0], 1);
  });
});
