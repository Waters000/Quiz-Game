

// /*
// Gameplan - 
// Once game starts, being timer.

// Object holding all the questions with correct or false answer

// function taking quiz to next question


// */

var questions = [
    {
        question: "1) What is Javascript?",
        answers: [
            "a) coding program",
            "b) foreing language",
            "c) fun new app",
            "d) a way to say hi in French",
        ],
        correct: "a) coding program"
    }, 
    {
        question: "2) What is an Object?",
        answers: [
            "a) A thing you can touch",
            "b) the only way to fly",
            "c) a way to tie data together",
            "d) anything and everything",
        ],
        correct: "c) a way to tie data together"
  },
  {
    question: "3) Ways to interact with Arrays",
    answers: [
        "a) Push, Pop, sizzle, insert",
        "b) Enter, fill, slice, jump",
        "c) Snap, Crackle, Pop, Insert",
        "d) Pop, Splice, Shift, Push",
    ],
    correct: "d) Pop, Splice, Shift, Push"
},
{
    question: "4) What's the index for Love in var arrayName [love, me, tender, love me]",
    answers: [
        "a) 1",
        "b) 2",
        "c) 3",
        "d) 0",
    ],
    correct: "d) 0"
},
{
    question: "5) What is Global Scope vs Local Scope",
    answers: [
        "a) Global scope is universal and local scope is in town",
        "b) Local scope is outside a function and global is inside a function",
        "c) Global Scop can be used in all functions, local scope is only inside a specific function.",
        "d) Go Global only, local scope never works.",
    ],
    correct: "c) Global Scop can be used in all functions, local scope is only inside a specific function."
},
{
    question: "6) health += 20 is the same as...",
    answers: [
        "a) health = health + 20",
        "b) variables can't be added to",
        "c) health + 20",
        "d) 20 = Health + 20",
    ],
    correct: "a) health = health + 20"
},
{
    question: "7) How to call first object in Array?",
    answers: [
        "a) objectName.0",
        "b) objectName(0)",
        "c) objectName[0]",
        "d) objectName..0",
    ],
    correct: "c) objectName[0]",
},
{
    question: "8) What's a recursive call?",
    answers: [
        "a) Cursvie but in reverse",
        "b) a function that calls itself",
        "c) no such thing",
        "d) any function that calls a variable",
    ],
    correct: "b) a function that calls itself",
},
{
    question: "9) How to write string concatenation",
    answers: [
        "a) 'message ' + variable + ' message ' ",
        "b) 'message, variable, message",
        "c) 'message += variable += message",
        "d) 'message = vairable = message",
    ],
    correct: "a) 'message ' + variable + ' message ' ",
},
{
    question: "10) How to grab user input from window",
    answers: [
        "a) var userInput = prompt ",
        "b) var userInput",
        "c) var userInput = prompt('whats your question')",
        "d) var userInput = ('whats your question')",
    ],
    correct: "c) var userInput = prompt('whats your question')",
},
]

// Move all ID elements to DOM

var timerEl = document.getElementById('timer');
var timeReaminingEl = document.getElementById('timeRemaining');
var timeOutEl = document.getElementById('timesOut');

var startDivEl = document.getElementById('start-div');
var startBtnEl = document.getElementById('start-btn');
var nextbtn = document.getElementById('nextbtn');


var questionHolderEl = document.getElementById('questionHolder')
var questionTitleEl = document.getElementById('questionTitle')
var answer1El = document.getElementById('answer1')
var answer2El = document.getElementById('answer2')
var answer3El = document.getElementById('answer3')
var answer4El = document.getElementById('answer4')
var answerHolderEl = document.getElementById('answerHolder')
var answerEl = document.getElementById('answer')
var restart = document.getElementById('restart')

var nextbtn = document.getElementById('nextbtn')
var scoreHolderEl = document.getElementById('scoreHolder')
var nameInput = document.getElementById('nameInput')

var finalScoreEl = document.getElementById('finalScore')
var submitNameBtn = document.getElementById('submitNameBtn')

var viewHighScore = document.getElementById('viewHighScore')
var listOfHighScores = document.getElementById('listOfHighScores')
var highScoreContainerEl = document.getElementById('highScoreContainer')
var back = document.getElementById('back')
var submitNameBtn = document.getElementById('submitNameBtn')

var mainContainerEl = document.getElementById('main-container')
var mainClass = document.getElementById('main-class')






// variables for functions

var correctAnswers = 0;
var questionNumber = 0;
var scoreResult;
var storeHighScores;

