import { assert } from "chai";
import { getLifeSupportRating } from "./submarine-diagnostics.js";

describe("3b submarine diagnostics, life support rating", () => {
  it("life support rating should be 230", () => {
    const input = 
`00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;
    const result = getLifeSupportRating(input);
    assert.equal(result, 230);
  });
});