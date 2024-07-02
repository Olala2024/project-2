function displayResults() {
// Retrieve the correct answers count from local storage
const correctAnswers = parseInt(localStorage.getItem('correctAnswers'), 10);
// Display the correct answers count
document.getElementById('resultScore').innerText = correctAnswers;

// Determine the message to display based on the correct answer count
const resultsTitle = document.getElementById('resultsTitle');
const resultsText = document.getElementById('resultsText');
let title = "";
let text = "";

if (correctAnswers <= 3) {
    title = "Better Luck Next Time!";
    text = "It looks like Ukraine might still be a bit of a mystery to you. Don't worry, though—there's always room to learn more! Why not take some time to explore more about this fascinating country? We're sure you'll do better next time!";
} else if (correctAnswers <= 6) {
    title = "Not Bad!";
    text = "You have a decent grasp of some interesting facts about Ukraine. With a little more knowledge, you'll be an expert in no time. Keep exploring and learning about Ukraine's rich history, culture, and achievements!";
} else if (correctAnswers <= 9) {
    title = "Great Job!";
                text = "Impressive! You really know a lot about Ukraine. Your knowledge is commendable, and it's clear you've taken an interest in the country's history, culture, and notable figures. Keep up the great work!";
} else if (correctAnswers == 10) {
    title = "Excellent!";
                text = "Congratulations! You have an excellent knowledge of Ukraine. Your understanding of the country's achievements, culture, and history is outstanding. You're a true Ukraine expert!";
}

resultsTitle.innerText = title;
resultsText.innerText = text;
}

window.onload = displayResults;