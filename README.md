# Unit-тесты

<details>
<summary>Урок 1. Цели и смысл тестирования</summary>

- Задание 1. \*\* В классе Calculator создайте метод calculateDiscount, который принимает сумму покупки и процент скидки и возвращает сумму с учетом скидки. Ваша задача - проверить этот метод с использованием библиотеки AssertJ. Если метод calculateDiscount получает недопустимые аргументы, он должен выбрасывать исключение ArithmeticException. Не забудьте написать тесты для проверки этого поведения.

- Задание 2. (необязательное).\*\*
  Мы хотим улучшить функциональность нашего интернет-магазина. Ваша задача - добавить два новых метода в класс Shop:
  Метод sortProductsByPrice(), который сортирует список продуктов по стоимости. Метод getMostExpensiveProduct(), который возвращает самый дорогой продукт. Напишите тесты, чтобы проверить, что магазин хранит верный список продуктов (правильное количество продуктов, верное содержимое корзины).
  Напишите тесты для проверки корректности работы метода getMostExpensiveProduct. Напишите тесты для проверки корректности работы метода sortProductsByPrice (проверьте правильность сортировки). Используйте класс Product для создания экземпляров продуктов и класс Shop для написания методов сортировки и тестов.

#### \*\*Домашнее задание на этом курсе можно сдать в формате, который вам удобнее всего. Вот два предложенных варианта:

- Ссылка на репозиторий Git: Создайте репозиторий для вашего проекта на платформе для хостинга исходного кода (например, GitHub, GitLab или Bitbucket). Ваш код, тесты и все необходимые файлы должны быть доступны в репозитории. При отправке домашнего задания просто предоставьте ссылку на ваш репозиторий или пулл реквест.

- Прикрепленный архив: Если вы предпочитаете не использовать Git, вы можете просто упаковать все свои файлы проекта (код, тесты и т.д.) в архив (zip или tar.gz) и прикрепить этот архив к вашей работе.

Пожалуйста, убедитесь, что в любом случае ваш код легко доступен и может быть проверен без проблем. Напоминаем, что важным элементом вашего домашнего задания является ваш код, тесты, отчет о покрытии кода тестами, а также обоснование выбора сценариев для тестирования.

</details>

#

<details>
<summary>Урок 2. Знакомство с тестовыми фреймворками</summary>

Задание 1.
Проект Vehicle. Написать следующие тесты с использованием JUnit5:

- Проверить, что экземпляр объекта Car также является экземпляром транспортного средства (используя оператор instanceof).

- Проверить, что объект Car создается с 4-мя колесами.

- Проверить, что объект Motorcycle создается с 2-мя колесами.

- Проверить, что объект Car развивает скорость 60 в режиме тестового вождения (используя метод testDrive()).

- Проверить, что объект Motorcycle развивает скорость 75 в режиме тестового вождения (используя метод testDrive()).

- Проверить, что в режиме парковки (сначала testDrive, потом park, т.е. эмуляция движения транспорта) машина останавливается (speed = 0).

- Проверить, что в режиме парковки (сначала testDrive, потом park, т.е. эмуляция движения транспорта) мотоцикл останавливается (speed = 0).

В этом проекте, вы будете работать с проектом ""Vehicle"", который представляет собой иерархию классов, включающую абстрактный базовый класс ""Vehicle"" и два его подкласса ""Car"" и ""Motorcycle"".

Базовый класс ""Vehicle"" содержит абстрактные методы ""testDrive()"" и ""park()"", а также поля ""company"", ""model"", ""yearRelease"", ""numWheels"" и ""speed"".

Класс ""Car"" расширяет ""Vehicle"" и реализует его абстрактные методы. При создании объекта ""Car"", число колес устанавливается в 4, а скорость в 0. В методе ""testDrive()"" скорость устанавливается на 60, а в методе ""park()"" - обратно в 0.

Класс ""Motorcycle"" также расширяет ""Vehicle"" и реализует его абстрактные методы. При создании объекта ""Motorcycle"", число колес устанавливается в 2, а скорость в 0. В методе ""testDrive()"" скорость устанавливается на 75, а в методе ""park()"" - обратно в 0.

Формат сдачи: воспользуйтесь одним из вариантов: Ссылка на репозиторий Git или Прикрепленный архив

</details>
