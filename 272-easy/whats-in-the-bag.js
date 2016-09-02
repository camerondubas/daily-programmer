function remainingPieces(input) {
  let startingPieces = {
  "A": 9,
  "B": 2,
  "C": 2,
  "D": 4,
  "E": 12,
  "F": 2,
  "G": 3,
  "H": 2,
  "I": 9,
  "J": 1,
  "K": 1,
  "L": 4,
  "M": 2,
  "N": 6,
  "O": 8,
  "P": 2,
  "Q": 1,
  "R": 6,
  "S": 4,
  "T": 6,
  "U": 4,
  "V": 2,
  "W": 2,
  "X": 1,
  "Y": 2,
  "Z": 1,
  "_": 2
};
  let result = {};
  let errors = [];
  
  input
    .split('')
    .forEach(i => {
      startingPieces[i]--;
      if (startingPieces[i] < 0) errors.push(i);
    });
  
//   Remove Duplicates;
  errors = errors.filter((item, index, inputArray) => inputArray.indexOf(item) == index);

  if (errors.length > 0) return `Invalid input. More ${errors.join(', ')}'s have been taken from the bag than possible.`;
  
  for (let key in startingPieces) {
    let value = startingPieces[key];
    result[value] = result[value] || [];
    result[value].push(key);
  }
  
  return Object
    .keys(result)
    .sort((a, b) => a + b)
    .map(v => `${v}: ${result[v].join(', ')}`)
    .join('\n');
}
