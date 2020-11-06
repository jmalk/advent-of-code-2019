const input = "183564-657474";

const bounds = input.split("-").map(Number);
const passwordsInRange = range(bounds[0], bounds[1]);

const acceptablePasswords = passwordsInRange
  .filter(twoAdjacentDigitsMatch)
  .filter(digitsNeverDecrease);

console.log(
  `Part one - number of passwords that meet all rules: ${acceptablePasswords.length}`
);

const partTwoAcceptablePasswords = passwordsInRange
  .filter(containsPairOfDigits)
  .filter(digitsNeverDecrease);

console.log(
  `Part two - number of passwords that meet all rules: ${partTwoAcceptablePasswords.length}`
);

function range(start, end) {
  const range = [];
  for (let i = start; i <= end; i += 1) {
    range.push(i);
  }
  return range;
}

function toArrayOfDigits(number) {
  return `${number}`.split("");
}

function nextItemMatches(element, index, array) {
  return element === array[index + 1];
}

function twoAdjacentDigitsMatch(number) {
  const digits = toArrayOfDigits(number);
  return digits.length >= 2 && digits.some(nextItemMatches);
}

function isPartOfAPair(element, index, array) {
  return (
    element !== array[index - 1] &&
    element === array[index + 1] &&
    element !== array[index + 2]
  );
}

function containsPairOfDigits(number) {
  const digits = toArrayOfDigits(number);
  return digits.some(isPartOfAPair);
}

function nextItemLessThan(element, index, array) {
  return element > array[index + 1];
}

function reducer(accumulator, current, index, array) {
  return accumulator && !nextItemLessThan(current, index, array);
}

function digitsNeverDecrease(number) {
  const digits = toArrayOfDigits(number);
  return digits.reduce(reducer, true);
}

module.exports = {
  twoAdjacentDigitsMatch,
  digitsNeverDecrease,
  range,
  containsPairOfDigits
};
