export class AverageCalculator {
  calculateAverage(list: number[]): number {
    const sum = list.reduce((acc, val) => acc + val, 0);
    return sum / list.length;
  }
}

export class AverageComparer {
  compareAverages(average1: number, average2: number): string {
    if (average1 > average2) {
      return "Первый список имеет большее среднее значение";
    } else if (average1 < average2) {
      return "Второй список имеет большее среднее значение";
    } else {
      return "Средние значения равны";
    }
  }
}

const averageCalculator = new AverageCalculator();
const averageComparer = new AverageComparer();

const list1: number[] = [1, 2, 3, 4, 5];
const list2: number[] = [6, 7, 8, 9, 10];

const average1 = averageCalculator.calculateAverage(list1);
const average2 = averageCalculator.calculateAverage(list2);

const comparisonResult = averageComparer.compareAverages(average1, average2);
console.log(comparisonResult);
