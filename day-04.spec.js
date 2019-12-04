const {
  twoAdjacentDigitsMatch,
  digitsNeverDecrease,
  range,
  containsPairOfDigits
} = require("./day-04");

test("Two adjacent digits match", () => {
  expect(twoAdjacentDigitsMatch(0)).toBe(false);
  expect(twoAdjacentDigitsMatch(22)).toBe(true);
  expect(twoAdjacentDigitsMatch(12)).toBe(false);
  expect(twoAdjacentDigitsMatch(122)).toBe(true);
  expect(twoAdjacentDigitsMatch(123)).toBe(false);
  expect(twoAdjacentDigitsMatch(122345)).toBe(true);
  expect(twoAdjacentDigitsMatch(1234567899)).toBe(true);
  expect(twoAdjacentDigitsMatch(1234567890)).toBe(false);
});

test("Digits never decrease", () => {
  expect(digitsNeverDecrease(123)).toBe(true);
  expect(digitsNeverDecrease(111)).toBe(true);
  expect(digitsNeverDecrease(121)).toBe(false);
  expect(digitsNeverDecrease(321)).toBe(false);
});

test("Range", () => {
  expect(range(1, 2)).toEqual([1, 2]);
  expect(range(0, 3)).toEqual([0, 1, 2, 3]);
});

test("Contains a pair of digits (that aren't part of a larger group)", () => {
  expect(containsPairOfDigits(1)).toBe(false);
  expect(containsPairOfDigits(11)).toBe(true);
  expect(containsPairOfDigits(12)).toBe(false);
  expect(containsPairOfDigits(111)).toBe(false);
  expect(containsPairOfDigits(122)).toBe(true);
  expect(containsPairOfDigits(112233)).toBe(true);
  expect(containsPairOfDigits(123444)).toBe(false);
  expect(containsPairOfDigits(111122)).toBe(true);
});
