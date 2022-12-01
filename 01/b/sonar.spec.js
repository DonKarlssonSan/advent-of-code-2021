import { assert } from "chai";
import { getNrOfIncreasesWindow } from "./sonar.js";

describe("1b sonar readings", () => {
  it("depth by sliding window should increase 5 times", () => {
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
    const result = getNrOfIncreasesWindow(input);
    assert.equal(result, 5);
  });
});