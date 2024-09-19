const biriyaniKhor=['abul','kanul','jabul','abul','jabul','kanul','baharul','jaharrul','kaharul'];

const numbers=[1,5,61,5,87,7,5,81,61];

function noDupliCate(array){
    const unique=[];
       for (const items of array){
           if(unique.includes(items==false)){
            unique.push(items);
           }
       }
       return unique;  
}

const uniqueArray=noDupliCate(biriyaniKhor);
console.log(uniqueArray);