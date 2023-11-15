/**
1. Создается блок `describe` с названием "Shop", в котором будут содержаться все тесты для класса `Shop`.
2. Объявляются переменные `shop`, `product1`, `product2`, `product3`, которые будут использоваться в тестах.
3. В блоке `beforeEach` выполняются действия, которые нужно выполнить перед каждым тестом. В данном случае создается новый экземпляр класса `Shop` и добавляются три продукта в магазин.
4. Первый тест проверяет, что метод `getProducts()` возвращает правильный список продуктов, который был добавлен в магазин. Ожидается, что список продуктов будет равен `[product1, product2, product3]`.
5. Второй тест проверяет, что метод `getMostExpensiveProduct()` возвращает самый дорогой продукт из списка. Ожидается, что самым дорогим продуктом будет `product2`.
6. Третий тест проверяет, что метод `sortProductsByPrice()` сортирует список продуктов по цене. Ожидается, что после сортировки список будет равен `[product1, product3, product2]`.
7. Каждый тест содержит вызов функции `expect`, в которой проверяется ожидаемый результат с помощью метода `toEqual()`.
*/

import { Shop, Product } from "../src/Shop/Shop";

describe("Shop", () => {
  let shop: Shop;
  let product1: Product;
  let product2: Product;
  let product3: Product;

  beforeEach(() => {
    shop = new Shop();
    product1 = new Product("Product1", 10);
    product2 = new Product("Product2", 20);
    product3 = new Product("Product3", 15);
    shop.addProduct(product1);
    shop.addProduct(product2);
    shop.addProduct(product3);
  });

  test("check if shop stores correct list of products", () => {
    expect(shop.getProducts()).toEqual([product1, product2, product3]);
  });

  test("check getMostExpensiveProduct method", () => {
    expect(shop.getMostExpensiveProduct()).toEqual(product2);
  });

  test("check sortProductsByPrice method", () => {
    shop.sortProductsByPrice();
    expect(shop.getProducts()).toEqual([product1, product3, product2]);
  });
});
