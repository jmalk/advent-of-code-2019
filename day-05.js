const readFileSync = require("./lib/read-file-sync");

const input = readFileSync("./inputs/day-05")
  .split(",")
  .map(Number);

const { processIntcode } = require("./lib/intcode-computer");

processIntcode(input, 1, console.log);
