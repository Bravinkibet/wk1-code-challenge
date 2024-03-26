# wk1-code-challenge
# Bravin-Kibet-Nyangusei
## 1.Student grade generator
This code is designed to calculate a student's grade based on their marks. It uses the prompt-sync package to interactively prompt the user for a mark and then calculates the corresponding grade. The grading system is as follows:

A grade for marks above 79.
B grade for marks between 60 and 79.
C grade for marks between 50 and 59.
D grade for marks between 40 and 49.
E grade for marks below 40.
The program also includes input validation to ensure that the entered mark is within the valid range (0-100) and is a number. If the input is invalid, it displays an error message. Otherwise, it calculates the grade and displays it.

## Setup
The setup for the student grade generator involves using the prompt-sync Node module to interactively prompt the user for input in a synchronous manner. This module is particularly useful for creating command-line applications that require user input without the complexity of asynchronous callbacks.

## 2.Speed Detector
This code is designed to check the speed of a car and calculate demerit points based on the speed exceeding a certain limit. The logic is as follows:

The speed limit is set to 70 km/h.
For every 5 km/h above the speed limit, a demerit point is added.
The maximum number of demerit points is 12.
The user is prompted to enter the speed of the car.
If the speed is less than or equal to the speed limit, the program outputs "Ok".
If the speed is above the speed limit, the program calculates the demerit points by subtracting the speed limit from the entered speed, dividing by 5 (to get the number of 5 km/h increments), and rounding down to the nearest whole number.
If the calculated demerit points exceed 12, the program outputs "License suspended".
Otherwise, it outputs the number of demerit points.

## Setup
This setup demonstrates a straightforward approach to creating a command-line application that interacts with the user to check the speed of a car and calculate demerit points based on the speed limit. The use of the prompt function for user input is a common pattern in Node.js applications for command-line interfaces, allowing for interactive and dynamic user experiences.

## 3.net salary calculator
The setup for the Net Salary Calculator is designed to calculate an individual's net salary, taking into account various deductions such as tax, NHIF (National Health Insurance Fund), and NSSF (National Social Security Fund). 
Here's a detailed breakdown of the setup:

Tax Rates and Brackets: The TAX_RATES array defines the tax rates applicable to different salary brackets. Each object in the array specifies a lower and upper limit for the salary bracket and the corresponding tax rate.
NHIF Rates and Brackets: The NHIF_RATES array defines the NHIF amounts applicable to different salary brackets. Each object specifies a lower and upper limit for the salary bracket and the corresponding NHIF amount.
NSSF Contribution Rates: The NSSF_RATE_EMPLOYEE and NSSF_RATE_EMPLOYER constants define the contribution rates for both the employee and employer to the NSSF.
Tax Calculation Function: The calculateTax function calculates the tax based on the basic salary. It uses a series of if and else if statements to determine the tax rate based on the salary bracket.
NHIF Calculation Function: The calculateNHIF function calculates the NHIF amount based on the basic salary. It uses a similar approach to the tax calculation function, determining the NHIF amount based on the salary bracket.
NSSF Calculation Function: The calculateNSSF function calculates both the employee and employer contributions to the NSSF based on the basic salary. It returns an array with the employee and employer contributions.
Net Salary Calculation Function: The calculateNetSalary function calculates the net salary by subtracting the total deductions (tax, NHIF, and NSSF) from the gross salary (basic salary + benefits). It uses the previously defined functions to calculate each component of the deductions.
Execution: The script ends with a console.log statement that attempts to log the netSalary variable. However, this variable is not defined in the provided code. The calculateNetSalary function should be called with appropriate arguments, and its return value should be stored in a variable before logging.

## setup
This setup demonstrates a comprehensive approach to calculating an individual's net salary, taking into account various deductions based on the salary brackets. It uses arrays and constants to define tax and NHIF rates, and functions to calculate each component of the deductions and the net salary.