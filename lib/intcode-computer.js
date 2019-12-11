function processIntcode(memory, inputValue, outputFn) {
  for (let i = 0; i < memory.length; i += 4) {
    switch (memory[i]) {
      case 99:
        return memory;
      case 1:
        memory[memory[i + 3]] = memory[memory[i + 1]] + memory[memory[i + 2]];
        break;
      case 2:
        memory[memory[i + 3]] = memory[memory[i + 1]] * memory[memory[i + 2]];
        break;
      case 3:
        memory[memory[i + 1]] = inputValue;
        break;
      case 4:
        outputFn(memory[memory[i + 1]]);
        break;
      default:
        throw new Error(`Unknown instruction at ${i}: ${memory[i]}`);
    }
  }
  return memory;
}

module.exports = { processIntcode };
