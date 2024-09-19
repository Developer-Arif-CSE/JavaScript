function isLeapYear(year){
    if (year%4==0)
    {
        return true;
    }
    else{
        return false;
    }
}

const lipi=isLeapYear(2024);
console.log(lipi);