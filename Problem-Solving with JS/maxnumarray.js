function getMax(numbers){
    let max= numbers[0];
    for(const num of numbers){
        if(num>max){
            max=num;
        }
    }
    return max;
}

const heights=[65,66,78,98,75,52,63,22,24];
const max=getMax(heights);
console.log(max);