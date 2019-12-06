const {
  parseInput,
  totalOrbits,
  countParentsToCOM,
  distance,
  getAncestors,
  findUniqueItems
} = require("./day-06");

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

describe("Distance returns number of orbital hops needed to get between two bodies", () => {
  test("Between two bodies orbiting the same COM", () => {
    const system = [
      { name: "A", parent: "COM" },
      { name: "B", parent: "COM" }
    ];
    expect(distance("A", "B", system)).toBe(2);
  });

  test("Between two bodies orbiting different children of the COM", () => {
    // COM - A - B
    //    \
    //     - C - D
    const system = [
      { name: "A", parent: "COM" },
      { name: "B", parent: "A" },
      { name: "C", parent: "COM" },
      { name: "D", parent: "C" }
    ];
    expect(distance("B", "D", system)).toBe(4);
  });
});

describe("Get ancestors returns all ancestors of a given body in the system", () => {
  test("For a small linear system", () => {
    // COM - A - B
    const system = [
      { name: "A", parent: "COM" },
      { name: "B", parent: "A" }
    ];
    expect(getAncestors("A", system)).toStrictEqual(["COM"]);
    expect(getAncestors("B", system)).toStrictEqual(["COM", "A"]);
  });

  test("For a system with a fork in it", () => {
    // COM - A - B - C
    //            \
    //             - D
    const system = [
      { name: "A", parent: "COM" },
      { name: "B", parent: "A" },
      { name: "C", parent: "B" },
      { name: "D", parent: "B" }
    ];
    expect(getAncestors("A", system)).toStrictEqual(["COM"]);
    expect(getAncestors("B", system)).toStrictEqual(["COM", "A"]);
    expect(getAncestors("C", system)).toStrictEqual(["COM", "A", "B"]);
    expect(getAncestors("D", system)).toStrictEqual(["COM", "A", "B"]);
  });
});

describe("Find unique items takes two arrays and returns one array containing items which only appear in one of the inputs", () => {
  // TODO: Is there already a JS function that can do this? Surely...
  const a = [1, 2, 3, 4, 5, 6];
  const b = [1, 2, 3, "a", "b", "c"];
  expect(findUniqueItems(a, b)).toStrictEqual([4, 5, 6, "a", "b", "c"]);
});
