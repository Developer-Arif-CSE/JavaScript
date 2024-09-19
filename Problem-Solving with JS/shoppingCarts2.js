const mobiles=[
    {name:'Samsung',Price:20000, Color:'Black', Quantity:1},
    {name:'Xiaomi', Price:25000, Color:'Black', Quantity:3},
    {name:'Oppo',   Price:30000, Color:'Black', Quantity:5},
    {name:'Vivo',   Price:40000, Color:'Black', Quantity:7},
    {name:'IPhone', Price:150000, Color:'Black', Quantity:9}
]

function cartTotal(mobiles) {
    let total = 0;
    for (const mobile of mobiles) {
        const thisProductPrice = mobile.Price * mobile.Quantity;
        total = total + thisProductPrice;
    }
    return total;
}

const totalPrice=cartTotal(mobiles);
console.log(totalPrice);