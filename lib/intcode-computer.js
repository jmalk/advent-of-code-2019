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

module.exports = { processIntcode };
