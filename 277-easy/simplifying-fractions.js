function simplify(input) {
  let [numerator, denominator] = input.split(' ').map(i => parseInt(i));
  let divisor = gcd(numerator, denominator);
  return `${numerator/divisor} ${denominator/divisor}`;
}

function gcd(val1, val2) {
  let [largerNumber, smallerNumber] = val1 > val2 ? [val1, val2] : [val2, val1];  
  let remainder = largerNumber % smallerNumber;
  return remainder === 0 ? smallerNumber : gcd(smallerNumber, remainder);
}
