var body = document.body;

var timerEl = document.querySelector("#timer");
var startQuizBtnEl = document.querySelector("#startQuiz");
var questionBoxEl = document.querySelector("#questionBox");
var answerBoxEl = document.querySelector("#answerBox");

var btnl = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");

var questions = [
    "What data type stores a collection of values?",
    "What fundamental web language determines the behavior of a web page?",
    "What data type has a value of true or false?",
    "What web coding language determines the style of a web page?",
    "What method returns a random number?"
]

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


var secondsLeft = 5;

timerEl.textContent = "Time: " + secondsLeft;


startQuizBtnEl.addEventListener("click", startQuiz);

function startQuiz() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = "Time: " + secondsLeft;
      
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        youLoseMessage();
      }
    }, 1000);
  
    startQuizBtnEl.style.display = "none"; 
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
    
    btn3.addEventListener("click", function() {
      var correctMessage = 


    });




}

function youLoseMessage() {
  alert("Time is expired, you lose.");
  secondsLeft = 5;
  timerEl.textContent = "Time: " + secondsLeft;
}