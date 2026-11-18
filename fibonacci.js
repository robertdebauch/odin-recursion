export const fibs = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Enter a positive integer");
  }
  const sequence = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      sequence.push(i);
      continue;
    }
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
};

export const fibsRec = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Enter a positive integer");
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  const previous = fibsRec(n - 1);
  previous.push(previous[previous.length - 1] + previous[previous.length - 2]);

  return previous;
};
