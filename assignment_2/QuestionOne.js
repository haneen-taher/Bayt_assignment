//First Solution
function all(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}

var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

console.log(allAreLessThanSeven);

var allAreEven = all([2, 4, 6, 9], function (num) {
  return num % 2 === 0;
});

console.log(allAreEven);

//Second Solution

function all(array, callback) {
  return array.every(callback);
}

var allArePositive = all([5, 10, 3, 8], function (num) {
  return num > 0;
});

console.log(allArePositive);
