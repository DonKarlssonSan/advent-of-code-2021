import { assert } from "chai";
import { getNrOfIncreases } from "./sonar.js";

describe("1a sonar readings", () => {
  it("depth should increase 7 times", () => {
    const input = 
`199
200
208
210
200
207
240
269
260
263`;
    const result = getNrOfIncreases(input);
    assert.equal(result, 7);
  });
});