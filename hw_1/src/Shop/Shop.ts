/**
1. Создается класс Product с двумя свойствами - name (название продукта) и price (цена продукта). Конструктор класса принимает значения для этих свойств.
2. Создается класс Shop с приватным свойством products, которое представляет массив объектов типа Product.
3. В классе Shop определяется метод addProduct, который принимает объект типа Product и добавляет его в массив products.
4. В классе Shop определяется метод sortProductsByPrice, который сортирует массив products по возрастанию цены продуктов, используя метод sort и передавая ему функцию сравнения, которая сравнивает свойство price двух объектов Product.
5. В классе Shop определяется метод getMostExpensiveProduct, который находит самый дорогой продукт в массиве products, используя метод reduce и передавая ему функцию, которая сравнивает свойство price двух объектов Product и возвращает объект с наибольшей ценой.
6. В классе Shop определяется метод getProducts, который возвращает массив products.
7. Классы Product и Shop экспортируются для использования в других модулях.
8. Другой модуль может создать экземпляр класса Shop, добавить продукты с помощью метода addProduct, отсортировать продукты по цене с помощью метода sortProductsByPrice, получить самый дорогой продукт с помощью метода getMostExpensiveProduct и получить все продукты с помощью метода getProducts.
*/

export class Product {
  constructor(public name: string, public price: number) {}
}

export class Shop {
  private products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
  }

  sortProductsByPrice() {
    this.products.sort((a, b) => a.price - b.price);
  }

  getMostExpensiveProduct(): Product {
    return this.products.reduce((prev, current) => (prev.price > current.price ? prev : current));
  }

  getProducts(): Product[] {
    return this.products;
  }
}
