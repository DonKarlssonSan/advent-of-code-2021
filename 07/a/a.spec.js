import { assert } from "chai";
import { getMinFuel } from "./a.js";

describe("07-a The Treachery of Whales", () => {
  it("should return 37 in fuel cost", () => {
    const input = `16,1,2,0,4,2,7,1,2,14`;
    const result = getMinFuel(input);
    assert.equal(result, 37);
  });
});
