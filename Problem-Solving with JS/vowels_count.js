function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let char of str) {
      if (vowels.includes(char.toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }
  
  
  const string = "Hello, world!";

  const vowelCount = countVowels(string);
  
  console.log(`Number of vowels in "${string}": ${vowelCount}`);