const { processIntcode } = require("./intcode-computer");

test("Intcode Processor (Day 02 part 1)", () => {
  expect(processIntcode([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([
    30,
    1,
    1,
    4,
    2,
    5,
    6,
    0,
    99
  ]);
});

describe("Instruction 1: addition", () => {
  test("Given [1, a, b, c], read positions a and b, add their values, and store the result at position c", () => {
    expect(processIntcode([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]);
    expect(processIntcode([1, 5, 6, 7, 99, 12, 8, 0])).toEqual([
      1,
      5,
      6,
      7,
      99,
      12,
      8,
      20
    ]);
  });
});

describe("Instruction 2: multiplication", () => {
  test("Given [2, a, b, c], read positions a and b, multiply their values, and store the result at position c", () => {
    expect(processIntcode([2, 0, 0, 0, 99])).toEqual([4, 0, 0, 0, 99]);
    expect(processIntcode([2, 5, 6, 7, 99, 12, 8, 0])).toEqual([
      2,
      5,
      6,
      7,
      99,
      12,
      8,
      96
    ]);
    expect(processIntcode([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]);
    expect(processIntcode([2, 4, 4, 5, 99, 0])).toEqual([2, 4, 4, 5, 99, 9801]);
  });
});

describe("Instruction 3: input", () => {
  test("Saves input at the location specified by the one parameter", () => {
    // Passing input as second argument to processIntcode to save having to implement reading from console
    expect(processIntcode([3, 0], 5)).toStrictEqual([5, 0]);
  });
});

describe("Instruction 4: output", () => {
  test("Prints the value at the location specified by the one parameter", () => {
    const outputSpy = jest.fn();
    const result = processIntcode([4, 2, 15], 0, outputSpy);
    expect(outputSpy.mock.calls).toEqual([[15]]);
    expect(result).toStrictEqual([4, 2, 15]);
  });
});
