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

module.exports = { makeWirePositions };
// Make an array of points that appear in both arrays
// Find the intersection point with the lowest Manhattan distance from { x: 0, y: 0 }
