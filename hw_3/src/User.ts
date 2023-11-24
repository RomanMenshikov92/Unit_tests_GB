export class User {
  name: string;
  isAdmin: boolean;

  constructor(name: string, isAdmin: boolean) {
    this.name = name;
    this.isAdmin = isAdmin;
  }
}
