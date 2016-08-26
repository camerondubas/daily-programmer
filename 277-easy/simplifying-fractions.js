let gcd = (val1, val2) => val1 % val2 === 0 ? val2 : gcd(val2, val1 % val2);

function simplify(input) {
  let [numerator, denominator] = input.split(' ').map(i => parseInt(i));
  let divisor = gcd(numerator, denominator);
  return `${numerator/divisor} ${denominator/divisor}`;
}
