const goodbyeMessages = [
    "Farewell 2023!",
    "Goodbye, and thanks for the memories, 2023!",
    "Adios 2023, it's been a blast!"
];

const welcomeMessages = [
    "Hello 2024! Let's make it amazing!",
    "Welcome 2024, may it bring prosperity!",
    "Here's to a fantastic 2024 ahead!"
];

const randomGoodbye = goodbyeMessages[Math.floor(Math.random() * goodbyeMessages.length)];
const randomWelcome = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];


console.log(randomGoodbye);
console.log(randomWelcome);
