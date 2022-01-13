
/*
Gameplan - 
Once game starts, being timer.

Object holding all the questions with correct or false answer

function taking quiz to next question


*/



var btnStartEl = document.querySelector('#start-btn');
var questionContainerEl = document.querySelector('#question-container')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')
// listed for button call

let shuffledQuestions, currentQuestionIndex
var questions;

btnStartEl.addEventListener('click', startGame)


// function for start game

function startGame() {
    console.log('Started');
    countdown();
    btnStartEl.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()   
};

// function to start next question

function setNextQuestion() {
 showQuestion(shuffledQuestions[currentQuestionIndex])
};

// show next question

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
};

function selectAnswer(e) {

};


/// timer function countdown from 61 seconds.
function countdown() {
    var seconds = 61;
    function tick() {
      var counter = document.getElementById("counter");
      seconds--;
      counter.innerHTML =
        "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else {
        document.getElementById("verifiBtn").innerHTML = `
            <div class="Btn" id="ResendBtn">
                <button type="submit">Resend</button>
            </div>
        `;
        document.getElementById("counter").innerHTML = "";
      }
    }
    tick();
  }
  

  var questions = [
      {
          question: "What is Javascript?",
          answers: [
              {text: "coding program", correct: true},
              {text: "happy times", correct: false},
              {text: "Not too sure", correct: false},
              {text: "Whats up buddy", correct: false},
          ]
      }
  ]