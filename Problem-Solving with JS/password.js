function createPassword({ name, birthYear, siteName }) {
   
    if (!name || !birthYear || !siteName || typeof birthYear !== 'number' || birthYear < 1000 || birthYear > 9999) {
      return "invalid";
    }
  
    
    siteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
  
  
    return `${siteName}#${name}@${birthYear}`;
  }

  const pass=createPassword({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" });
  const pass2=createPassword({ name: "rahat", birthYear: 2002, siteName: "Facebook" });
  const pass3=createPassword({ name: "toky", birthYear: 200, siteName: "Facebook"});

  console.log(pass,pass2,pass3);