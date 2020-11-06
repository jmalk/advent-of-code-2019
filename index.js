/* eslint-disable no-console */
const readFileSync = require("./lib/read-file-sync");

console.log("ANSWERS");

// Day 01

const input01 = readFileSync(`./inputs/day-01`);
const day01 = require("./day-01.js");

console.log(`=== Day 01 ===`);

console.log(`Part 1: ${day01.partOne(input01)}`);
console.log(`Part 2: ${day01.partTwo(input01)}`);
