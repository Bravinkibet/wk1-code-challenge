// Importing the prompt-sync library to get user input
const prompt = require("prompt-sync")({ sigint: true });

// Function to check the speed of a car and calculate demerit points
function checkSpeed() {
    // Speed limit
    const speedLimit = 70; 
    // 5km/s above the speed limit
    const kmPerDemeritPoint = 5; 
    // Max demerit points
    const maxDemeritPoints = 12; 
    //speed input from the user
    const speed = parseInt(prompt("Enter the speed of the car: "));
    if (speed <= speedLimit) {
        // If speed is less than or equal to 70
        console.log("Ok"); 
    } else if (speed > speedLimit){
        // Calculate demerit points for exceeding the speed limit
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints >= maxDemeritPoints) {
            // If demerit points exceed 12, the license is suspended
            console.log("License suspended"); 
        } else {
            // Otherwise, print the demerit points
            console.log(`Points: ${demeritPoints}`);
        } 
    }
}

// Call the checkSpeed function to start the program
checkSpeed();
