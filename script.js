const startButton = document.getElementById ('start-btn')
const nextButton = document.getElementById ('next-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
}
)



function startGame () {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random () - .5) 
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()


}

function setNextQuestion () {
    resetState()
    showQuestion (shuffledQuestions[currentQuestionIndex])

}

function showQuestion (question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct  
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }


}

function selectAnswer (e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass (document.body, correct)
    Array.from (answerButtonsElement.children).forEach (button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart!'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element,correct) {
    clearStatusClass (element)
    if (correct) {
        element.classList.add ('correct')
    } else {
        element.classList.add('wrong')
    }

}

function clearStatusClass (element) {
    element.classList.remove ('correct')
    element.classList.remove ('wrong')
}




const questions = [
  {
    question: 'What year was the iPad released?',
    answers: [
        {text: '2011', correct: false},
        {text: '2009', correct: false},
        {text: '2010', correct: true},
        {text: '2012', correct: false},


    ]
  },
  {
    question: 'Which one of these are not a PROGRAMMING language?',
    answers: [
        {text: 'Java', correct: false},
        {text: 'Python', correct: false},
        {text: 'Bash', correct: true},
        {text: 'All of them are programming languages', correct: false},


    ]
  },
  {
    question: 'What does the abbreviation (OS) typically stand for?',
    answers: [
        {text: 'Operation Signals', correct: false},
        {text: 'Operating Systems', correct: true},
        {text: 'Open Script', correct: false},
        {text: 'Operate Script', correct: false},


    ]
  },
  {
    question: 'What does HTML stand for?',
    answers: [
        {text: 'HyperText Markup Language', correct: true},
        {text: 'Hyperlink Technology Mark Language', correct: false},
        {text: 'High Temper Mask Lingala', correct: false},
        {text: 'None of the options', correct: false},


    ]
  },
  {
    question: 'What year was Youtube created?',
    answers: [
        {text: '2005', correct: true},
        {text: '2004', correct: false},
        {text: '2006', correct: false},
        {text: '2007', correct: false},


    ]
  },

]