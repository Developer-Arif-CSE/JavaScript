const prices =[20000,16000,50000,100000,12000];

function getMin(numbers){
    let min=numbers[0];
    for(const num of numbers){
        if(num<min){
            min=num;
        }
    }
    return min;
}

const mobile=getMin(prices);
console.log(mobile);