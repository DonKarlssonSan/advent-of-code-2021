import { assert } from "chai";
import { getMinFuel2 } from "./b.js";

describe("07-b The Treachery of Whales", () => {
  it("should return 168 in fuel cost", () => {
    const input = `16,1,2,0,4,2,7,1,2,14`;
    const result = getMinFuel2(input);
    assert.equal(result, 168);
  });
});
