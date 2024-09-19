function getMin(numbers){
    let min= numbers[0];
    for(const num of numbers){
        if(num<min){
            min=num;
        }
    }
    return min;
}

const heights=[65,66,78,98,75,52,63,22,24];
const min=getMin(heights);
console.log(min);