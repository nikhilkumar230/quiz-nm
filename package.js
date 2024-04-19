const quizData =  [
    {
        question: "What is the capital of India?",
        options: [ "Mumbai","New Delhi", "Kolkata", "Chennai"],
        answer: "New Delhi"
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: [ "Mahatma Gandhi", "Indira Gandhi","Jawaharlal Nehru", "Sardar Vallabhbhai Patel"],
        answer: "Jawaharlal Nehru"
    },
    {
        question: "Which Indian state is known as the 'Land of Five Rivers'?",
        options: ["Punjab", "Haryana", "Uttar Pradesh", "Gujarat"],
        answer: "Punjab"
    },
    {
        question: "What is the national flower of India?",
        options: [ "Rose", "Sunflower", "Jasmine" ,"Lotus"
        ],
        answer: "Lotus"
    },
    {
        question: "When is Republic Day celebrated in India?",
        options: ["January 26", "August 15", "October 2", "December 25"],
        answer: "January 26"
    },
]

  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitBtn = document.getElementById("submit-btn");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");

  let currentQuestionIndex = 0;
  let score = 0;

  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => selectAnswer(option));
      optionsElement.appendChild(optionElement);
    });
  }

  function selectAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      resultElement.textContent = "Correct!";
      resultElement.style.color = "#28a745";
      score++;
    } else {
      resultElement.textContent = "Incorrect!";
      resultElement.style.color = "#dc3545";
    }
    scoreElement.textContent = `Score: ${score}`;
    submitBtn.disabled = true;
    nextQuestion();
  }

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
      resultElement.textContent = "";
      submitBtn.disabled = false;
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    quizContainer.innerHTML = `<h2>Quiz Complete</h2>
                           <p>Your final score is: ${score} out of ${quizData.length}</p>`;
  }

  submitBtn.addEventListener("click", nextQuestion);

  loadQuestion();