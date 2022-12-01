import { assert } from "chai";
import { getHorizontalPosTimesDepthWithAim } from "./dive.js";

describe("2b dive", () => {
  it("Horizontal position times depth should be 900 when using aim", () => {
    const input = 
`forward 5
down 5
forward 8
up 3
down 8
forward 2`;
    const result = getHorizontalPosTimesDepthWithAim(input);
    assert.equal(result, 900);
  });
});