import { Vehicle } from "../Vehicle";
import { Car } from "../Car";
import { Motorcycle } from "../Motorcycle";

describe("Vehicle", () => {
  // проверка того, что экземпляр объекта Car также является экземпляром транспортного средства; (instanceof)
  it("Car is an instance of Vehicle", () => {
    const car = new Car("Dodge", "Ram", 2010);
    expect(car).toBeInstanceOf(Vehicle);
  });

  // проверка того, объект Car создается с 4-мя колесами
  it("Car has 4 wheels", () => {
    const car = new Car("Dodge", "Ram", 2010);
    expect(car.getNumWheels()).toBe(4);
  });

  // проверка того, объект Motorcycle создается с 2-мя колесами
  it("Motorcycle has 2 wheels", () => {
    const motorcycle = new Motorcycle("Yamaha", "Super Tenere", 2013);
    expect(motorcycle.getNumWheels()).toBe(2);
  });

  //проверка того, объект Car развивает скорость 60 в режиме тестового вождения (testDrive())
  it("Car speed is 60 during test drive", () => {
    const car = new Car("Dodge", "Ram", 2010);
    car.testDrive();
    expect(car.getSpeed()).toBe(60);
  });

  // проверка того, объект Motorcycle развивает скорость 75 в режиме тестового вождения (testDrive())
  it("Motorcycle speed is 75 during test drive", () => {
    const motorcycle = new Motorcycle("Yamaha", "Super Tenere", 2013);
    motorcycle.testDrive();
    expect(motorcycle.getSpeed()).toBe(75);
  });

  // проверить, что в режиме парковки (сначала testDrive, потом park,
  // т.е эмуляция движения транспорта) машина останавливается (speed = 0)
  it("Car speed is 0 when parked", () => {
    const car = new Car("Dodge", "Ram", 2010);
    car.testDrive();
    car.park();
    expect(car.getSpeed()).toBe(0);
  });

  // проверить, что в режиме парковки (сначала testDrive, потом park
  // т.е эмуляция движения транспорта) мотоцикл останавливается (speed = 0)
  it("Motorcycle speed is 0 when parked", () => {
    const motorcycle = new Motorcycle("Yamaha", "Super Tenere", 2013);
    motorcycle.testDrive();
    motorcycle.park();
    expect(motorcycle.getSpeed()).toBe(0);
  });
});
