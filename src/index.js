const messages = [
    "Life is good.",
    "Enjoy life.",
    "Have a great one!",
    "It always seems impossible until it is done.",
    "The only time you fail is when you fall down and stay down",
    "Positive anything is better than negative nothing.",
    "It makes a big difference in your life when you stay positive.",
    "If opportunity doesn't knock, build a door.",
    "You are never too old to set another goal or dream a new dream.",
    "Every day may not be good... but there's something good in every day.",
    "Hard work keeps the wrinkles out of the mind and spirit.",
    "The difference between ordinary and extraordinary is that little extra.",
    "Wherever you go, no matter what the weather, always bring your own sunshine.",
    "Happiness is the only thing that multiplies when you share it."
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };
