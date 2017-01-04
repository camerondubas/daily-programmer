const inputs = [1234, 3253, 9800, 3333, 120];
const bonus2Inputs = [6589, 5455, 6174];

const addLeadingZeroes = function(num) {
  num = "0000" + num.toString();
  return num.substr(num.length - 4);
}

const getLargestDigit = function(num) {
  return Math.max(...num.toString().split('').map(digit => parseInt(digit)))
}

const sortByLargestDigit = function (num) {
  return parseInt(num
    .toString()
    .split('')
    .sort()
    .reverse()
    .join(''));
}

const sortBySmallestDigit = function (num) {
  return parseInt(num
    .toString()
    .split('')
    .sort()
    .join(''));
}

const kaprekar = function(num, idx=0) {
  if (num === 6174 || num === 0) {
    return idx;
  }
  
  num = addLeadingZeroes(num);
  return kaprekar(sortByLargestDigit(num) - sortBySmallestDigit(num), ++idx);
}

// Answers

// Inital Problem
const output = inputs
  .map(input => getLargestDigit(input));

// Bonus 1
const bonus1Output = inputs
    .map(input => addLeadingZeroes(input))
    .map(input => sortByLargestDigit(input));

// Bonus 2
const bonus2Output = bonus2Inputs
  .map(input => kaprekar(input))
