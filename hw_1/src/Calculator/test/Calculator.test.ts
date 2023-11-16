/**
1. Создается новый экземпляр класса Calculator с помощью оператора new: const calculator = new Calculator().
2. Внутри блока describe описываются тесты для класса Calculator.
3. Первый тест проверяет правильность выполнения математических операций. Внутри блока it вызывается метод calculation() экземпляра calculator с различными аргументами и ожидается, что результат будет соответствовать ожидаемому значению. Например, expect(calculator.calculation(2, 6, "+")).toEqual(8) проверяет, что результат сложения чисел 2 и 6 равен 8.
4. Второй тест проверяет правильность расчета скидки. Внутри блока it, () => {...}) вызывается метод calculateDiscount() экземпляра calculator с различными аргументами и ожидается, что результат будет соответствовать ожидаемому значению. Например, expect(calculator.calculateDiscount(100, 10)).toEqual(90) проверяет, что результат расчета скидки для суммы покупки 100 и скидки 10% равен 90.
5. В случае, если ожидаемый результат не совпадает с фактическим результатом, тест выдает ошибку и сообщает, что ожидаемое и фактическое значения не совпадают.
6. В случае, если ожидается возникновение исключения, используется функция-обертка, чтобы проверить, что исключение действительно возникает. Например, expect(() => calculator.calculation(8, 4, "_")).toThrow(new Error("Оператор неожиданного значения: _")) проверяет, что при вызове метода calculation() с некорректным оператором "_" будет выброшено исключение с ожидаемым сообщением
*/

import { Calculator } from "../Calculator";

describe("Calculator", () => {
  const calculator = new Calculator();

  it("should perform calculation correctly", () => {
    expect(calculator.calculation(2, 6, "+")).toEqual(8);
    expect(calculator.calculation(2, 2, "-")).toEqual(0);
    expect(calculator.calculation(2, 7, "*")).toEqual(14);
    expect(calculator.calculation(100, 50, "/")).toEqual(2);
    expect(() => calculator.calculation(8, 4, "_")).toThrow(new Error("Оператор неожиданного значения: _"));
  });

  it("should perform discount calculation correctly", () => {
    expect(() => calculator.calculateDiscount(-100, 50)).toThrow(new Error("Сумма покупки не может быть отрицательной"));
    expect(() => calculator.calculateDiscount(100, -10)).toThrow(new Error("Скидка должна быть в диапазоне от 0 до 100%"));
    expect(() => calculator.calculateDiscount(100, 101)).toThrow(new Error("Скидка должна быть в диапазоне от 0 до 100%"));
    expect(calculator.calculateDiscount(100, 10)).toEqual(90);
    expect(calculator.calculateDiscount(200, 25)).toEqual(150);
    expect(calculator.calculateDiscount(1000, 25)).toEqual(750);
    expect(calculator.calculateDiscount(1000, 100)).toEqual(0);
    expect(calculator.calculateDiscount(1000, 0)).toEqual(1000);
  });
});
