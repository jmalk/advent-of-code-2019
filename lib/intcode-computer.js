const leftPadArray = require("./left-pad-array");

function processIntcode(memory, inputValue, outputFn) {
  let instructionLength = 0;
  for (let i = 0; i < memory.length; i += instructionLength) {
    const instruction = memory[i];

    const instructionArray = leftPadArray(
      ("" + instruction).split("").map(Number),
      5,
      0
    );

    // Have to use a string because 01 is not a valid number in JS
    const opcode = "" + instructionArray[3] + instructionArray[4];

    const firstParamImmediate = !!instructionArray[2];
    const secondParamImmediate = !!instructionArray[1];

    const firstParam = firstParamImmediate
      ? memory[i + 1]
      : memory[memory[i + 1]];
    const secondParam = secondParamImmediate
      ? memory[i + 2]
      : memory[memory[i + 2]];

    switch (opcode) {
      case "99":
        return memory;
      case "01":
        memory[memory[i + 3]] = firstParam + secondParam;
        instructionLength = 4;
        break;
      case "02":
        memory[memory[i + 3]] = firstParam * secondParam;
        instructionLength = 4;
        break;
      case "03":
        memory[memory[i + 1]] = inputValue;
        instructionLength = 2;
        break;
      case "04":
        outputFn(memory[memory[i + 1]]);
        instructionLength = 2;
        break;
      default:
        throw new Error(`Unknown instruction at ${i}: ${opcode}`);
    }
  }
  return memory;
}

module.exports = { processIntcode };
