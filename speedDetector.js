//Speed Detector 
function checkSpeed(speed) {
    if (speed < 70) {
        return "ok";
    } else {
        let points = Math.ceil((speed - 70) / 5);
        if (points > 12) {
            return "License suspended";
        } else {
            return "Points: " + points;
        }
    }}
    console.log(speed);