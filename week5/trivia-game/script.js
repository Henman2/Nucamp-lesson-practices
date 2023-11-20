console.log(`${questions.length} questions are loaded!`);
const questionDiv = document.getElementById("question");
const answerDiv = document.getElementById("answer");
const feedbackDiv = document.getElementById("feedback");
let currentQuestion = "";
const questionBtn = document.getElementById("questionBtn");
const answerBtn = document.getElementById("answerBtn");
//add click event to the new question   
questionBtn.addEventListener("click", () => {
  getTriviaQuestion()
    .then((question) => {
      currentQuestion = question;
      console.log(currentQuestion.answer);
      displayQuestion(currentQuestion);
    })
    .catch((e) => {
      console.error(e);
    });
});

//add click event for the answer button
answerBtn.addEventListener('click', () => {
    let inputtedAnswer = answerDiv.value.trim().toLowerCase();
    console.log(inputtedAnswer, currentQuestion.answer);
    let feedbackMessage = '';
    if(currentQuestion && inputtedAnswer === currentQuestion.answer.toLowerCase()){
        feedbackMessage = `${inputtedAnswer}: Good job you answered correctly`;

    }
    else{
        feedbackMessage = `${inputtedAnswer} is not the correct answered, please try again`;
    }
    feedbackDiv.textContent = feedbackMessage;
});
// define function to retrieve question
function getTriviaQuestion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = Math.floor(Math.random() * questions.length);
      question = questions[index];
      if (index > questions.length) {
        reject("An error occured while retrieving the trivia questions");
      } else {
        resolve(question);
      }
    }, 1000);
  });
}

function displayQuestion(triviaQuestion) {
  questionDiv.textContent = triviaQuestion.question;
  answerDiv.value = "";
  feedbackDiv.textContent = "";
}
