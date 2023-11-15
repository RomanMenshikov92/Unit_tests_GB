import { Calculator } from "./src/Calculator/Calculator";
import { Shop, Product } from "./src/Shop/Shop";

const calculator = new Calculator();
// Выполнение вычислений
const summation = calculator.calculation(2, 6, "+");
console.log("Результат сложения: ", summation);
const difference = calculator.calculation(2, 2, "-");
console.log("Результат вычитания: ", difference);
const multiplication = calculator.calculation(2, 7, "*");
console.log("Результат умножения: ", multiplication);
const division = calculator.calculation(100, 50, "/");
console.log("Результат деления: ", division);
// Расчет скидки
const discountedAmount = calculator.calculateDiscount(1000, 25);
console.log("Сумма с учетом скидки: ", discountedAmount);

const shop = new Shop();
// Создаем экземпляры класса Product
const product1 = new Product("Product1", 10);
const product2 = new Product("Product2", 20);
const product3 = new Product("Product3", 15);
// Добавляем продукты в магазин
shop.addProduct(product1);
shop.addProduct(product2);
shop.addProduct(product3);
// Выводим список продуктов в консоль
console.log(shop.getProducts());
// Сортируем продукты по цене
shop.sortProductsByPrice();
// Выводим отсортированный список продуктов в консоль
console.log(shop.getProducts());
// Получаем самый дорогой продукт
const mostExpensiveProduct = shop.getMostExpensiveProduct();
// Выводим информацию о самом дорогом продукте в консоль
console.log("Most expensive product:", mostExpensiveProduct);
