const { getFullFuelWeight } = require("./day-01");

test("Get Full Fuel Weight (Day 01, part 2)", () => {
  expect(getFullFuelWeight(14)).toBe(2);
  expect(getFullFuelWeight(1969)).toBe(966);
  expect(getFullFuelWeight(100756)).toBe(50346);
});
