//net salary calculator
// Define tax rates brackets and rates
const TAX_RATES = [
    { lower: 0, upper: 24000, rate: 0.1 },
    { lower: 24001, upper: 40000, rate: 0.15 },
    { lower: 40001, upper: 60000, rate: 0.2 },
    { lower: 60001, upper: 80000, rate: 0.25 },
    { lower: 80001, upper: 100000, rate: 0.3 },
    { lower: 100001, upper: Infinity, rate: 0.35 }
];

// Define NHIF rates brackets and amounts
const NHIF_RATES = [
    { lower: 0, upper: 5999, amount: 150 },
    { lower: 6000, upper: 7999, amount: 300 },
    { lower: 8000, upper: 11999, amount: 400 },
    { lower: 12000, upper: 14999, amount: 500 },
    { lower: 15000, upper: 19999, amount: 600 },
    { lower: 20000, upper: 24999, amount: 750 },
    { lower: 25000, upper: 29999, amount: 850 },
    { lower: 30000, upper: 34999, amount: 900 },
    { lower: 35000, upper: 39999, amount: 950 },
    { lower: 40000, upper: 44999, amount: 1000 },
    { lower: 45000, upper: 49999, amount: 1100 },
    { lower: 50000, upper: 59999, amount: 1200 },
    { lower: 60000, upper: 69999, amount: 1300 },
    { lower: 70000, upper: 79999, amount: 1400 },
    { lower: 80000, upper: 89999, amount: 1500 },
    { lower: 90000, upper: 99999, amount: 1600 },
    { lower: 100000, upper: Infinity, amount: 1700 }
];

// Define NSSF contribution rates
const NSSF_RATE_EMPLOYEE = 0.06; // Employee contribution rate
const NSSF_RATE_EMPLOYER = 0.06; // Employer contribution rate

// Function to calculate tax based on basic salary
function calculateTax(basicSalary) {
    if (basicSalary >= 0 && basicSalary <= 24000) {
        return 0.1 * basicSalary;
    } else if (basicSalary > 24000 && basicSalary <= 40000) {
        return 0.15 * basicSalary;
    } else if (basicSalary > 40000 && basicSalary <= 60000) {
        return 0.2 * basicSalary;
    } else if (basicSalary > 60000 && basicSalary <= 80000) {
        return 0.25 * basicSalary;
    } else if (basicSalary > 80000 && basicSalary <= 100000) {
        return 0.3 * basicSalary;
    } else {
        return 0.35 * basicSalary;
    }
}

// Function to calculate NHIF based on basic salary
function calculateNHIF(basicSalary) {
    if (basicSalary >= 0 && basicSalary <= 5999) {
        return 150;
    } else if (basicSalary > 5999 && basicSalary <= 7999) {
        return 300;
    } else if (basicSalary > 7999 && basicSalary <= 11999) {
        return 400;
    } else if (basicSalary > 11999 && basicSalary <= 14999) {
        return 500;
    } else if (basicSalary > 14999 && basicSalary <= 19999) {
        return 600;
    } else if (basicSalary > 19999 && basicSalary <= 24999) {
        return 750;
    } else if (basicSalary > 24999 && basicSalary <= 29999) {
        return 850;
    } else if (basicSalary > 29999 && basicSalary <= 34999) {
        return 900;
    } else if (basicSalary > 34999 && basicSalary <= 39999) {
        return 950;
    } else if (basicSalary > 39999 && basicSalary <= 44999) {
        return 1000;
    } else if (basicSalary > 44999 && basicSalary <= 49999) {
        return 1100;
    } else if (basicSalary > 49999 && basicSalary <= 59999) {
        return 1200;
    } else if (basicSalary > 59999 && basicSalary <= 69999) {
        return 1300;
    } else if (basicSalary > 69999 && basicSalary <= 79999) {
        return 1400;
    } else if (basicSalary > 79999 && basicSalary <= 89999) {
        return 1500;
    } else if (basicSalary > 89999 && basicSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

// Function to calculate NSSF based on basic salary
function calculateNSSF(basicSalary) {
    const employeeContribution = NSSF_RATE_EMPLOYEE * basicSalary;
    const employerContribution = NSSF_RATE_EMPLOYER * basicSalary;
    return [employeeContribution, employerContribution];
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const tax = calculateTax(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const [nssfEmployee] = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const totalDeductions = tax + nhif + nssfEmployee;
    const netSalary = grossSalary - totalDeductions;
    return netSalary;
}


console.log("Net Salary:", netSalary);