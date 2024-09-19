const price=2000;

if (price>= 5000)
{
    const disCount=price * 10/100;
    const payAmmount= price- disCount;
    console.log(payAmmount)
}
else if (price >2500)
{
    const disCount=price * 5/100;
    const payAmmount= price- disCount;
    console.log(payAmmount)
}
else {
    console.log(price)
}