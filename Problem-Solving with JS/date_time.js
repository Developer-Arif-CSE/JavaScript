const today = new Date();
const date= new Date('2062-10-09');
console.log(date);


console.log(date.getMonth);
console.log(date.getDay);
console.log(date.getFullYear);
console.log(date.getTime);
console.log(date.getUTCDate);


const speceficiDate= new Date('2091,2,26');
console.log(speceficiDate);
speceficiDate.setMonth(10);
console.log(speceficiDate);
console.log(speceficiDate.toLocaleString('en-GB'));