const sentence= "I am learning web development";
console.log(sentence);

// letter gulan dekhar jonno ar ki
// for (const letter of sentence)
//     console.log(letter);

let reverse=" ";
for(const letter of sentence){
    reverse= letter + reverse;
}

console.log(reverse);