const mobile ={
    name:'Samsung',
    price:'25000',
    color:'black',
    camera:'25mp'
}

// upor niceh dekhabe
for (const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}
// array te dekhabe
const keys= Object.keys(mobile);
console.log(keys);

// pashapashi dekhabe
for(const key of keys)
{
    console.log(key, '|', mobile[key]);
}