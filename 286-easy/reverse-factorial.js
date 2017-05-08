const inputs = [3628800, 479001600, 6, 8];

const reverseFactorial = function(input, factorial=0, ) {
  factorial++;
  let result = input/factorial;
  
  if (result < 1) {
    return 'NONE';
  }
  
  return result === 1 ? factorial + '!' : reverseFactorial(result, factorial);
} 

const output = inputs.map(input => `${input} = ${reverseFactorial(input)}`);
