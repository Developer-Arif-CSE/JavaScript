function countOccurrences(numbers, find) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === find) {
        count++;
      }
    }
    return count;
  }
  
 
  const numbers = [5, 6, 11, 12, 98, 5];
  const find1 = 5;
  const find2 = 25;
  
  const count1 = countOccurrences(numbers, find1);
  const count2 = countOccurrences(numbers, find2);
  
  console.log(`Occurrences of ${find1}: ${count1}`);
  console.log(`Occurrences of ${find2}: ${count2}`);