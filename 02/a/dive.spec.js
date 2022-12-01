import { assert } from "chai";
import { getHorizontalPosTimesDepth } from "./dive.js";

describe("2a dive", () => {
  it("Horizontal position times depth should be 150", () => {
    const input = 
`forward 5
down 5
forward 8
up 3
down 8
forward 2`;
    const result = getHorizontalPosTimesDepth(input);
    assert.equal(result, 150);
  });
});