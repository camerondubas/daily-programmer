const input = 31337357;

const gameOfThrees = function(input, resultArr = []) {
  const operation = -((input + 1) % 3 - 1);
  const result  = (input + operation) / 3;
  
  resultArr.push(result === 1 ? '1' : input + ' ' + operation);
  return result === 1 ? resultArr.join('\n') : gameOfThrees(result, resultArr);
}

const output = gameOfThrees(input);
