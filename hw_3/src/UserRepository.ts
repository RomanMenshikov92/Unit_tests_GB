import { User } from "./User";

export class UserRepository {
  users: User[];

  constructor(users: User[]) {
    this.users = users;
  }

  logoutNonAdminUsers(): void {
    this.users.forEach((user) => {
      if (!user.isAdmin) {
        // Perform logout operation for non-admin users
        console.log(`Logging out non-admin user: ${user.name}`);
      }
    });
  }
}