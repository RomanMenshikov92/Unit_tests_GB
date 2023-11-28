import { AverageCalculator, AverageComparer } from "../src/main";

describe("AverageCalculator", () => {
  const averageCalculator = new AverageCalculator();

  it("should return the average of a list of numbers", () => {
    expect(averageCalculator.calculateAverage([1, 2, 3, 4, 5])).toBe(3);
    expect(averageCalculator.calculateAverage([6, 7, 8, 9, 10])).toBe(8);
  });

  it("should return NaN for an empty list", () => {
    expect(averageCalculator.calculateAverage([])).toBeNaN();
  });
});

describe("AverageComparer", () => {
  const averageComparer = new AverageComparer();

  it("should return the correct message when the first average is greater", () => {
    expect(averageComparer.compareAverages(4, 3)).toBe("Первый список имеет большее среднее значение");
  });

  it("should return the correct message when the second average is greater", () => {
    expect(averageComparer.compareAverages(3, 4)).toBe("Второй список имеет большее среднее значение");
  });

  it("should return the correct message when the averages are equal", () => {
    expect(averageComparer.compareAverages(3, 3)).toBe("Средние значения равны");
  });
});
