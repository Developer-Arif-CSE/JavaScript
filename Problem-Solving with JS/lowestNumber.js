const heights2 = [167, 190, 120, 165, 137];

function findLowestNumber(numbers) {
  let lowest = numbers[0]; 

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      lowest = numbers[i];
    }
  }

  return lowest;
}

const lowestHeight = findLowestNumber(heights2);
console.log("The lowest height is:", lowestHeight);