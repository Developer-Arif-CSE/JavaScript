function calculateMoney(ticketSale) {
    const ticketPrice = 120;
    const guardSalary = 500;
    const staffLunchCostPerPerson = 50;
    const numberOfStaff = 8;
  
   
    if (ticketSale < 0) {
      return "Invalid input: Please enter a non-negative number";
    }
  
    
    const totalEarnings = ticketSale * ticketPrice;
    const totalStaffLunchCost = numberOfStaff * staffLunchCostPerPerson;
    const totalExpenses = guardSalary + totalStaffLunchCost;
    const remainingAmount = totalEarnings - totalExpenses;
  
    return remainingAmount;
  }


  const calculate=calculateMoney(10);
  const calculate2=calculateMoney(1055);
  const calculate3=calculateMoney(93);
  const calculate4=calculateMoney(-130);

  console.log(calculate,calculate2,calculate3,calculate4);