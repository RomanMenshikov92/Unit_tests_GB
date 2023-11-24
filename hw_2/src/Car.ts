import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  company: string;
  model: string;
  yearRelease: number;
  numWheels: number;
  speed: number;
  year!: string;
  make!: string;

  constructor(company: string, model: string, year: number) {
    super();
    this.company = company;
    this.model = model;
    this.yearRelease = year;
    this.numWheels = 4;
    this.speed = 0;
  }

  public testDrive(): void {
    this.speed = 60;
  }

  public park(): void {
    this.speed = 0;
  }

  public getCompany(): string {
    return this.company;
  }

  public getModel(): string {
    return this.model;
  }

  public getYearRelease(): number {
    return this.yearRelease;
  }

  public getNumWheels(): number {
    return this.numWheels;
  }

  public getSpeed(): number {
    return this.speed;
  }

  public toString(): string {
    return "This car is a " + this.year + " " + this.make + " " + this.model;
  }
}
