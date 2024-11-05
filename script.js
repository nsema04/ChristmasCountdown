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
    "October 6: Keep working hard baby, we WILL be rich one day!",
    "October 7: It's gonna be an amazing week baby, I always believe in you!",
    "October 8: You are my favorite person, always and forever Miss Apple Pie!",
    "October 9: I can't wait to come to NWT with you, I think about it often :)",
    "October 10: Hey Hillary, are you today's date? Because you're a 10/10!",
    "October 11: I love how you brought me around the penisula, I had a fun float!",
    "October 12: I will always fill up your brita, my love. Whenever you need me to.",
    "October 13: You are gonna do so good in all of your classes, I know it!",
    "October 14: Remember to take care of yourself baby, I know how hard you work, remember to relax!",
    "October 15: HAPPY SEVEN MONTH ANNIVERSARY! I LOVE YOU SO SO MUCH POOKIE!!!",
    "October 16: Wow I really am dating the most beautiful girl in the world, it's a crazy feeling.",
    "October 17: Wow Halloween is getting close, this is a reminder to watch a scary movie!",
    "October 18: You mean the world to me, you are my best friend, I will cherish you forever",
    "October 19: My precious apple pie you helped give me the routine I always struggled to make for myself.",
    "October 20: I would give you a back scratch any time you asked me, baby.",
    "October 21: I can't believe it's almost November, almost 8 months!!!",
    "October 22: I bet you look so beautiful today Hillary, the most gorgeous in the world.",
    "October 23: The leaves have been falling lately and I am so in love with you.",
    "October 24: You always remind me that no matter what happens, everything will work out in the end",
    "October 25: Thank you for always being yourself, I will always love your positivty towards everything.",
    "October 26: I hope you know how incredibly special you are to me.",
    "October 27: Halloween is getting close, I hope you're feeling extra spooky lately Pookie Bear.",
    "October 28: YOU ARE MY FAVOURITE PERSON IN THE WHOLE WIDE WORLD HILLARY HUYNH I LOVE YOU",
    "October 29: If I could, I would code you absolutely anything you wanted in the world.",
    "October 30: Halloween is tommorrow, our first Halloween! So exciting!! I love you!",
    "October 31: BOO! Happy Halloween beautiful girl I love you sooooooo much, I can't wait to costume up!",
    "November 1: It's November! That means Christmas is getting closer! I love you and have a great Friday pookie!",
    "November 2: Today we are decorating the Christmas Tree! I hope you're feeling jolly my love!",
    "November 3: You are the most beautiful woman in the universe and I am the luckiest man in the universe :D",
    "November 4: Have I ever told you that I can't wait to marry you? I really can't wait I am so excited hehehehe",
    "November 5: I can't believe it's already November 5 time flies so fast, you probably look gorgeous today baby",
    "November 6: Happy hump day baby! You are the most talented woman in the universe and I hope you know it!",
    "November 7: I miss the Future concert so much, I hope we can go to another concert some time baby :)",
    "November 8: We should make soup, get cozy, and watch tv all day together some time. That sounds very relaxing.",
    "November 9: Happy Saturday pookie, remember to get some rest today! You are so perfect and I love you with every piece of my heart",
    "November 10: I will always be there by your side Baby, I am your biggest fan. I cant wait till we are rich!",
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

