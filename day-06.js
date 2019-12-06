const readFileSync = require("./lib/read-file-sync");

const input = readFileSync("./inputs/day-06");

const parsedInput = parseInput(input);

const orbits = totalOrbits(parsedInput);

console.log(`Part one: ${orbits}`);

function parseInput(string) {
  const lines = string.split("\n");
  const pairs = lines.map(line => {
    const pair = line.split(")");
    return {
      name: pair[1],
      parent: pair[0]
    };
  });
  return pairs;
}

function countParentsToCOM(body, system) {
  const parent = system.find(obj => obj.name === body.parent);
  return body.parent === "COM" ? 1 : 1 + countParentsToCOM(parent, system);
}

function appendNumberOfOrbits(body, _, system) {
  const orbits = countParentsToCOM(body, system);
  return {
    ...body,
    orbits
  };
}

function sumOrbits(accumulator, currentValue) {
  return accumulator + currentValue.orbits;
}

function totalOrbits(system) {
  return system.map(appendNumberOfOrbits).reduce(sumOrbits, 0);
}

module.exports = { parseInput, totalOrbits, countParentsToCOM };
