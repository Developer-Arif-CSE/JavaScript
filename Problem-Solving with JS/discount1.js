function disCountPrice(Quantity){
    if(Quantity<=100){
        const total=Quantity*100;
        return total;
    }
    else if(Quantity<=200){
        const total=Quantity*90;
        return total;
    }
    else{
        const total=Quantity*70;
        return total;
    }
}

const total=disCountPrice(10);
const total1=disCountPrice(100);
const total2=disCountPrice(200);
const total3=disCountPrice(300);
const total4=disCountPrice(5);

console.log(total,total1,total2,total3,total4);