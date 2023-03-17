const StrtBtn = document.getElementById('start-btn')
const nxtBtn = document.getElementById('next-btn')
const questionsContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerBtnEl = document.getElementById('answer-buttons')

let randomQuestions, currentQuestionIndex

StrtBtn.addEventListener('click', startQuiz)
nxtBtn.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startQuiz() {
  StrtBtn.classList.add('hide')
  randomQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionsContainerEl.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetQuiz()
  revealQuestion(randomQuestions[currentQuestionIndex])
}

function revealQuestion(question) {
  questionEl.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerBtnEl.appendChild(button)
  })
}

function resetQuiz() {
  clearStatusClass(document.body)
  nxtBtn.classList.add('hide')
  while (answerBtnEl.firstChild) {
    answerBtnEl.removeChild(answerBtnEl.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerBtnEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (randomQuestions.length > currentQuestionIndex + 1) {
    nxtBtn.classList.remove('hide')
  } else {
    StrtBtn.innerText = 'Restart'
    StrtBtn.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      { text: '<script>', correct: true },
      { text: '<js>', correct: false }
    ]
  },
  {
    question: 'Which operator is used to assign a value to a variable?',
    answers: [
      { text: 'ver', correct: false },
      { text: 'var', correct: true },
      { text: '*', correct: false },
      { text: '-', correct: false }
    ]
  },
  {
    question: 'How do you create a function in JavaScript?',
    answers: [
      { text: 'function myFunction()', correct: true },
      { text: 'function = myFunction()', correct: false },
      { text: 'function:myFunction()', correct: false }
    ]
  },
  {
    question: 'What is the correct way to write a JavaScript array',
    answers: [
      { text: 'var colors = "red", "green", "blue"', correct: false },
      { text: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', correct: false },
      { text: 'var colors = ["red", "green", "blue"] ', correct: true}
    ]
  }
]


var count = 15;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Finished';
    // or...
    alert("You're out of time! Better luck next time :/");
  }
}, 1000);