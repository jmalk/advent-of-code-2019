function processIntcode(memory, inputValue, outputFn) {
  let instructionLength = 0;
  for (let i = 0; i < memory.length; i += instructionLength) {
    const instruction = memory[i];
    switch (instruction) {
      case 99:
        return memory;
      case 1:
        memory[memory[i + 3]] = memory[memory[i + 1]] + memory[memory[i + 2]];
        instructionLength = 4;
        break;
      case 2:
        memory[memory[i + 3]] = memory[memory[i + 1]] * memory[memory[i + 2]];
        instructionLength = 4;
        break;
      case 3:
        memory[memory[i + 1]] = inputValue;
        instructionLength = 2;
        break;
      case 4:
        outputFn(memory[memory[i + 1]]);
        instructionLength = 2;
        break;
      default:
        throw new Error(`Unknown instruction at ${i}: ${instruction}`);
    }
  }
  return memory;
}

module.exports = { processIntcode };
