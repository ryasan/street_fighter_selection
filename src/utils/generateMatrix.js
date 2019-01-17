const generateMatrix = (rows, columns) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matrix.push(0);
    }
  }
  return matrix;
};

export { generateMatrix };
