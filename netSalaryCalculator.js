//prompt
const prompt = require("prompt-sync")({ sigint: true });
//calculate net salary
function calculateNetSalary() {
    // Gets basic salary from the user
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits: "));
    // Tax rates
    const taxRate = 0.3;
    // NHIF rates
    const nhifRates = 0.025;
    // NSSF rates
    const nssfRates = 0.06;
    // Deductions and the gross salary
    const nhifDeduction = basicSalary * nhifRates;
    const payee = basicSalary * taxRate;
    const nssfDeduction = basicSalary * nssfRates;
    const grossSalary = basicSalary + benefits;
    // Net salary
    const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);
    // Display the results
    console.log(`Payee (Tax): ${payee.toFixed(0)}`);
    console.log(`NHIF Deductions: ${nhifDeduction.toFixed(0)}`);
    console.log(`NSSF Deductions: ${nssfDeduction.toFixed(0)}`);
    console.log(`Gross Salary: ${grossSalary.toFixed(0)}`);
    console.log(`Net Salary: ${netSalary.toFixed(0)}`);
}

calculateNetSalary();