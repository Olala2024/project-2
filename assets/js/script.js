const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Which Ukrainian city is known as the 'City of Lions'?",
        choice1:"Kyiv",
        choice2:"Lviv",
        choice3:"Odesa",
        choice4:"Kharkiv",
        answer: 2
    },
    {
        question: "What is the largest river in Ukraine?",
        choice1:"Dniester",
        choice2:"Dnieper",
        choice3:"Bug",
        choice4:"Tysa",
        answer: 2
    },
    {
        question: "What is the name of the Ukrainian national currency?",
        choice1:"Zloty",
        choice2:"Euro",
        choice3:"Hryvnia",
        choice4:"Kuna",
        answer: 3
    },
    {
        question: "Which UNESCO World Heritage site is located in the Carpathian Mountains of Ukraine?",
        choice1:"Saint Sophia Cathedral",
        choice2:"Struve Geodetic Arc",
        choice3:"Wooden Tserkvas of the Carpathian Region",
        choice4:"Chersonese",
        answer: 3
    },
    {
        question: "What is the name of the traditional Ukrainian musical instrument similar to a lute?",
        choice1:"Bandura",
        choice2:"Balalaika",
        choice3:"Mandolin",
        choice4:"Dulcimer",
        answer: 1
    },
    {
        question: "Which Ukrainian poet is considered the national poet of Ukraine and a major figure in Ukrainian literature?",
        choice1:"Lesya Ukrainka",
        choice2:"Ivan Franko",
        choice3:"Taras Shevchenko",
        choice4:"Mykhailo Kotsiubynsky",
        answer: 3
    },
    {
        question: "Who is the Ukrainian footballer who won the Ballon d'Or in 2004?",
        choice1:"Serhiy Rebrov",
        choice2:"Andriy Shevchenko",
        choice3:"Anatoliy Tymoshchuk",
        choice4:"Oleksandr Zinchenko",
        answer: 2
    },
    {
        question: "Which sea borders Ukraine to the south?",
        choice1:"Baltic Sea",
        choice2:"Black Sea",
        choice3:"Caspian Sea",
        choice4:"Mediterranean Sea",
        answer: 2
    },
    {
        question: "In which year did Ukraine declare its independence from the Soviet Union?",
        choice1:"1989",
        choice2:"1990",
        choice3:"1991",
        choice4:"1992",
        answer: 3
    },
    {
        question: "How many ambassadors has Ukraine's President Volodymyr Zelenskyy appointed for the government donation platform "United24"?",
        choice1:"10",
        choice2:"15",
        choice3:"28",
        choice4:"45",
        answer: 3
    }
]