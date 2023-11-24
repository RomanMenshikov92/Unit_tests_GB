export abstract class Vehicle {
  company!: string;
  model!: string;
  yearRelease!: number;
  numWheels!: number;
  speed!: number;

  public abstract testDrive(): void;

  public abstract park(): void;
}
