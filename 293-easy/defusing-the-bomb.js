let inputs = [
  ['white','red','green','white'],
  ['white','orange','green','white']
];

let output = inputs.map(input => {
  let rules = {
    white: ['red','green','orange','purple'],
    red:['green'],
    black: ['red', 'purple', 'black'],
    orange: ['red', 'black'],
    green: ['orange', 'white'],
    purple: ['red', 'black']
  };
  
  let defused = input.every(
    (color, idx, original) => original[idx + 1] ? rules[color].includes(original[idx + 1]) : true
  );
  
  return defused ? 'Bomb defused' : 'Boom';
});
