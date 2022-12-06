import { assert } from "chai";
import { b } from "./b.js";

describe("06-b Lanternfish", () => {
  it("should return 26984457539", () => {
    const input = `3,4,3,1,2`;
    const result = b(input, 256);
    assert.equal(result, 26984457539);
  });
});
