// QUIZ DATA  

const data = [
  {
    "question": "What is the capital of France?",
    "option1": "Berlin",
    "option2": "Madrid",
    "option3": "Paris",
    "correct_option": "Paris"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "option1": "Harper Lee",
    "option2": "Mark Twain",
    "option3": "Ernest Hemingway",
    "correct_option": "Harper Lee"
  },
  {
    "question": "What is the largest planet in our Solar System?",
    "option1": "Earth",
    "option2": "Jupiter",
    "option3": "Saturn",
    "correct_option": "Jupiter"
  },
  {
    "question": "Which element has the chemical symbol 'O'?",
    "option1": "Oxygen",
    "option2": "Gold",
    "option3": "Osmium",
    "correct_option": "Oxygen"
  },
  {
    "question": "Who was the first person to walk on the Moon?",
    "option1": "Buzz Aldrin",
    "option2": "Neil Armstrong",
    "option3": "Yuri Gagarin",
    "correct_option": "Neil Armstrong"
  },
  {
    "question": "What is the main ingredient in guacamole?",
    "option1": "Tomato",
    "option2": "Avocado",
    "option3": "Lettuce",
    "correct_option": "Avocado"
  },
  {
    "question": "Which country is known as the Land of the Rising Sun?",
    "option1": "China",
    "option2": "Japan",
    "option3": "South Korea",
    "correct_option": "Japan"
  },
  {
    "question": "How many continents are there on Earth?",
    "option1": "5",
    "option2": "6",
    "option3": "7",
    "correct_option": "7"
  },
  {
    "question": "What is the hardest natural substance on Earth?",
    "option1": "Gold",
    "option2": "Iron",
    "option3": "Diamond",
    "correct_option": "Diamond"
  },
  {
    "question": "Which is the smallest country in the world by area?",
    "option1": "Monaco",
    "option2": "Vatican City",
    "option3": "San Marino",
    "correct_option": "Vatican City"
  }
]

class info {
  constructor(q, a1, a2, a3, ac) {
    this.question = q;
    this.option1 = a1;
    this.option2 = a2;
    this.option3 = a3;
    this.correct = ac;
  }
}

const objArr = [
  question1 = new info(
    data[0].question,
    data[0].option1,
    data[0].option2,
    data[0].option3,
    data[0].correct_option
  ),
  question2 = new info(
    data[1].question,
    data[1].option1,
    data[1].option2,
    data[1].option3,
    data[1].correct_option
  ),
  question3 = new info(
    data[2].question,
    data[2].option1,
    data[2].option2,
    data[2].option3,
    data[2].correct_option
  ),
  question4 = new info(
    data[3].question,
    data[3].option1,
    data[3].option2,
    data[3].option3,
    data[3].correct_option
  ),
  question5 = new info(
    data[4].question,
    data[4].option1,
    data[4].option2,
    data[4].option3,
    data[4].correct_option
  ),
  question6 = new info(
    data[5].question,
    data[5].option1,
    data[5].option2,
    data[5].option3,
    data[5].correct_option
  ),
  question7 = new info(
    data[6].question,
    data[6].option1,
    data[6].option2,
    data[6].option3,
    data[6].correct_option
  ),
  question8 = new info(
    data[7].question,
    data[7].option1,
    data[7].option2,
    data[7].option3,
    data[7].correct_option
  ),
  question9 = new info(
    data[8].question,
    data[8].option1,
    data[8].option2,
    data[8].option3,
    data[8].correct_option
  ),
  question10 = new info(
    data[9].question,
    data[9].option1,
    data[9].option2,
    data[9].option3,
    data[9].correct_option
  )
]
// variables & Constant
let qst = document.querySelector(".question");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let options = document.querySelectorAll(".options");
let button = document.querySelector("button");
let correctAnswer = ["Paris", "Harper Lee", "Jupiter", "Oxygen", "Neil Armstrong", "Avocado", "Japan", "7", "Diamond","Vatican City", ]
let counter = document.querySelector(".countQuestion");
let index = 1;
var ans = "";
let collect;


// Answer Checking


let j = 0;
let num = 0;
let choose = false;
function checkAnswer() {
  options.forEach((option)=>{
    option.addEventListener("click",(e)=>{
      choose = true;
      if(ans == ''){
        ans = option.innerHTML;
        if(correctAnswer[j] == option.innerHTML){
          option.style.backgroundColor = "green";
          collect = collect + 1;
          j += 1;
          num = num + 1;
        }
        else{
          option.style.backgroundColor = "red";
          j += 1
        }
      }
    })
  })
}
checkAnswer();


// next Question 

function setDefault(){
  qst.innerHTML = objArr[0].question;
  option1.innerText = objArr[0].option1;
  option2.innerText = objArr[0].option2;
  option3.innerText = objArr[0].option3;
}

// RESET FUNCTION
const restartBtn = document.querySelector('#restart')
function retry(){
  restartBtn.style.display = 'block';
}

window.addEventListener("load", (e) => {
  e.preventDefault();
  try {
      Swal.fire("💀 Are you ready for quiz test ?");
  } catch (error) {
      alert("💀 Are you ready for quiz test ?")
  }
  setDefault();

  function nextQuestion() {
    button.addEventListener("click",
      () => {
      if(choose === true){
        choose = false;
        // reset all data
        options.forEach((individual)=>{
          individual.style.backgroundColor = "transparent"
        })
        ans = "";
          
        // Start Logic
        checkAnswer();
        let text = '';
        if (index == 10) {
          if(num > 8) text = 'Best Score : ';
          else if(num > 5 && num < 8) text = 'Good Approach! But Make Better : ';
          else if(num == 10) text = 'Congratulation! You Got The Highest Score : ';
          else if(num == 0) text = 'Very Bad! Try Again You Got : ';
          else if(num < 4 && num > 0) text = 'Not A Good Approach! You Got : '
          else if(num > 7 && num < 10) text = 'Excellent! Your Score :'
          try{
            Swal.fire({
              title: "Quiz Completed!",
              text: `${text}${num}/10`,
              imageUrl: "https://cdn-icons-png.flaticon.com/512/4685/4685238.png",
              imageWidth: 200,
              imageHeight: 200,
              imageAlt: "Custom image"
            });
          }catch(e){
            alert(`${text}${num}/10`);
            console.log(text,num);
          }
          document.body.disabled = "true";
          retry();
        }
        else {
          qst.innerHTML = objArr[index].question;
          option1.innerText = objArr[index].option1;
          option2.innerText = objArr[index].option2;
          option3.innerText = objArr[index].option3;
          counter.innerText = index + 1;
          index += 1;
        }
      }
      else{
        alert("Choose any option first");
      }
    })
  }
    nextQuestion()
});




