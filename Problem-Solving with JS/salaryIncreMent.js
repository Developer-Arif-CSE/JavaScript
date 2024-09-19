function calculateTotalSalary(employees) {
    let totalSalary = 0;
  
    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];
      const currentSalary = employee.starting + (employee.increment * employee.experience);
      const monthlySalary = currentSalary / 12;
      totalSalary += monthlySalary;
    }
  
    return totalSalary;
  }
  
  const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
  ];
  
  const totalSalary = calculateTotalSalary(employees);
  console.log("Total salary: ", totalSalary);