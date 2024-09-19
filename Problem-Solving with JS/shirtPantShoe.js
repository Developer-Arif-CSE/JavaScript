function totalCost(sQ,pQ,shQ){
    const sP=500;
    const pP=300;
    const shP=900;

    const stP= sP * sQ;
    const ptP= pP * pQ;
    const shtP=shP*shQ;

    const total= stP + ptP + shtP;
    return total;
}

const total=totalCost(0,0,3);
console.log(total);