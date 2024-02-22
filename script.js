const questions = [
    {
        question: "A broad area of study that involves the study of 3 branches of science together is known as?",
        answers: [
            {text: "Sports Science", correct: false},
            {text: "Integrated Science", correct: true},
            {text: "Applied Science", correct: false},
            {text: "Social Science", correct: false},
            
        ]
    },
    {
        question: "The following are branches of STEM Except?",
        answers: [
            {text: "Pure Science", correct: false},
            {text: "Technical and Engineering", correct: false},
            {text: "Applied Sciences", correct: false},
            {text: "Sports Science", correct: true},
            
        ]
    },

    {
        question: "The following are scientific skills. Which one is NOT correctly mathed with its meaning?",
        answers: [
            {text: "Classification - Putting items into groups depending on their similarities or differences", correct: false},
            {text: "Conclusion - Final judgement after making observation and linking to what is already known", correct: false},
            {text: "Observation - Studying an object carefully while taking note of its properties", correct: false},
            {text: "Prediction - Exchanging and reporting information", correct: true},
            
        ]
    },
    {
        question: "Which of the following household items is wrongly matched?",
        answers: [
            {text: "Wood ash - Base", correct: false},
            {text: "Lemon juice - Acid", correct: false},
            {text: "Orange juice - Base", correct: true},
            {text: "Anti-acid tablet solutions - base", correct: false},
            
        ]
    },
    {
        question: "Which of the following solutions is wrongly matched with its effect on the litmus paper?",
        answers: [
            {text: "Wood ash solution - turns blue litmus paper to red", correct: true},
            {text: "Lemon juice - Turn blue litmus paper to red", correct: false},
            {text: "Orange solution - Red litmus paper remains the same", correct: false},
            {text: "Soap solution - Turns red litmus paper to blue", correct: false},
            
        ]
    },
    {
        question: "The following are laboratory safety measures. Which one is NOT?",
        answers: [
            {text: "Never rush into the laboratory", correct: false},
            {text: "Dispose of laboratory waste improperly ", correct: true},
            {text: "Ensure that all gas taps are closed after use", correct: false},
            {text: "Do not interfere with someone else's experiment", correct: false},
            
        ]
    },
    {
        question: "The following are common laboratory hazards EXCEPT?",
        answers: [
            {text: "Closed electrical sockets", correct: true},
            {text: "Corrosive chemicals", correct: false},
            {text: "Broken glass equipment", correct: false},
            {text: "Open flames", correct: false},
            
        ]
    },
    {
        question: "Which of the following component is wrongly matched with its function?",
        answers: [
            {text: "Plasters - They are used to cover small wounds to keep away germs", correct: false},
            {text: "Bandages - They cover cuts or wounds to keep away germs", correct: false},
            {text: "Cotton wool - They clean wounds, cuts and bruises", correct: false},
            {text: "Antiseptics - They are used to cut bandages to the required sizes", correct: true},
            
        ]
    },
    {
        question: "Hot liquid or steam is likely to cause?",
        answers: [
            {text: "Burns", correct: false},
            {text: "Falls", correct: false},
            {text: "Scalds", correct: true},
            {text: "Shock", correct: false},
            
        ]
    },
    {
        question: "Anything that has the potential to cause harm or injure someone in known as?",
        answers: [
            {text: "Hazard", correct: true},
            {text: "Warning", correct: false},
            {text: "Shock", correct: false},
            {text: "Reagent", correct: false},
            
        ]
    },
     {
        question: "The following are derived quatities Except?",
        answers: [
            {text: "Area", correct: false},
            {text: "Density", correct: false},
            {text: "Temperature", correct: true},
            {text: "Volume", correct: false},
            
        ]
    },
     {
        question: "The following are components of integrated science Except?",
        answers: [
            {text: "Biology", correct: false},
            {text: "Mathematics", correct: true},
            {text: "Chemistry", correct: false},
            {text: "Physics", correct: false},
            
        ]
    },
     {
        question: "The following are characteristics of non-luminous flame Except?",
        answers: [
            {text: "Less heat", correct: false},
            {text: "Blue in color", correct: false},
            {text: "Has no soot", correct: false},
            {text: "Less light", correct: true},
            
        ]
    },
    {
        question: "Which of the following parts of a bunsen burner in Not correctly matched with its function?",
        answers: [
            {text: "Collar - Opens and closes tha air hole", correct: false},
            {text: "Jet - Allows laboratory gas into the chimney", correct: false},
            {text: "Air hole - Allows laboratory gas into the chimney ", correct: true},
            {text: "Rubber tubing - Connects gas inlet of the bunsen burner to the gas tap", correct: false},
            
        ]
    },
    {
        question: "The water temperature in a beaker was 73 degree celcius. What was the temperature of that water in SI units?",
        answers: [
            {text: "73k", correct: false},
            {text: "274k", correct: false},
            {text: "346k", correct: true},
            {text: "200k", correct: false},
            
        ]
    },
     {
        question: "Convert 0.004 tonnes to the SI units",
        answers: [
            {text: "0.4", correct: false},
            {text: "4", correct: true},
            {text: "400", correct: false},
            {text: "4000", correct: false},
            
        ]
    },
    {
        question: "Which of the following apparatus is not correctly matched to its use?",
        answers: [
            {text: "Tripod stand - Supports flasks and beakers during heating", correct: false},
            {text: "Wire gauze - Distributes heat evenly when heating substances like flasks", correct: false},
            {text: "Pipe-clay triangle - Holds the test tubes during heating", correct: true},
            {text: "Crucible - Heating solid substances that require strong heating", correct: false},
            
        ]
    },
    {
        question: "The information is found on packaging materials of products helps us in all the following Except?",
        answers: [
            {text: "To tell the quantity or amount of product", correct: false},
            {text: "To identify the ingredients used to make the product", correct: false},
            {text: "To know the expiry date of the product", correct: false},
            {text: "To know how to mishandle the product", correct: true},
            
        ]
    },
     {
        question: "Calculate the density of a wooden block that has a volume of 60cm3 and a mass of 6g. Give your answer is SI units",
        answers: [
            {text: "100", correct: true},
            {text: "360", correct: false},
            {text: "10", correct: false},
            {text: "6600", correct: false},
            
        ]
    },
     {
        question: "Calculate the volume of a carton box with a length of 10cm, a width of 4cm and a height of 8cm. Give your answer in SI units",
        answers: [
            {text: "32", correct: false},
            {text: "0.032", correct: false},
            {text: "0.00032", correct: true},
            {text: "320", correct: false},
            
        ]
    },
    {
        question: "Calculate the area of a classroom with a length of 1000cm and a width of 700cm. Give your answer in SI units.",
        answers: [
            {text: "700000", correct: false},
            {text: "70000", correct: false},
            {text: "70", correct: true},
            {text: "700", correct: false},
            
        ]
    },
     {
        question: "Which of the following basic quantity is not correctly matched into its SI unit?",
        answers: [
            {text: "Time - seconds", correct: false},
            {text: "Electric current - Amperes", correct: false},
            {text: "Amount of substance - Candela", correct: true},
            {text: "Length - metres", correct: false},
            
        ]
    },
     {
        question: "The length of a classroom wall is 800 cm. What is the length of the wall in SI units?",
        answers: [
            {text: "0.08 ", correct: false},
            {text: "8 ", correct: true},
            {text: "80 ", correct: false},
            {text: "800 ", correct: false},
            
        ]
    },
    {
        question: "STEM stands for three of the following Except?",
        answers: [
            {text: "Science", correct: false},
            {text: "English", correct: true},
            {text: "Mathematics", correct: false},
            {text: "Technology", correct: false},
            
        ]
    },
    {
        question: "The following are importances of Integrated Science in our daily lives EXCEPT?",
        answers: [
            {text: "Helps us to understand our bodies", correct: false},
            {text: "Enables us to solve basic problems at home or in school", correct: false},
            {text: "Helps in poverty eradication", correct: false},
            {text: "Helps us to do well in social sciences", correct: true},
            
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
         score++; 
    }else{
        selectedBtn.classList.add("incorrect");
    }
   Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
   });
   nextButton.style.display = "block";
}
function showScore(){
   resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
 nextButton.innerHTML = "Try Again";
 nextButton.style.display = "block";
  }
  
    function handleNextButton(){
currentQuestionIndex ++;
if(currentQuestionIndex < questions.length){
    showQuestion();
}else{
   showScore();
}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
     handleNextButton(); 
    }else{
      startQuiz();
    }
});

startQuiz();
