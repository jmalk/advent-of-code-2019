const { processIntcode } = require("./lib/intcode-computer");

const readFileSync = require("./lib/read-file-sync");

const input = readFileSync("./inputs/day-02")
  .split(",")
  .map(Number);

function generateInitialState(noun, verb, input) {
  let inputCopy = input.map(x => x);
  inputCopy[1] = noun;
  inputCopy[2] = verb;
  return inputCopy;
}

console.log(
  `Part one: ${processIntcode(generateInitialState(12, 2, input))[0]}`
);

for (let noun = 0; noun < 100; noun++) {
  for (let verb = 0; verb < 100; verb++) {
    const output = processIntcode(generateInitialState(noun, verb, input))[0];
    if (output === 19690720) {
      console.log(`Part two: ${100 * noun + verb}`);
    }
  }
}
