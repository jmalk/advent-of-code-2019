const leftPadArray = require("./left-pad-array");

describe("Left pad array", () => {
  test("Adds items to the start of an array until it is a certain length", () => {
    const array = [1, 2, 3];
    expect(leftPadArray(array, -1, 0)).toStrictEqual([1, 2, 3]);
    expect(leftPadArray(array, 0, 0)).toStrictEqual([1, 2, 3]);
    expect(leftPadArray(array, 1, 0)).toStrictEqual([1, 2, 3]);
    expect(leftPadArray(array, 2, 0)).toStrictEqual([1, 2, 3]);
    expect(leftPadArray(array, 3, 0)).toStrictEqual([1, 2, 3]);
    expect(leftPadArray(array, 4, 0)).toStrictEqual([0, 1, 2, 3]);
    expect(leftPadArray(array, 5, 0)).toStrictEqual([0, 0, 1, 2, 3]);
  });
});
