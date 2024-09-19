function evenNumbersOnly(numbers){
   let evens=[];
   for( const number of numbers){
    if(number%2==0){
        evens.push(number);
    }
   }
   return evens;
}

const numbs=[5,8,91,24,6];
const evens=evenNumbersOnly(numbs);
console.log("Even Numbers are:",evens);