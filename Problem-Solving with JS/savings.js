function monthlySavings(earnings, livingCost) {
    
    if (!Array.isArray(earnings) || typeof livingCost !== 'number') {
      return "invalid input";
    }
  
    const taxRate = 0.2; 
    let totalEarnings = 0;
    let totalTax = 0;
  
    earnings.forEach(earning => {
      totalEarnings += earning;
      if (earning > 3000) {
        totalTax += (earning - 3000) * taxRate;
      }
    });
  
    const savings = totalEarnings - totalTax - livingCost;
    return savings > 0 ? savings : "earn more";
  }

  const arr=monthlySavings([ 1000 , 2000 , 3000 ] , 5400);
  const arr2=monthlySavings([ 1000 , 2000 , 2500 ] , 5000);
  const arr3=monthlySavings([ 900 , 2700 , 3400] , 10000);
  const arr4=monthlySavings(100, [ 900 , 2700 , 3400]);

  console.log(arr,arr2,arr3,arr4);