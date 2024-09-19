function calculateElectronicsBudget(laptops, tablets, mobiles) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
  
    const totalLaptopCost = laptops * laptopPrice;
    const totalTabletCost = tablets * tabletPrice;
    const totalMobileCost = mobiles * mobilePrice;
  
    const totalBudget = totalLaptopCost + totalTabletCost + totalMobileCost;
  
    return totalBudget;
  }
  
  
  const laptopsNeeded = 2;
  const tabletsNeeded = 3;
  const mobilesNeeded = 5;
  
  const totalBudget = calculateElectronicsBudget(laptopsNeeded, tabletsNeeded, mobilesNeeded);
  console.log("Total budget required: ", totalBudget, "TK");