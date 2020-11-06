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

function getAncestors(name, system) {
  // Returns an array of strings where each string is the name of an ancestor of the body.
  const body = system.find(obj => obj.name === name);

  if (body.parent === "COM") {
    return ["COM"];
  }
  return getAncestors(body.parent, system).concat([body.parent]);
}

function findUniqueItems(arrayA, arrayB) {
  const uniqueToA = arrayA.filter(item => !arrayB.includes(item));
  const uniqueToB = arrayB.filter(item => !arrayA.includes(item));
  return uniqueToA.concat(uniqueToB);
}

function distance(bodyA, bodyB, system) {
  const ancestorsA = getAncestors(bodyA, system);
  const ancestorsB = getAncestors(bodyB, system);
  const uniqueBodies = findUniqueItems(ancestorsA, ancestorsB);
  // Add 2 because it takes one step to get into and one to get out of the
  // orbit of their last common ancestor.
  const steps = uniqueBodies.length + 2;
  return steps;
}

const readFileSync = require("./lib/read-file-sync");

const input = readFileSync("./inputs/day-06");

const parsedInput = parseInput(input);

const orbits = totalOrbits(parsedInput);

console.log(`Part one: ${orbits}`);

const santa = parsedInput.find(obj => obj.name === "SAN");
const santaLocation = parsedInput.find(obj => obj.name === santa.parent);
const you = parsedInput.find(obj => obj.name === "YOU");
const youLocation = parsedInput.find(obj => obj.name === you.parent);
const distanceToSanta = distance(
  santaLocation.name,
  youLocation.name,
  parsedInput
);

console.log(`Part two: ${distanceToSanta}`);

module.exports = {
  parseInput,
  totalOrbits,
  countParentsToCOM,
  distance,
  getAncestors,
  findUniqueItems
};
