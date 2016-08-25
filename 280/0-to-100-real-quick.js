function countTo(value) {
  let nums = value.split('').map(val => parseInt(val));
  let leftHandValue = validateInput(nums.splice(0,4).reverse()) * 10;
  const static50 = nums.splice(0,1) * 50;
  const static5 = nums.splice(0,1) * 5;
  let rightHandValue = validateInput(nums);
  
  let sum = leftHandValue + rightHandValue+ static50 + static5;
  return isNaN(sum) ? 'Invalid' : sum;
};

function validateInput(value) {  
  let amount = 0;
  let wasFalse = false;
  let isValid = true;

  value.forEach(val => {
    isValid = !(Boolean(val) && wasFalse);
    amount += val;
    wasFalse = wasFalse || !Boolean(val);
  });

  return isValid ? amount : NaN;
}
