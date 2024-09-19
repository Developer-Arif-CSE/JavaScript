function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';
  
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
 
  const string = "I am learning Programming to become a programmer";
  const longest = findLongestWord(string);
  console.log(`The longest word in "${string}" is: ${longest}`);