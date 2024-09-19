function odd_even(num) {
    if (num % 2 === 0) {
      return "Even";
    } 
    else {
      return "Odd";
    }
  }
  
 
  const number = 10;
  const result = odd_even(number);
  console.log("Number is:", result); 