const myString = "banana";
const letterToCount = "a";
let count = 0;
for (let i = 0; i < myString.length; i++) {
    if (myString[i] === letterToCount) 
        {
            count++;
        }
}

console.log(count);
    