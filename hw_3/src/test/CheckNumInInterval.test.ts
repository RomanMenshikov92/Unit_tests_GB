import "jasmine";
import { CheckNumInterval } from "../CheckNumInInterval";

describe("CheckNumInterval", () => {
  let checkNumInterval: CheckNumInterval;

  beforeEach(() => {
    checkNumInterval = new CheckNumInterval();
  });

  it("should return true for numbers in the interval (25, 100)", () => {
    expect(checkNumInterval.numberInInterval(30)).toBe(true);
    expect(checkNumInterval.numberInInterval(50)).toBe(true);
    expect(checkNumInterval.numberInInterval(75)).toBe(true);
    expect(checkNumInterval.numberInInterval(99)).toBe(true);
  });

  it("should return false for numbers outside the interval (25, 100)", () => {
    expect(checkNumInterval.numberInInterval(10)).toBe(false);
    expect(checkNumInterval.numberInInterval(20)).toBe(false);
    expect(checkNumInterval.numberInInterval(0)).toBe(false);
    expect(checkNumInterval.numberInInterval(120)).toBe(false);
  });
});
