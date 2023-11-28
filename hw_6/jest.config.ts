import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageReporters: ["text", "html"],
  collectCoverageFrom: ["src/**/*.ts"],
};

export default config;
