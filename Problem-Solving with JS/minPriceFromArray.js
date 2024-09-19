const mobile=[
    {name:'Samsung',Price:20000, Color:'Black', Quantity:1},
    {name:'Xiaomi',Price:25000, Color:'Black', Quantity:1},
    {name:'Oppo',Price:30000, Color:'Black', Quantity:1},
    {name:'Vivo',Price:40000, Color:'Black', Quantity:1},
    {name:'IPhone',Price:150000, Color:'Black', Quantity:1}
]

function getCheapestPhone(phones){
    let min=phones[0];
      for(const phone of phones){
        if(phone.Price < min.Price){
            min=phones;
        }
      }
      return min;
}

const cheap=getCheapestPhone(mobile);
console.log(cheap);