function add(n1,n2){
    
        return n1 + n2;
    
}
function sub(n1,n2){
    
        return n1 - n2;
    
}
function mult(n1,n2){
   
        return n1 * n2;
    
}
function div(n1,n2){
    
        return n1 / n2;
   
}

function calculator(a,b,operation){
    if(operation=='add'){
        return add(a,b);
    }
    else if(operation=='sub'){
        return sub(a,b);
    }
    else if (operation=='mult'){
        return mult(a,b);
    }
    else if(operation=='div'){
        return div(a,b);
    }
    else{
        return "only 'add' , 'sub', 'mult','div' are allowred";
    }
}

const result=calculator(5,7,'add');
console.log(result);

