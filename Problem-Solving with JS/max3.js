function max3(n1,n2,n3){
    if(n1>n2 && n1>n3){
        return n1;
    }
    else if( n2>n1 && n2>n3){
        return n2;
    }
    else{
        return n3;
    }
}

const max=max3(3,4,5);
console.log(max);