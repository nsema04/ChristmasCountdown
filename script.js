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
    "November 11: You are my smarty pants, I am always astounded by how smart you are Hillary. You are going places!",
    "November 12: I am so in love with you, you occupy my mind every second of every day Hillary<3",
    "November 13: You are so gorgeous I can't even begin to describe how beautiful you are. I am obsessed with you.",
    "November 14: I love you with all of my heart Hill, you are my bestest friend forever!",
    "November 15: Thank you for always being so understanding and supportive, you are the most caring girl I know :)",
    "November 16: Happy Weekend! Reading week is almost over and it's time to grind to Christmas! We can do it!",
    "November 17: Have I ever told you that you are hands-down the most beautiful girl in the entire world?",
    "November 18: I think you're the most talented crafter in the universe!",
    "November 19: It is gonna be a great Tuesday baby, I know it! I love you!",
    "November 20: Happy hump day! I hope I can hump you today!",
    "November 21: You are perfection. I am so lucky. YOU ARE SO BEAUTIFUL!",
    "November 22: It's Friday!! We made it through the week! Good job baby!!!!!",
    "November 23: It's Saturday! You worked so hard this week and I am so proud of you my beautiful angel, keep grinding so hard!",
    "November 24: Babygirl you make me the happiest man in the world, I feel so thankful that you are mine forever :)",
    "November 25: You have a sparkle in your eyes like no one else, you are so special my sweet angel❤️",
    "November 26: I'd let you braid my hair any day baby, you make me feel so safe and taken care of!",
    "November 27: It's almost December, I can't wait to eat our advent calender chocolate together every day Baby!",
    "November 28: You are the most gorgeous, beautiful, angelic, jaw-dropping woman I have ever seen in my life, and I am so in love with you!",
    "November 29: Happy Friday beautiful, we have one more week of semester one left! You have worked so hard I am so proud of you always❤️",
    "November 30: It's Elf night! I hope you're feeling jolly today baby!!! I can't wait for our night❤️",
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

// Call the countdown function every second
setInterval(countdownToChristmas, 1000);

// Display the daily message once when the page loads
showDailyMessage();
