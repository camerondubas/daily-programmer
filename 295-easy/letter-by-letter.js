let inputs = [
  ['floor','brake'],
  ['wood', 'book'],
  ['a fall to the floor', 'braking the door in']
];

let outputs = inputs
  .map(input => input[0]
    .split('')
    .reduce((previous, current, idx, originalInputs) => {    
      originalInputs[idx] = input[1].split('')[idx];
      previous.push(originalInputs.join(''));
    
      return previous;
    }, [input[0]])
  );
