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

module.exports = { parseInput };
