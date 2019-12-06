const { parseInput, totalOrbits, countParentsToCOM } = require("./day-06");

test("Parse input turns orbit strings into objects", () => {
  const orbitString = "ABC)123";
  const expected = [{ name: "123", parent: "ABC" }];
  expect(parseInput(orbitString)).toStrictEqual(expected);

  const orbitString2 = "ABC)123\nDEF)456";
  const expected2 = [
    { name: "123", parent: "ABC" },
    { name: "456", parent: "DEF" }
  ];
  expect(parseInput(orbitString2)).toStrictEqual(expected2);
});

describe("Total orbits calculates sum of direct and indirect orbits for system", () => {
  test("For a two-body system", () => {
    const system = [{ name: "A", parent: "COM" }];
    expect(totalOrbits(system)).toBe(1);
  });

  test("For an empty system", () => {
    expect(totalOrbits([])).toBe(0);
  });

  test("For three objects in a line", () => {
    const system = [
      { name: "A", parent: "COM" },
      { name: "B", parent: "A" }
    ];
    expect(totalOrbits(system)).toBe(3);
  });

  test("For one parent with two children", () => {
    const system = [
      { name: "A", parent: "COM" },
      { name: "B", parent: "COM" }
    ];
    expect(totalOrbits(system)).toBe(2);
  });
});

describe("Count parents to COM works out how many steps from COM an object is in the system", () => {
  test("For an object with COM as its parent", () => {
    const obj = {
      name: "A",
      parent: "COM"
    };
    const system = [obj];
    expect(countParentsToCOM(obj, system)).toBe(1);
  });

  test("For an object with COM as its grandparent (2 steps)", () => {
    const obj = {
      name: "B",
      parent: "A"
    };
    const system = [
      { name: "A", parent: "COM" },
      { name: "B", parent: "A" }
    ];
    expect(countParentsToCOM(obj, system)).toBe(2);
  });
});
