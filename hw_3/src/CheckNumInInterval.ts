// Задание 2.
// Разработайте и протестируйте метод numberInInterval, который проверяет, попадает ли переданное число в интервал (25;100). (код приложен в презентации)

export class CheckNumInterval {
  public numberInInterval(n: number): boolean {
    if (n >= 25 && n <= 100) {
      return true;
    } else {
      return false;
    }
  }
}