var totalTime = 61;
function newQuiz() {
 questionNumber = 0;
 totalTime = 60;
 timeReaminingEl.textContent = totalTime;
 nameInput.textContent = "";


 startDivEl.style.display = "none";
 questionHolderEl.style.display = "block";
 timerEl.style.display = "block";
 timeOutEl.style.display = "none";

    var startTimer = setInterval(function(){
       totalTime--;
       timeReaminingEl.textContent = totalTime;
       if (totalTime <= 0) {
           clearInterval(startTimer);
           if(questionNumber < questions.length - 1) {
               gameOver();
           }
       } 
    }, 1000);

    showQuiz();
 
};

function showQuiz() {
    questionTitleEl.textContent = questions[questionNumber].question
    answer1El.textContent = questions[questionNumber].answers[0];
    answer2El.textContent = questions[questionNumber].answers[1];
    answer3El.textContent = questions[questionNumber].answers[2];
    answer4El.textContent = questions[questionNumber].answers[3];

};

function checkAnswer(correct) {
    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerEl.style.display = "block";
    

    if (questions[questionNumber].correct === questions[questionNumber].answers[correct]) {
        /// correct answer add 10 points
        correctAnswers += 10;
        console.log(correctAnswers);
        answerEl.textContent = "Correct";

    } else {
        //wrong answer, deduct 10 seconds
     totalTime -=10;
    timeReaminingEl.textContent = totalTime;
    answerEl.textContent = "Wrong answer, The correct answer was " + questions[questionNumber].correct;
    }

   
   

    questionNumber++;
    
    // repeat with the next question
    if (questionNumber < questions.length) {
        showQuiz();
    } else {
        // if no more question, run game over
        gameOver();
    }
    
}


function choose1() {checkAnswer(0);}
function choose2() {checkAnswer(1);}
function choose3() {checkAnswer(2);}
function choose4() {checkAnswer(3);}

// game over function
function gameOver() {
    scoreHolderEl.style.display = "block";
    questionHolderEl.style.display = "none";
    startDivEl.style.display = "none";
    questionHolderEl.style.display = "none";
    timerEl.style.display = "none";
    timeOutEl.style.display = "block";

    // show score
    finalScoreEl.textContent = correctAnswers;

};

/// add name and store high score in local storage
function storeHighScores(event) {
    event.preventDefault();

    // make sure not empty
    if (nameInput.value === "") {
        alert("Please add name to save score");
        console.log(nameInput.value)
        return;
    }
    startDivEl.style.display = "none";
    timerEl.style.display = "none";
    timeOutEl.style.display = "none";
    highScoreContainerEl.style.display = "none";
    scoreHolderEl.style.display = "block";
    

    var savedHighScores = localStorage.getItem("High Scores");
    var scoresArray;
    // show the high scores
    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }
    var userScore = {
        name: nameInput.value,
        score: finalScore.textContent
    }

    console.log(userScore);
    scoresArray.push(userScore);
    // add the high scores

    // stringify array in order to store in local storage
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);

    // show current highscores
    showHighScores();

};

/// show the high scores
var i =0;
function showHighScores() {
    startDivEl.style.display = "none";
    timerEl.style.display = "none";
    questionHolderEl.style.display = "none";
    timeOutEl.style.display = "none";
    scoreHolderEl.style.display = "none";
    highScoreContainerEl.style.display = "block";
    
    



var savedHighScores = localStorage.getItem("high scores");

if (savedHighScores === null) {
    return;
}
console.log(savedHighScores);

var storedHighScores = JSON.parse(savedHighScores);

for (; i < storedHighScores.length; i++) {
    var eachNewHighScore = document.createElement("p");
    eachNewHighScore.innerHTML = storedHighScores[i].name + ": " + storedHighScores[i].score;
    listOfHighScores.appendChild(eachNewHighScore);
}


}

// Event listeners


startBtnEl.addEventListener("click", newQuiz);
answer1El.addEventListener("click", choose1);
answer2El.addEventListener("click", choose2);
answer3El.addEventListener("click", choose3);
answer4El.addEventListener("click", choose4);






submitNameBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
    
});

submitNameBtn.addEventListener("click", function() {
    startDivEl.style.display = "none";
    questionHolderEl.style.display = "none";
    timeOutEl.style.display = "none";
    viewHighScore.style.display = "block";
    scoreHolderEl.style.display = "none";

});

goBackBtn.addEventListener("click", function() {
    location.reload()
    
});

// goBackBtn.addEventListener("click", function() {
//     scoreHolderEl.style.display = "none";
//     highScoreContainerEl.style.display = "none";
// });

