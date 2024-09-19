function sumOfEvenNumbers(numbers){
    let sum=0;
        for(const number of numbers){
            if(number%2==0){
                sum= sum+number;
            }
        }
        return sum;
}

const numbs=[1,2,3,4,5,6];
const sum=sumOfEvenNumbers(numbs);
console.log(sum);