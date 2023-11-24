import "jasmine";
import { CheckNum } from "../CheckNum";

describe("CheckNum", () => {
  let checkNum: CheckNum;

  beforeEach(() => {
    checkNum = new CheckNum();
  });

  it("should return true for even numbers", () => {
    expect(checkNum.evenOddNumber(2)).toBe(true);
    expect(checkNum.evenOddNumber(4)).toBe(true);
    expect(checkNum.evenOddNumber(6)).toBe(true);
    expect(checkNum.evenOddNumber(8)).toBe(true);
    expect(checkNum.evenOddNumber(10)).toBe(true);
  });

  it("should return false for odd numbers", () => {
    expect(checkNum.evenOddNumber(1)).toBe(false);
    expect(checkNum.evenOddNumber(3)).toBe(false);
    expect(checkNum.evenOddNumber(5)).toBe(false);
    expect(checkNum.evenOddNumber(7)).toBe(false);
    expect(checkNum.evenOddNumber(9)).toBe(false);
  });
});
