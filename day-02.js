function processIntcode(program) {
  for (let i = 0; i < program.length; i += 4) {
    switch (program[i]) {
      case 99:
        return program;
      case 1:
        program[program[i + 3]] =
          program[program[i + 1]] + program[program[i + 2]];
        break;
      case 2:
        program[program[i + 3]] =
          program[program[i + 1]] * program[program[i + 2]];
        break;
      default:
        throw new Error(`Unknown instruction at ${i}: ${program[i]}`);
    }
  }
  return program;
}

const readFileSync = require("./lib/read-file-sync");

const input = readFileSync("./inputs/day-02")
  .split(",")
  .map(Number);

const inputCopy = input.map(x => x);
inputCopy[1] = 12;
inputCopy[2] = 2;

console.log(processIntcode(inputCopy));

module.exports = { processIntcode };
