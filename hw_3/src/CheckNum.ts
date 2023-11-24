// Задание 1.
// Напишите тесты, покрывающие на 100% метод evenOddNumber, который проверяет, является ли переданное число четным или нечетным. (код приложен в презентации)

export class CheckNum {
  public evenOddNumber(n: number): boolean {
    if (n % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
}