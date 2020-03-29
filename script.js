var body = document.body;

var timerEl = document.querySelector("#timer");
var startQuizBtnEl = document.querySelector("#startQuiz");
var questionBoxEl = document.querySelector("#questionBox");
var answerBoxEl = document.querySelector("#answerBox");
var declareBoxEl = document.querySelector("#declareBox");

var formEl = document.querySelector("#userInitForm");
var btnl = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var quizInProgress = true;

// The questions
var questions = [
  "What data type stores a collection of values?",
  "What fundamental web language determines the behavior of a web page?",
  "What data type has a value of true or false?",
  "What web coding language determines the style of a web page?",
  "What method returns a random number?"
]

// The answers to the questions
var answers1 = [
  "1. variable",
  "2. string",
  "3. array",
  "4. function"
]

var answers2 = [
  "1. HTML",
  "2. CSS",
  "3. JavaScript",
  "4. Bootstrap"
]

var answers3 = [
  "1. boolean",
  "2. array",
  "3. object",
  "4. string"
]

var answers4 = [
  "1. HTML",
  "2. CSS",
  "3. JavaScript",
  "4. Jquery"
]

var answers5 = [
  "1. getRandomNumber()",
  "2. setRandomNumber()",
  "3. Random.Math()",
  "4. Math.random()"
]

// Set timer to start at 75 seconds
var secondsLeft = 75;

timerEl.textContent = "Time: " + secondsLeft;

startQuizBtnEl.addEventListener("click", startQuiz);

// Start the quiz once the "Start Quiz" button is clicked
function startQuiz() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft < 0) {
      clearInterval(timerInterval);
      youLoseMessage();
    } else if (quizInProgress === false) {
      clearInterval(timerInterval);
    }
  }, 1000);

  startQuizBtnEl.style.display = "none";
  questionOne();
}

// Start question one
function questionOne() {
  questionBoxEl.textContent = (questions[0]);
  answerBoxEl.textContent = "";
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  var btn3 = document.createElement("button");
  var btn4 = document.createElement("button");
  btn1.textContent = answers1[0];
  btn2.textContent = answers1[1];
  btn3.textContent = answers1[2];
  btn4.textContent = answers1[3];
  btn1.setAttribute("class", "btn");
  btn2.setAttribute("class", "btn");
  btn3.setAttribute("class", "btn");
  btn4.setAttribute("class", "btn");

  answerBoxEl.appendChild(btn1);
  answerBoxEl.appendChild(btn2);
  answerBoxEl.appendChild(btn3);
  answerBoxEl.appendChild(btn4);

  answerBoxEl.addEventListener("click", function (event) {

    if (event.target === btn1) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      questionTwo();

    } else if (event.target === btn2) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      questionTwo();

    } else if (event.target === btn3) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Correct!";
      questionTwo();

    } else if (event.target === btn4) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      questionTwo();
    }
  });
}


// Start question two
function questionTwo() {
  questionBoxEl.textContent = (questions[1]);
  answerBoxEl.textContent = "";
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  var btn3 = document.createElement("button");
  var btn4 = document.createElement("button");
  btn1.textContent = answers2[0];
  btn2.textContent = answers2[1];
  btn3.textContent = answers2[2];
  btn4.textContent = answers2[3];
  btn1.setAttribute("class", "btn");
  btn2.setAttribute("class", "btn");
  btn3.setAttribute("class", "btn");
  btn4.setAttribute("class", "btn");

  answerBoxEl.appendChild(btn1);
  answerBoxEl.appendChild(btn2);
  answerBoxEl.appendChild(btn3);
  answerBoxEl.appendChild(btn4);

  answerBoxEl.addEventListener("click", function (event) {
    
    if (event.target === btn1) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      questionThree();

    } else if (event.target === btn2) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      questionThree();

    } else if (event.target === btn3) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Correct!";
      questionThree();

    } else if (event.target === btn4) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      questionThree();
    }
  });
}
// Start question three
function questionThree() {
  questionBoxEl.textContent = (questions[2]);
  answerBoxEl.textContent = "";
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  var btn3 = document.createElement("button");
  var btn4 = document.createElement("button");
  btn1.textContent = answers3[0];
  btn2.textContent = answers3[1];
  btn3.textContent = answers3[2];
  btn4.textContent = answers3[3];
  btn1.setAttribute("class", "btn");
  btn2.setAttribute("class", "btn");
  btn3.setAttribute("class", "btn");
  btn4.setAttribute("class", "btn");

  answerBoxEl.appendChild(btn1);
  answerBoxEl.appendChild(btn2);
  answerBoxEl.appendChild(btn3);
  answerBoxEl.appendChild(btn4);

  answerBoxEl.addEventListener("click", function (event) {

    if (event.target === btn1) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Correct!";
      questionFour();

    } else if (event.target === btn2) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      questionFour();

    } else if (event.target === btn3) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      questionFour();

    } else if (event.target === btn4) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      questionFour();
    }
  });
}

