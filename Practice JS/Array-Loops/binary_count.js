function count_zero(binaryString) {
    let count = 0;
    for (let i = 0; i < binaryString.length; i++) {
      if (binaryString[i] === '0') {
        count++;
      }
    }
    return count;
  }
  
 
  const binaryString = "101010010000";
  const zeroCount = count_zero(binaryString);
  console.log("Number of 0's:", zeroCount); 