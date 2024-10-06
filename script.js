// Countdown Timer
function countdownToChristmas() {
    const christmasDate = new Date('December 25, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = christmasDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (difference < 0) {
        document.getElementById('countdown').innerHTML = "Merry Christmas!";
    }
}

// Messages for each day (starting from October 5, 2024)
const dailyMessages = [
    "October 5: I am so in love with you, Hillary Huynh!",
    "October 6: Keep working hard baby, we WILL rich one day!",
    "October 7: It's gonna be an amazing week baby, I always believe in you!",
    "October 8: You are my favorite person, always and forever Miss Apple Pie!",
    "October 9: I can't wait to come to NWT with you, I think about it often :)",
    "October 10: I am the luckiest man in the world to be with Hillary Huynh",
    "October 11: I love how you brought me around the penisula, I had a fun float!",
    "October 12: I will always fill up your brita, my love. Whenever you need me to.",
    "December 24: Can’t wait to see your beautiful smile tomorrow!",
    "December 25: Merry Christmas! You're my most wonderful gift!"
];

// Function to display the daily message
function showDailyMessage() {
    const today = new Date();
    const startDate = new Date('October 5, 2024');
    const dayDifference = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    if (dailyMessages[dayDifference]) {
        document.getElementById('daily-message').innerHTML = dailyMessages[dayDifference];
    } else {
        document.getElementById('daily-message').innerHTML = "Have a wonderful day!";
    }
}

// Call the countdown and message functions
setInterval(countdownToChristmas, 1000);
showDailyMessage();
