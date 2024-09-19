function layeredDiscountTotal(Quantity){
   
    const first100price=100;
    const second100price=90;
    const above200price=70;

    if(Quantity<=100){
        const total=Quantity*first100price;
        return total;
    }

    else if(Quantity<=200){

        const first100total=100*first100price;

        const remainingQuantity=Quantity-100;

        const remainingTotal=remainingQuantity*second100price;

        const total=first100total + remainingTotal;

        return total;

    }

    else{
        const first100total=100*first100price;

        const second100total=100*second100price;

        const remainingQuantity=Quantity-200;

        const remainingTotalTotal=remainingQuantity*above200price;

        const total = first100total + second100total + remainingTotalTotal;

        return total;
    }
}

const price=layeredDiscountTotal(100);
const price1=layeredDiscountTotal(150);
const price2=layeredDiscountTotal(200);
const price3=layeredDiscountTotal(250);
const price4=layeredDiscountTotal(300);


console.log(price,price1,price2,price3,price4);