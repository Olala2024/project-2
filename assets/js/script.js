/**
 * Event listener for the DOMContentLoaded event.
 * This ensures that the script runs only after the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
  // Check if the results page is being rendered by checking the ID of the results element
  if (document.getElementById("results")) {
    // Call the function to display results
    displayResults();
  }
});

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let correctAnswers = 0;

let questions = [
  {
    question: "Which Ukrainian city is known as the 'City of Lions'?",
    choice1: "Kyiv",
    choice2: "Lviv",
    choice3: "Odesa",
    choice4: "Kharkiv",
    answer: 2,
  },
  {
    question: "What is the largest river in Ukraine?",
    choice1: "Dniester",
    choice2: "Dnieper",
    choice3: "Bug",
    choice4: "Tysa",
    answer: 2,
  },
  {
    question: "What is the name of the Ukrainian national currency?",
    choice1: "Zloty",
    choice2: "Euro",
    choice3: "Hryvnia",
    choice4: "Kuna",
    answer: 3,
  },
  {
    question:
      "Which UNESCO World Heritage site is located in the Carpathian Mountains of Ukraine?",
    choice1: "Saint Sophia Cathedral",
    choice2: "Struve Geodetic Arc",
    choice3: "Wooden Tserkvas of the Carpathian Region",
    choice4: "Chersonese",
    answer: 3,
  },
  {
    question:
      "What is the name of the traditional Ukrainian musical instrument similar to a lute?",
    choice1: "Bandura",
    choice2: "Balalaika",
    choice3: "Mandolin",
    choice4: "Dulcimer",
    answer: 1,
  },
  {
    question:
      "Which Ukrainian poet is considered the national poet of Ukraine and a major figure in Ukrainian literature?",
    choice1: "Lesya Ukrainka",
    choice2: "Ivan Franko",
    choice3: "Taras Shevchenko",
    choice4: "Mykhailo Kotsiubynsky",
    answer: 3,
  },
  {
    question:
      "Who is the Ukrainian footballer who won the Ballon d'Or in 2004?",
    choice1: "Serhiy Rebrov",
    choice2: "Andriy Shevchenko",
    choice3: "Anatoliy Tymoshchuk",
    choice4: "Oleksandr Zinchenko",
    answer: 2,
  },
  {
    question: "Which sea borders Ukraine to the south?",
    choice1: "Baltic Sea",
    choice2: "Black Sea",
    choice3: "Caspian Sea",
    choice4: "Mediterranean Sea",
    answer: 2,
  },
  {
    question:
      "In which year did Ukraine declare its independence from the Soviet Union?",
    choice1: "1989",
    choice2: "1990",
    choice3: "1991",
    choice4: "1992",
    answer: 3,
  },
  {
    question:
      "How many ambassadors does President Volodymyr Zelenskyy's government donation platform 'United24' have?",
    choice1: "10",
    choice2: "15",
    choice3: "28",
    choice4: "45",
    answer: 3,
  },
];

const MAX_QUESTIONS = questions.length;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    // Store the correct answers count in local storage
    localStorage.setItem("correctAnswers", correctAnswers);
    //Go to result page
    return window.location.assign("result.html");
  }
  questionCounter++;
  if (questionCounterText) {
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion[`choice${number}`];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      correctAnswers++;
      console.log(correctAnswers);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 500);
  });
});

function displayResults() {
  // Retrieve the correct answers count from local storage
  const correctAnswers = parseInt(localStorage.getItem("correctAnswers"), 10);

  // Display the correct answers count
  const correctAnswer = document.getElementById("resultsScore");
  if (correctAnswer) {
    correctAnswer.innerText = correctAnswers;
  }

  // Determine the message to display based on the correct answer count
  const resultsTitle = document.getElementById("resultsTitle");
  const resultsText = document.getElementById("resultsText");
  let title = "";
  let text = "";

  if (correctAnswers <= 3) {
    title = "Better Luck Next Time!";
    text =
      "It looks like Ukraine might still be a bit of a mystery to you. Don't worry, though—there's always room to learn more! Why not take some time to explore more about this fascinating country? We're sure you'll do better next time!";
  } else if (correctAnswers <= 6) {
    title = "Not Bad!";
    text =
      "You have a decent grasp of some interesting facts about Ukraine. With a little more knowledge, you'll be an expert in no time. Keep exploring and learning about Ukraine's rich history, culture, and achievements!";
  } else if (correctAnswers <= 9) {
    title = "Great Job!";
    text =
      "Impressive! You really know a lot about Ukraine. Your knowledge is commendable, and it's clear you've taken an interest in the country's history, culture, and notable figures. Keep up the great work!";
  } else if (correctAnswers == 10) {
    title = "Excellent!";
    text =
      "Congratulations! You have an excellent knowledge of Ukraine. Your understanding of the country's achievements, culture, and history is outstanding. You're a true Ukraine expert!";
  }

  if (resultsTitle && resultsText) {
    resultsTitle.innerText = title;
    resultsText.innerText = text;
  }
}

startGame();
