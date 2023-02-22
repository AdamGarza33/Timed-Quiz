const startBtn = document.getElementById('start-btn')
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
  revealQuestion(randomQuestions[currentQuestionIndex])
}

function revealQuestion(question) {
  questionsEl.innerText = question.question
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