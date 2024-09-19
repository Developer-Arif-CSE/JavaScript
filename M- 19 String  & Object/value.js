const person={
    name:"arif",
    age:24,
    profession:"developer",
    salary:25000,
    married:true
}

console.log(person);


// value change
person.salary=63000;
person['age']=30;

console.log(person);


const keyName='profession';
console.log([keyName]);

// value change
const propName='profession';
person [propName]='devops';
console.log(person);