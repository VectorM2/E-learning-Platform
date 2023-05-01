const quizQuestions = [
 {
  question: 'What is a variable?',
  choices: ['A container for storing data values.', 'A programming construct that repeats a sequence of instructions.', 'A data type that can hold only one value at a time.'],
  answer: 'A container for storing data values.'
 },
 {
  question: 'What is a loop?',
  choices: ['A programming construct that repeats a sequence of instructions until a specific condition is met.', 'A data type that can hold only one value at a time.', 'A function that takes one or more arguments and returns a value.'],
  answer: 'A programming construct that repeats a sequence of instructions until a specific condition is met.'
 },
 {
  question: 'What is the purpose of the "typeof" operator in JavaScript?',
  choices: ['To determine the data type of a value or variable.', 'To convert a string to a number.', 'To concatenate two strings.'],
  answer: 'To determine the data type of a value or variable.'
 },
 {
  question: 'What is a function in JavaScript?',
  choices: ['A block of code designed to perform a particular task.', 'A way to create a new object.', 'A loop that executes a fixed number of times.'],
  answer: 'A block of code designed to perform a particular task.'
 },
 {
  question: 'What is the "this" keyword in JavaScript?',
  choices: ['A reference to the current object.', 'A way to declare a variable.', 'A function that returns a Boolean value.'],
  answer: 'A reference to the current object.'
 },
 {
  question: 'What is a callback function?',
  choices: ['A function that is passed as an argument to another function and is executed after some event occurs.', 'A function that returns a value.', 'A way to declare a variable.'],
  answer: 'A function that is passed as an argument to another function and is executed after some event occurs.'
 },
 {
  question: 'What is the difference between "let" and "var" in JavaScript?',
  choices: ['"let" is block-scoped, while "var" is function-scoped.', '"let" is used to declare constants, while "var" is used to declare variables.', '"let" and "var" are interchangeable and can be used in the same way.'],
  answer: '"let" is block-scoped, while "var" is function-scoped.'
 },
 {
  question: 'What is the difference between "==" and "===" in JavaScript?',
  choices: ['"==" checks for value equality, while "===" checks for both value and type equality.', '"==" and "===" are interchangeable and can be used in the same way.', '"==" checks for type equality, while "===" checks for value equality.'],
  answer: '"==" checks for value equality, while "===" checks for both value and type equality.'
 },
 {
  question: 'What is an array?',
  choices: ['A collection of data items, all of the same type, accessed using a common name.', 'A container for storing data values.', 'A data type that can hold only one value at a time.'],
  answer: 'A collection of data items, all of the same type, accessed using a common name.'
 },
 // Add more questions here...
];

function startQuiz() {
 // Get the quiz type and number of questions from the form
 const quizType = document.getElementById('quizType').value;
 const quizQuestionsInput = document.getElementById('quizQuestions').value;

 // Make sure the quiz questions input field is not empty
 if (!quizQuestionsInput) {
   alert('Please enter the number of questions for the quiz.');
   return;
 }

 // Convert the number of questions input to a number
 const numQuestions = parseInt(quizQuestionsInput);

 // Make sure the number of questions is valid
 if (numQuestions < 1 || numQuestions > 10) {
   alert('Please enter a number between 1 and 10.');
   return;
 }

 // Get the quiz questions
 const questions = quizQuestions.slice(0, numQuestions);

 // Shuffle the questions
 shuffleArray(questions);

 // Create the quiz HTML
 let quizHTML = '';
 questions.forEach((question, index) => {
   quizHTML += `
     <div class="card">
       <div class="card-header">
         Question ${index + 1}:
       </div>
       <div class="card-body">
         <p class="card-text">${question.question}</p>
         <div class="form-check">
           ${question.choices.map(choice => `
             <div>
               <input class="form-check-input" type="radio" name="answer${index}" id="answer${index}_${choice}" value="${choice}">
               <label class="form-check-label" for="answer${index}_${choice}">
                 ${choice}
               </label>
             </div>
           `).join('')}
         </div>
       </div>
     </div>
   `;
 });

 // Add the submit button
 quizHTML += '<button type="button" class="btn btn-primary btn-block m-1" onclick="gradeQuiz()">Submit</button>';

 // Set the quiz HTML
 document.getElementById('quiz').innerHTML = quizHTML;
}


function gradeQuiz() {
 // Get the quiz questions and answers from the form
 const quizQuestionsInput = document.getElementById('quizQuestions').value;
 const numQuestions = parseInt(quizQuestionsInput);
 const answers = [];
 for (let i = 0; i < numQuestions; i++) {
   const answerInput = document.querySelector(`input[name=answer${i}]:checked`);
   if (!answerInput) {
     alert(`Please answer question ${i + 1}.`);
     return;
   }
   const answer = answerInput.value.trim().toLowerCase();
   answers.push(answer);
 }

 // Grade the quiz
 let numCorrect = 0;
 for (let i = 0; i < numQuestions; i++) {
   if (answers[i] === quizQuestions[i].answer.toLowerCase()) {
     numCorrect++;
   }
 }
 const score = Math.round(numCorrect / numQuestions * 100);

 // Display the results to the user
 const quizHTML = `
 <div class="card m-5">
 <div class="card-header">
   Reports
 </div>
 <div class="card-body">
 <h4>You scored ${score}% on the quiz!</h4>
   <p class="card-text">You got ${numCorrect} out of ${numQuestions} questions correct</p>
</div>
</div?


   
  
 `;
 document.getElementById('quiz').innerHTML = quizHTML;
}



// Define a function to shuffle an array
function shuffleArray(array) {
 for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
 }
}
