function getMax(n1,n2){
    if(n1>n2){
        return n1;
    }
    else{
        return n2;
    }
}

const max1=getMax(56,66);
const max2=getMax(77,86);

const ultimateMax=getMax(max1,max2);

console.log("Max of fours:",ultimateMax);