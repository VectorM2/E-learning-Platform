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
{
  question: 'What is Artificial Intelligence (AI)?',
  choices: ['A branch of computer science that deals with the creation of intelligent machines.', 'A programming language for building web applications.', 'A type of data structure.'],
  answer: 'A branch of computer science that deals with the creation of intelligent machines.'
},
{
  question: 'Which of the following is a machine learning algorithm?',
  choices: ['Bubble Sort', 'Linear Regression', 'Depth-First Search', 'Binary Search'],
  answer: 'Linear Regression'
},
{
  question: 'What is a neural network in the context of AI?',
  choices: ['A complex network of interconnected biological neurons.', 'A programming language for AI development.', 'A computational model inspired by the structure and functioning of the human brain.'],
  answer: 'A computational model inspired by the structure and functioning of the human brain.'
},
{
  question: 'What does the term "latency" refer to in computer networks?',
  choices: ['The time it takes for data to travel from source to destination.', 'The amount of data that can be transmitted over the network.', 'The security measures applied to network communication.'],
  answer: 'The time it takes for data to travel from source to destination.'
},
{
  question: 'What is DNS in the context of networking?',
  choices: ['Dynamic Network Services', 'Domain Name System', 'Data Network Security', 'Digital Network Services'],
  answer: 'Domain Name System'
},
{
  question: 'What is a firewall?',
  choices: ['A physical barrier that prevents unauthorized access to a network.', 'A software or hardware-based network security system.', 'A high-speed network connection.'],
  answer: 'A software or hardware-based network security system.'
},
{
  question: 'What is the purpose of the OSI model in networking?',
  choices: ['To standardize networking protocols and facilitate communication between different systems.', 'To design user interfaces for operating systems.', 'To manage memory allocation in computer systems.'],
  answer: 'To standardize networking protocols and facilitate communication between different systems.'
},
{
  question: 'What is a packet in the context of computer networking?',
  choices: ['A unit of data transmitted over a network.', 'A type of computer virus.', 'A storage device for digital data.'],
  answer: 'A unit of data transmitted over a network.'
},
{
  question: 'What is a MAC address?',
  choices: ['Media Access Control address; a unique identifier assigned to network interfaces for communications on the physical network segment.', 'Memory Allocation Code address in programming.', 'A type of computer virus.'],
  answer: 'Media Access Control address; a unique identifier assigned to network interfaces for communications on the physical network segment.'
},
{
  question: 'In the context of programming, what is a recursive function?',
  choices: ['A function that calls itself during its execution.', 'A function that performs mathematical calculations.', 'A function with a high level of complexity.'],
  answer: 'A function that calls itself during its execution.'
},
{
  question: 'What is the purpose of the SQL language?',
  choices: ['To manage and manipulate relational databases.', 'To create web page layouts.', 'To develop artificial intelligence algorithms.'],
  answer: 'To manage and manipulate relational databases.'
},
{
  question: 'What is cloud computing?',
  choices: ['A technology that allows access to computing resources over the internet.', 'A type of weather phenomenon.', 'A form of wireless communication.'],
  answer: 'A technology that allows access to computing resources over the internet.'
},

];

function startQuiz() {
 // Get the quiz type and number of questions from the form
 const quizType = document.getElementById('quizType').value;
 let quizQuestionsInput = document.getElementById('quizQuestions').value;

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

 shuffleArray(quizQuestions);
const questions = quizQuestions.slice(0, numQuestions);

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
    const answer = answerInput.value;
    answers.push(answer);
  }

  // Grade the quiz
  let numCorrect = 0;
  for (let i = 0; i < numQuestions; i++) {
    if (answers[i] === quizQuestions[i].answer) {
      numCorrect++;
    }
  }
  const score = Math.round((numCorrect / numQuestions) * 100);

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
    </div>
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
