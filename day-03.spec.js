const { makeWirePositions, manhattanDistance } = require("./day-03");

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

test("Manhattan distance", () => {
  expect(manhattanDistance({ x: 1, y: 1 })).toBe(2);
  expect(manhattanDistance({ x: -1, y: 1 })).toBe(2);
  expect(manhattanDistance({ x: -4, y: -7 })).toBe(11);
  expect(manhattanDistance({ x: 3, y: -12 })).toBe(15);
  expect(manhattanDistance({ x: 0, y: 0 })).toBe(0);
  expect(manhattanDistance({ x: 2, y: 0 })).toBe(2);
  expect(manhattanDistance({ x: 0, y: -2 })).toBe(2);
});
