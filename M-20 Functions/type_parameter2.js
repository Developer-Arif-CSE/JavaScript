function doubleOnTripple(number,doDubble){

    if(doDubble==true){
        const result= number*2;
          return result;
    }
    else{
        const result=number+2;
        return result;
    }
}

console.log(doubleOnTripple(5,true));
console.log(doubleOnTripple(5,false));