// Start question four
function questionFour() {
  questionBoxEl.textContent = (questions[3]);
  answerBoxEl.textContent = "";
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  var btn3 = document.createElement("button");
  var btn4 = document.createElement("button");
  btn1.textContent = answers4[0];
  btn2.textContent = answers4[1];
  btn3.textContent = answers4[2];
  btn4.textContent = answers4[3];
  btn1.setAttribute("class", "btn");
  btn2.setAttribute("class", "btn");
  btn3.setAttribute("class", "btn");
  btn4.setAttribute("class", "btn");

  answerBoxEl.appendChild(btn1);
  answerBoxEl.appendChild(btn2);
  answerBoxEl.appendChild(btn3);
  answerBoxEl.appendChild(btn4);

  answerBoxEl.addEventListener("click", function (event) {

    if (event.target === btn1) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      questionFive();

    } else if (event.target === btn2) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Correct!";
      questionFive();

    } else if (event.target === btn3) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      questionFive();

    } else if (event.target === btn4) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      questionFive();
    }
  });
}

// Start question five
function questionFive() {
  questionBoxEl.textContent = (questions[4]);
  answerBoxEl.textContent = "";
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  var btn3 = document.createElement("button");
  var btn4 = document.createElement("button");
  btn1.textContent = answers5[0];
  btn2.textContent = answers5[1];
  btn3.textContent = answers5[2];
  btn4.textContent = answers5[3];
  btn1.setAttribute("class", "btn");
  btn2.setAttribute("class", "btn");
  btn3.setAttribute("class", "btn");
  btn4.setAttribute("class", "btn");

  answerBoxEl.appendChild(btn1);
  answerBoxEl.appendChild(btn2);
  answerBoxEl.appendChild(btn3);
  answerBoxEl.appendChild(btn4);

  answerBoxEl.addEventListener("click", function (event) {

    if (event.target === btn1) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      allDone();

    } else if (event.target === btn2) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      allDone();

    } else if (event.target === btn3) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Wrong!";
      secondsLeft -= 10;
      allDone();

    } else if (event.target === btn4) {
      declareBoxEl.textContent = "";
      declareBoxEl.textContent = "Correct!";
      allDone();

    }
  });

  // Stop quiz and display score
  function allDone() {
    quizInProgress = false;
    questionBoxEl.textContent = "All Done!";
    answerBoxEl.textContent = "Your final score is: " + secondsLeft;
    declareBoxEl.textContent = "Enter your initials: ";
    formEl.setAttribute("style", "display:block;");

    var subButtonEl = document.querySelector("#subButton")
    
    // Save score to local storage
    subButtonEl.addEventListener("click", function (event) {
      event.preventDefault();

      var userInitialsEl = document.querySelector("#userInitials").value;
      if (userInitialsEl === "") {
        displayMessage("error", "User initials cannot be blank");
      } else {
        localStorage.setItem("initials", userInitialsEl);
        localStorage.setItem("score", secondsLeft);
      }
      // Display high scores
      questionBoxEl.textContent = "Highscores";
      formEl.setAttribute("style", "display:none;");
      declareBoxEl.textContent = "";
      var init = localStorage.getItem("initials");
      var scr = localStorage.getItem("score");
      answerBoxEl.textContent = init + " " + scr;
    });
  }
}
// Alert if timer runs out before quiz is finished
function youLoseMessage() {
  alert("Time is expired, you lose.");
  secondsLeft = 75;
  timerEl.textContent = "Time: " + secondsLeft;
}