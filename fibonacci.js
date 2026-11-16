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
