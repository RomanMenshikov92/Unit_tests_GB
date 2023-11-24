import "jasmine";
import { User } from "../User";
import { UserRepository } from "../UserRepository";

describe("UserRepository", () => {
  let userRepository: UserRepository;
  let testUsers: User[];

  beforeEach(() => {
    // Initialize test users
    testUsers = [
      new User("User1", true), // Admin user
      new User("User2", false), // Non-admin user
      new User("User3", false), // Non-admin user
    ];

    // Create a user repository with test users
    userRepository = new UserRepository(testUsers);
  });

  it("should logout non-admin users", () => {
    // Spy on console.log
    spyOn(console, "log");

    // Call the logout function
    userRepository.logoutNonAdminUsers();

    // Expect console.log to have been called for non-admin users
    expect(console.log).toHaveBeenCalledWith("Logging out non-admin user: User2");
    expect(console.log).toHaveBeenCalledWith("Logging out non-admin user: User3");
  });
});
