function oddAverage(numbers){
    const odds=[];
    for(const number of numbers){
        if(number%2==1){
            odds.push(number);
        }
    }
    let sum=0;
    for(const number of odds){
        sum=sum+number;
    }

    console.log(sum);
    

    const count=odds.length;
    const avg=sum/count;

    return avg;
}

const numbers=[1,3,5,7,8,9,10,1,2,1,4,16];
const avg=oddAverage(numbers);
console.log(avg);