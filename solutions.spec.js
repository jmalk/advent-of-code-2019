const day01 = require("./day-01");

describe("Day 1: The Tyranny of the Rocket Equation", () => {
  test("Part 1", () => {
    expect(day01.partOne()).toBe(3291356);
  });
  test("Part 2", () => {
    expect(day01.partTwo()).toBe(4934153);
  });
});
