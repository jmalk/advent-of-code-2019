const { makeWirePositions } = require("./day-03");

test("(Simple) Make wire positions", () => {
  const instructions = ["R1", "U1"];
  const wirePositions = makeWirePositions(instructions);
  const expected = [
    { x: 1, y: 0 },
    { x: 1, y: 1 }
  ];

  expect(wirePositions).toEqual(expected);
});

test("Make wire positions", () => {
  const instructions = ["R8", "U5", "L5", "D3"];
  const wirePositions = makeWirePositions(instructions);
  const expected = [
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 7, y: 0 },
    { x: 8, y: 0 },
    { x: 8, y: 1 },
    { x: 8, y: 2 },
    { x: 8, y: 3 },
    { x: 8, y: 4 },
    { x: 8, y: 5 },
    { x: 7, y: 5 },
    { x: 6, y: 5 },
    { x: 5, y: 5 },
    { x: 4, y: 5 },
    { x: 3, y: 5 },
    { x: 3, y: 4 },
    { x: 3, y: 3 },
    { x: 3, y: 2 }
  ];

  expect(wirePositions).toEqual(expected);
});
