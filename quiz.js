const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('question-container')
const questionsEl = document.getElementById('question')
const answerButtonEl = document.getElementById('answer-buttons')

let randomQuestions, currentQuestionIndex

startBtn.addEventListener('click', startQuiz)

function startQuiz() {
  console.log('Started')
  startBtn.classList.add('hide')
  randomQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerEl.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
    resetState()
    revealQuestion(randomQuestions[currentQuestionIndex])
}

function revealQuestion(question) {
  questionsEl.innerText = question.question
  questions.answers.foreach(answer => {
    const button = docement.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonEl.appendChild(button)
  })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild(answerButtonEl.firstChild)
    }
}

function selectAnswer() {

}

const questions = [
    {
        question: 'What does CSS stand for?',
        answer: [
            {text: 'Cascading Style Sheets', correct: true},
            {text: 'Corrupted Star Shell', correct: false}
        ]
    }
]