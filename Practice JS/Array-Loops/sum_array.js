function sumOfArray(numbers){
    let sum=0;
    for(const number of numbers)
    {
        sum= sum + number;
    }
    return sum;
}

const numbs=[1,2,3,4,5];
const sum=sumOfArray(numbs);
console.log(sum);