// Make two arrays, one for each set of positions occupied by the wires

function step(direction, currentPosition) {
  const steps = {
    R: {
      x: currentPosition.x + 1,
      y: currentPosition.y
    },
    U: {
      x: currentPosition.x,
      y: currentPosition.y + 1
    },
    L: {
      x: currentPosition.x - 1,
      y: currentPosition.y
    },
    D: {
      x: currentPosition.x,
      y: currentPosition.y - 1
    }
  };

  return steps[direction];
}

function makeWirePositions(instructions) {
  let currentPosition = { x: 0, y: 0 };
  // Don't include origin in positions or it will always be closest to origin!
  let positions = [];

  instructions.forEach(instruction => {
    const direction = instruction.slice(0, 1);
    const distance = instruction.slice(1);
    for (let i = 0; i < distance; i++) {
      const newPosition = step(direction, currentPosition);
      positions.push(newPosition);
      currentPosition = newPosition;
    }
  });
  return positions;
}

const readFileSync = require("./lib/read-file-sync");

const input = readFileSync("./inputs/day-03");
const instructions = input.split("\n").map(str => str.split(","));
const positions = instructions.map(makeWirePositions);

// Make an array of points that appear in both arrays
let intersections = [];

// This next bit takes TIME, hence the console.log Got match! so you know something's happening.
// TODO: make this NOT slow down the tests!
// positions[0].forEach(pos => {
//   const match = positions[1].find(
//     otherPos => pos.x === otherPos.x && pos.y === otherPos.y
//   );
//   if (match) {
//     console.log("Got match!");
//     intersections.push(match);
//   }
// });
// console.log(intersections);
intersections = [
  { x: -30, y: 776 },
  { x: -26, y: 966 },
  { x: 539, y: 1880 },
  { x: 280, y: 2577 },
  { x: -56, y: 2577 },
  { x: -131, y: 2281 },
  { x: -579, y: 1687 },
  { x: -584, y: 1687 },
  { x: -662, y: 1872 },
  { x: -662, y: 1922 },
  { x: -662, y: 1978 },
  { x: -56, y: 2317 },
  { x: 90, y: 2688 },
  { x: -1877, y: 3966 },
  { x: -2256, y: 3966 },
  { x: -2256, y: 4008 },
  { x: -1877, y: 4008 },
  { x: -4285, y: 4018 },
  { x: -4048, y: 4005 },
  { x: -3844, y: 4005 },
  { x: -3344, y: 4229 },
  { x: -3344, y: 4522 },
  { x: -3344, y: 4781 }
];

// Find the intersection point with the lowest Manhattan distance from { x: 0, y: 0 }
function manhattanDistance(position) {
  return Math.abs(position.x) + Math.abs(position.y);
}

// const distances = intersections.map(manhattanDistance);
// console.log(distances);
const distances = [
  806,
  992,
  2419,
  2857,
  2633,
  2412,
  2266,
  2271,
  2534,
  2584,
  2640,
  2373,
  2778,
  5843,
  6222,
  6264,
  5885,
  8303,
  8053,
  7849,
  7573,
  7866,
  8125
];

const distanceToClosest = distances.reduce((acc, cur) => {
  return Math.min(acc, cur);
});
console.log(distanceToClosest);

module.exports = { makeWirePositions, manhattanDistance };

// Calculate the number of steps each wire takes to reach each intersection
function wireForIntersection(intersection) {
  // +1 to both of these because it the zeroth value in the array is really the
  // first unit length of wire needed.
  const firstWireLength =
    positions[0].findIndex(
      pos => pos.x === intersection.x && pos.y === intersection.y
    ) + 1;
  const secondWireLength =
    positions[1].findIndex(
      pos => pos.x === intersection.x && pos.y === intersection.y
    ) + 1;
  return firstWireLength + secondWireLength;
}

const wireNeededForIntersections = intersections.map(wireForIntersection);
const smallestWireNeeded = wireNeededForIntersections.reduce((acc, cur) => {
  return Math.min(acc, cur);
});

console.log(
  "Fewest combined steps to reach an intersection: ",
  smallestWireNeeded
);
