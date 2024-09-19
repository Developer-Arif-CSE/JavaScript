var isGraduated=true;
var salary=70000;
var car=1;

if (isGraduated==true && salary>50000){
    console.log("hami biya korbo");
}

if ((isGraduated==true && salary>50000) || car>=1){
    console.log("patrri ready ache");
}

if (isGraduated==true || (salary>50000 && car>=1)){
    console.log("hami raji achi");
}