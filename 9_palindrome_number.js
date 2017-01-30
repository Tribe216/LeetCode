/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;

  const numDigits = howManyDigits(x);

  for(let i = numDigits; i > numDigits / 2; i--) {
    if ( getNthDigit(x, numDigits - i) !== getNthDigit(x, i - 1)) return false;
  }

  return true
};

function howManyDigits(num) {
  let numDigits = 0
  for(; num / Math.pow(10, numDigits) >= 1; numDigits ++ ) {}
  return numDigits;
}

function getNthDigit(num, dig) {
  if( num / Math.pow(10, dig) < 1) return -1;
  const remainder = num % Math.pow(10, dig);
  num -= remainder;
  num /= Math.pow(10, dig);
  return (num % 10);
}

isPalindrome(1000);
