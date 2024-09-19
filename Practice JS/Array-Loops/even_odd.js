function processNumber(number) {
    if (number % 2 === 0) {
      
      return number / 2;
    }
    else {
        return number * 2;
    }
  }
  
  
  const inputNumber = 7;
  const result = processNumber(inputNumber);
  console.log("Result:", result); 