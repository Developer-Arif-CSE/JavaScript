// syntax: return (variable/ja output paite chai)
// alada variable e rekhe output dekha lage

function tenTimes(n){
    const result= n*10;
    return result;

}
 
const output=tenTimes(10);
console.log(" n er 10 times:",output);


const bigNumber= tenTimes(99);
console.log("output is:",bigNumber);



function varsity(v){
    const gpa= v*5+10;
    return gpa;
}



// variable e rekhe receive kore parameter diye pass kore tarpor kaj kore
const vrslt=varsity(5);
console.log("Gpa is:",vrslt);