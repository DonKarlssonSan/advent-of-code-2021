import { assert } from "chai";
import { a } from "./a.js";

describe("06-a Lanternfish", () => {
  it("should return 5934 lantern fishes", () => {
    const input = `3,4,3,1,2`;
    const result = a(input);
    assert.equal(result, 5934);
  });
});
