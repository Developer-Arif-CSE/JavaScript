function findAveragePhonePrice(phones) {
    let total = 0;
    for (let i = 0; i < phones.length; i++) {
      total += phones[i].price;
    }
    const averagePrice = total / phones.length;
    return averagePrice;
  }
  
  const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
  ];
  
  const averagePrice = findAveragePhonePrice(phones);
  console.log("Average phone price:", averagePrice);