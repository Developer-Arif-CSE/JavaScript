function deleteInvalids(array) {
    
    if (!Array.isArray(array)) {
      return "Invalid input: Please provide an array.";
    }
  
    
    return array.filter(element => typeof element === 'number' && !isNaN(element));
  }


  const arr= deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]);
  const arr2= deleteInvalids(["1" , {num:2} , NaN ]);
  const arr3= deleteInvalids([ 1 , 2 , -3 ]);
  const arr4= deleteInvalids({num: [ 1 , 2 , 3 ]});
  

  console.log(arr,arr2,arr3,arr4);