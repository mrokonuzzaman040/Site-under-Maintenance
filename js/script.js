// Set the countdown time (e.g., 10 minutes from now)
let countdownTime = new Date(new Date().getTime() + 10 * 60000).getTime();

// Update the countdown every 1 second
let countdownFunction = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the countdown time
    let distance = countdownTime - now;

    // Time calculations for minutes and seconds
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in elements with id
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".timer").innerHTML = "The site is live!";
    }
}, 1000);
