function getFuelWeight(moduleWeight) {
  return Math.floor(moduleWeight / 3) - 2;
}

function getFullFuelWeight(weight) {
  let total = 0;
  const fuelForWeight = Math.floor(weight / 3) - 2;
  total += fuelForWeight;

  if (fuelForWeight > 0) {
    const fuelForFuel = getFullFuelWeight(fuelForWeight);
    if (fuelForFuel > 0) {
      total += fuelForFuel;
    }
  }

  return total;
}

function sum(a, b) {
  return a + b;
}

const readFileSync = require("./lib/read-file-sync");

const input = readFileSync("./inputs/day-01");

const parsedInput = input.split("\n");

const partOneAnswer = parsedInput.map(getFuelWeight).reduce(sum);

const partTwoAnswer = parsedInput.map(getFullFuelWeight).reduce(sum);

function partOne() {
  return partOneAnswer;
}
console.log(partOneAnswer);

function partTwo() {
  return partTwoAnswer;
}
console.log(partTwoAnswer);

// For unit testing:
module.exports = { getFullFuelWeight, partOne, partTwo };
