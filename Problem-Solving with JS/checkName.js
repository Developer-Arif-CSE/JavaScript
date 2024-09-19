function checkName(name) {
   
    if (typeof name !== 'string') {
      return 'invalid';
    }
  
   
    name = name.toLowerCase();
  
    
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'w'];
    return vowels.some(vowel => name.endsWith(vowel)) ? 'Good Name' : 'Bad Name';
  }

  const result=checkName("Salman");
  const result2=checkName("RAFEE");
  const resul3t=checkName("Jhankar");
  const result3=checkName(199);
  const result4=checkName(["Rashed"]);

  console.log(result,result2,resul3t,result3,result4);