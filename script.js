var questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    }
];


var currentQuestion = 0;
var score = 0;
var quizContainer = document.getElementById("quiz-container");
var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var submitButton = document.getElementById("submit");

function loadQuestion() {
    var q = questions[currentQuestion];
    questionElement.textContent = (currentQuestion+1)+q.question;
    optionsElement.innerHTML = "";

    for (var i = 0; i < q.options.length; i++) {
        var option = document.createElement("label");
        option.innerHTML = '<input type="radio" name="option" value="' + i + '"> ' + q.options[i];
        optionsElement.appendChild(option);
    }
}

function submitAnswer() {
    var selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    var answer = parseInt(selectedOption.value);
    if (answer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion === questions.length) {
        showResult();
    } else {
        loadQuestion();
    }
}

function showResult() {
    quizContainer.innerHTML = "<h2>Your Score: " + score + "/" + questions.length + "</h2>";
    submitButton.style.display = "none";
}

loadQuestion();
submitButton.addEventListener("click", submitAnswer);
