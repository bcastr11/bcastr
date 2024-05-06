
// Tracks of the current day and time
function trackDayAndTime() {
    // Get the current date and time
    const currentDate = new Date();
    // Log the current date and time to the console
    console.log("Current date and time:", currentDate);
}

// Send an alert 
function showAlert() {
    alert("This is an alert!");
}

// Use a Math method
function useMathMethod() {
    const randomNumber = Math.random();
    console.log("Random number:", randomNumber);
}

// Delay one command or run a command at a specified interval
function delayCommand() {
    
    setTimeout(function() {
        console.log("Delayed command executed after 3 seconds.");
    }, 3000);
}

// Convert between a number and a text
function convertNumberToText() {
    const number = 123;
    const text = number.toString();
    console.log("Number converted to text:", text);
}

// Include a countdown function
function countdown() {
    // Set the date and time for countdown
    const countDownDate = new Date("May 7, 2024 00:00:00").getTime();

    // Update the countdown every 1 second
    const x = setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown in the console
        console.log("Countdown: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(x);
            console.log("Countdown finished!");
        }
    }, 1000);
}
