const { parseInput } = require("./day-06");

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
