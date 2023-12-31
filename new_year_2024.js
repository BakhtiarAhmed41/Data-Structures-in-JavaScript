// Goodbye 2023 messages
const goodbyeMessages = [
    "Farewell 2023!",
    "Goodbye, and thanks for the memories, 2023!",
    "Adios 2023, it's been a blast!"
];

// Welcome 2024 messages
const welcomeMessages = [
    "Hello 2024! Let's make it amazing!",
    "Welcome 2024, may it bring prosperity!",
    "Here's to a fantastic 2024 ahead!"
];

// Randomly select messages from each array
const randomGoodbye = goodbyeMessages[Math.floor(Math.random() * goodbyeMessages.length)];
const randomWelcome = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

// Display the messages
console.log(randomGoodbye);
console.log(randomWelcome);
