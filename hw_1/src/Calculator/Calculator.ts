/**
1. Создается класс Calculator.
2. Внутри класса определены два метода: calculation и calculateDiscount.
3. Метод calculation принимает три аргумента: firstOperand (первый операнд), secondOperand (второй операнд) и operator (оператор).
4. Внутри метода calculation используется оператор switch, который проверяет значение переменной operator.
5. Если operator равен "+", то метод возвращает сумму firstOperand (gth) и secondOperand.
6. Если operator равен "-", то метод возвращает разность firstOperand и secondOperand.
7. Если operator равен "*", то метод возвращает произведение firstOperand и secondOperand.
8. Если operator равен "/", то метод проверяет, что secondOperand не равен 0. Если это условие выполняется, то метод возвращает частное firstOperand и secondOperand.
9. Если secondOperand равен 0, то метод выбрасывает ошибку с сообщением.
10. Если operator не равен ни одному из указанных значений, то метод выбрасывает ошибку с сообщением.
11. Метод calculateDiscount принимает два аргумента: purchaseAmount (сумма покупки) и discountAmount (сумма скидки).
12. Внутри метода calculateDiscount проверяется, что purchaseAmount больше или равно 0. Если это условие не выполняется, то метод выбрасывает ошибку с сообщением.
13. Затем проверяется, что discountAmount больше или равно 0 и меньше или равно 100. Если это условие не выполняется, то метод выбрасывает ошибку с сообщением.
14. Если все условия выполняются, то метод возвращает сумму покупки с учетом скидки, которая рассчитывается как purchaseAmount минус (purchaseAmount умноженное на discountAmount, деленное на 100).
*/
export class Calculator {
  calculation(firstOperand: number, secondOperand: number, operator: string): number {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        if (secondOperand !== 0) {
          return firstOperand / secondOperand;
        } else {
          throw new Error("Деление на ноль невозможно");
        }
      default:
        throw new Error("Оператор неожиданного значения: " + operator);
    }
  }

  calculateDiscount(purchaseAmount: number, discountAmount: number): number {
    if (purchaseAmount < 0) {
      throw new Error("Сумма покупки не может быть отрицательной");
    }
    if (discountAmount < 0 || discountAmount > 100) {
      throw new Error("Скидка должна быть в диапазоне от 0 до 100%");
    }
    return purchaseAmount - (purchaseAmount * discountAmount) / 100;
  }
}
