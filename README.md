# wk1-code-challenge
# Bravin-Kibet-Nyangusei
## student grade generator
The provided code snippet is a simple JavaScript program designed to calculate a student's grade based on their marks. It uses the prompt-sync package to interactively prompt the user for a mark and then calculates the corresponding grade. The grading system is as follows:

A grade for marks above 79.
B grade for marks between 60 and 79.
C grade for marks between 50 and 59.
D grade for marks between 40 and 49.
E grade for marks below 40.
The program also includes input validation to ensure that the entered mark is within the valid range (0-100) and is a number. If the input is invalid, it displays an error message. Otherwise, it calculates the grade and displays it.



## Speed Detector
The provided code snippet is designed to check the speed of a car and calculate demerit points based on the speed exceeding a certain limit. The logic is as follows:

The speed limit is set to 70 km/h.
For every 5 km/h above the speed limit, a demerit point is added.
The maximum number of demerit points is 12.
The user is prompted to enter the speed of the car.
If the speed is less than or equal to the speed limit, the program outputs "Ok".
If the speed is above the speed limit, the program calculates the demerit points by subtracting the speed limit from the entered speed, dividing by 5 (to get the number of 5 km/h increments), and rounding down to the nearest whole number.
If the calculated demerit points exceed 12, the program outputs "License suspended".
Otherwise, it outputs the number of demerit points.

## net salary calculator
The provided code snippet is designed to calculate an individual's net salary by taking into account various deductions such as tax, NHIF (National Health Insurance Fund), and NSSF (National Social Security Fund). The code defines tax rates, NHIF rates, and NSSF contribution rates, and then uses these to calculate the net salary based on the basic salary and any additional benefits.

However, there are a few issues and improvements that can be made to the code:

Tax Calculation Function: The calculateTax function uses hardcoded conditions to determine the tax rate. This approach is not efficient and does not utilize the TAX_RATES array defined at the beginning. Instead, it should iterate over the TAX_RATES array to find the correct tax rate based on the basic salary.
NHIF Calculation Function: Similar to the tax calculation, the calculateNHIF function also uses hardcoded conditions. It should iterate over the NHIF_RATES array to find the correct NHIF amount based on the basic salary.
NSSF Calculation Function: This function correctly calculates both the employee and employer contributions based on the basic salary. However, it returns an array, which might not be the most intuitive way to handle these values. It might be better to return an object with clear names for each contribution.
Net Salary Calculation Function: This function correctly calculates the net salary by subtracting the total deductions (tax, NHIF, and NSSF) from the gross salary (basic salary + benefits). However, it does not account for the benefits in the calculation of the gross salary. The gross salary should include both the basic salary and the benefits.
Console Log Statement: The console.log statement at the end attempts to log the netSalary variable, but this variable is not defined in the provided code. The calculateNetSalary function should be called with appropriate arguments, and its return value should be stored in a variable before logging.