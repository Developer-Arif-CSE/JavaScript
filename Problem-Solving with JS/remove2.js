// 


const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicates(array) {
  const uniqueSet = new Set(array);
  return Array.from(uniqueSet);
}

const uniqueArray = noDuplicates(numbers);
console.log(uniqueArray);