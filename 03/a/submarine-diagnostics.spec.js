import { assert } from "chai";
import { getPowerConsumption } from "./submarine-diagnostics.js";

describe("3a submarine diagnostics", () => {
  it("power consumption should be 198", () => {
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
    const result = getPowerConsumption(input);
    assert.equal(result, 198);
  });
});