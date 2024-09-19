function isLeapYear(year){
    if (year % 100 !==0 && year % 4 ==0){
        return true;
    }
    else if (year % 100 ===0 && year % 400==0){
        return true;
    }
    else{
        return false
    }
}

const isLeap1= isLeapYear(2020);
const isLeap2= isLeapYear(2021);
const isLeap3= isLeapYear(2022);
const isLeap4= isLeapYear(2023);
const isLeap5= isLeapYear(20224);

console.log(isLeap1,isLeap2,isLeap3,isLeap4,isLeap5);