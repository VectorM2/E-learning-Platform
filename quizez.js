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
    question: 'What does AI stand for?',
    choices: [
      'Artificial Invention',
      'Artificial Intelligence',
      'Automated Interaction',
    ],
    answer: 'Artificial Intelligence',
  },
  {
    question: 'Which programming language is commonly used for AI development?',
    choices: ['JavaScript', 'Python', 'Java'],
    answer: 'Python',
  },
  {
    question: 'What is a neural network?',
    choices: [
      'A type of computer processor',
      'A way to visualize data',
      'A computational model inspired by the human brain'],
    answer: 'A computational model inspired by the human brain',
  },
  {
    question: 'What is the Turing test?',
    choices: [
      'A test for identifying prime numbers',
      'A test to evaluate the capabilities of an AI system to exhibit human-like intelligence',
      'A test to assess network security'
    ],
    answer: 'A test to evaluate the capabilities of an AI system to exhibit human-like intelligence',
  },
  {
    question: 'What is reinforcement learning?',
    choices: [
      'A machine learning technique that uses labeled data',
      'A learning process where agents take actions to maximize rewards in an environment',
      'A technique to identify patterns in images',
    ],
    answer: 'A learning process where agents take actions to maximize rewards in an environment',
  },
  {
    question: 'Which AI approach focuses on mimicking human cognitive functions?',
    choices: [
      'Natural Language Processing (NLP)',
      'Evolutionary Algorithms',
      'Cognitive Computing'
    ],
    answer: 'Cognitive Computing',
  },
  {
    question: 'What is the "training" phase in machine learning?',
    choices: [
      'The phase where models make predictions',
      'The phase where models are evaluated',
      'The phase where models learn from data'
    ],
    answer: 'The phase where models learn from data',
  },
  {
    question: 'What is the "curse of dimensionality" in machine learning?',
    choices: [
      'The difficulty of visualizing high-dimensional data',
      'The problem of dealing with too few features in data',
      'The challenge of overfitting models'
    ],
    answer: 'The difficulty of visualizing high-dimensional data',
  },
  {
    question: 'What is deep learning?',
    choices: [
      'A type of machine learning that focuses on shallow networks',
      'A subset of AI that deals with decision trees',
      'A type of machine learning that uses deep neural networks'
    ],
    answer: 'A type of machine learning that uses deep neural networks',
  },
  {
    question: 'What is a chatbot?',
    choices: [
      'A device used to navigate the internet',
      'A program that simulates conversation with human users',
      'A type of neural network'
    ],
    answer: 'A program that simulates conversation with human users',
  },
  {
    question: 'What is the "singularity" in the context of AI?',
    choices: [
      'A point in the future where machines surpass human intelligence',
      'A type of neural network architecture',
      'A term for a highly complex AI algorithm'
    ],
    answer: 'A point in the future where machines surpass human intelligence',
  },
  {
    question: 'Which AI technique is inspired by the behavior of ants, bees, and other social insects?',
    choices: [
      'Swarm Intelligence',
      'Genetic Algorithms',
      'Expert Systems'
    ],
    answer: 'Swarm Intelligence',
  },
  {
    question: 'What is the "bottleneck" problem in AI?',
    choices: [
      'The challenge of storing large datasets',
      'A term for slow neural network training',
      'A term for limited information flow in a system'
    ],
    answer: 'A term for limited information flow in a system',
  },
  {
    question: 'Which AI application involves enabling computers to understand and generate human language?',
    choices: [
      'Machine Vision',
      'Natural Language Processing (NLP)',
      'Expert Systems'
    ],
    answer: 'Natural Language Processing (NLP)',
  },
  {
    question: 'What is a genetic algorithm?',
    choices: [
      'A type of neural network architecture',
      'An optimization technique inspired by the process of natural selection',
      'A method for labeling data in machine learning'
    ],
    answer: 'An optimization technique inspired by the process of natural selection',
  },
  {
    question: 'What is transfer learning in machine learning?',
    choices: [
      'A technique to transfer data between different environments',
      'The process of training a model on one task and applying it to a related task',
      'The process of transferring trained models to another device'
    ],
    answer: 'The process of training a model on one task and applying it to a related task',
  },
  {
    question: 'What is the "bias-variance tradeoff" in machine learning?',
    choices: [
      'A tradeoff between model complexity and data quality',
      'A tradeoff between bias and variance in model predictions',
      'A tradeoff between training time and model accuracy'
    ],
    answer: 'A tradeoff between bias and variance in model predictions',
  },
  {
    question: 'What is explainable AI (XAI)?',
    choices: [
      'A technique for training AI models without human involvement',
      'The ability of an AI system to explain its decision-making process',
      'A type of AI focused on speech recognition'
    ],
    answer: 'The ability of an AI system to explain its decision-making process',
  },
  {
    question: 'What is unsupervised learning?',
    choices: [
      'A type of machine learning where models learn from labeled data',
      'A type of machine learning where models learn from rewards and punishments',
      'A type of machine learning where models learn from unlabeled data'
    ],
    answer: 'A type of machine learning where models learn from unlabeled data',
  },
  {
    question: 'What is a decision tree in machine learning?',
    choices: [
      'A tree-like structure used for storing data',
      'A type of neural network architecture',
      'A tree-like model used to make decisions based on features'
    ],
    answer: 'A tree-like model used to make decisions based on features',
  },
  {
    question: 'What is data augmentation?',
    choices: [
      'The process of increasing data storage capacity',
      'The process of improving data quality',
      'The process of creating new training examples from existing data'
    ],
    answer: 'The process of creating new training examples from existing data',
  },
  {
    question: 'What is the primary goal of AI in healthcare?',
    choices: [
      'To replace medical professionals',
      'To improve patient outcomes and healthcare processes',
      'To provide entertainment to patients'
    ],
    answer: 'To improve patient outcomes and healthcare processes',
  },
  {
    question: 'What is a Markov decision process (MDP) in AI?',
    choices: [
      'A technique for data visualization',
      'A framework for modeling decision-making in uncertain environments',
      'A type of neural network'
    ],
    answer: 'A framework for modeling decision-making in uncertain environments',
  },
  {
    question: 'What is overfitting in machine learning?',
    choices: [
      'A situation where models generalize well to new data',
      'A situation where models perform poorly on training data',
      'A situation where models perform well on training data but poorly on new data'
    ],
    answer: 'A situation where models perform well on training data but poorly on new data',
  },
  {
    question: 'What is the "bias" of an AI model?',
    choices: [
      'The difference between predicted and actual outcomes',
      'The error due to the model's inability to capture underlying patterns',
      'The systematic error that prevents a model from accurate predictions'
    ],
    answer: 'The systematic error that prevents a model from accurate predictions',
  },
  {
    question: 'What is a convolutional neural network (CNN) used for?',
    choices: [
      'Text processing',
      'Audio processing',
      'Image processing and computer vision'
    ],
    answer: 'Image processing and computer vision',
  },
  {
    question: 'What is the concept of "transferability" in AI?',
    choices: [
      'The ability of AI models to transfer knowledge between different domains',
      'The ability of AI models to transfer data securely',
      'The ability of AI models to transfer to different programming languages'
    ],
    answer: 'The ability of AI models to transfer knowledge between different domains',
  },
  {
    question: 'What is a recurrent neural network (RNN)?',
    choices: [
      'A type of neural network used for image classification',
      'A neural network architecture with connections between layers',
      'A neural network architecture designed for sequences and time series data'
    ],
    answer: 'A neural network architecture designed for sequences and time series data',
  },
  {
    question: 'What is GPT-3?',
    choices: [
      'A type of programming language',
      'A natural language processing model developed by OpenAI',
      'A neural network architecture for image recognition'
    ],
    answer: 'A natural language processing model developed by OpenAI',
  },
  {
    question: 'What is the "knowledge bottleneck" problem in AI?',
    choices: [
      'The challenge of storing vast amounts of data',
      'The challenge of encoding human knowledge into AI systems',
      'The challenge of processing data efficiently'
    ],
    answer: 'The challenge of encoding human knowledge into AI systems',
  },
  {
    question: 'What is a recommendation system in AI?',
    choices: [
      'A system for generating random data',
      'A system for predicting user preferences and suggesting items',
      'A system for classifying images'
    ],
    answer: 'A system for predicting user preferences and suggesting items',
  },
  {
    question: 'What is the concept of explainability in AI?',
    choices: [
      'The ability of AI models to explain their decisions to humans',
      'The ability of AI models to run on low-power devices',
      'The ability of AI models to learn from minimal data'
    ],
    answer: 'The ability of AI models to explain their decisions to humans',
  },
  {
    question: 'What is natural language generation (NLG) in AI?',
    choices: [
      'The process of creating realistic images from textual descriptions',
      'The process of understanding and interpreting human language',
      'The process of generating human-like text from structured data'
    ],
    answer: 'The process of generating human-like text from structured data',
  },
  {
    question: 'What is AI ethics?',
    choices: [
      'A branch of philosophy unrelated to AI',
      'The study of algorithms in AI',
      'The study of the moral implications and guidelines for AI development and use'
    ],
    answer: 'The study of the moral implications and guidelines for AI development and use',
  },
  {
    question: 'What is artificial narrow intelligence (ANI)?',
    choices: [
      'AI that can perform a specific task at human-level intelligence',
      'AI that can perform a wide range of tasks at human-level intelligence',
      'AI that can perform a specific task at or beyond human-level intelligence'
    ],
    answer: 'AI that can perform a specific task at or beyond human-level intelligence',
  },
  {
    question: 'What is the concept of reinforcement learning in AI?',
    choices: [
      'The use of rewards to encourage human learning',
      'The process of learning from labeled data',
      'The process of learning by interacting with an environment and receiving rewards'
    ],
    answer: 'The process of learning by interacting with an environment and receiving rewards',
  },
  {
    question: 'What is Bayesian inference?',
    choices: [
      'A method for proving mathematical theorems',
      'A method for estimating probabilities based on prior knowledge and evidence',
      'A technique for image compression'
    ],
    answer: 'A method for estimating probabilities based on prior knowledge and evidence',
  },
  {
    question: 'What is the concept of "artificial general intelligence" (AGI)?',
    choices: [
      'AI that specializes in creating art',
      'AI that can understand and generate human-like intelligence across various tasks',
      'AI that is capable of understanding and generating art'
    ],
    answer: 'AI that can understand and generate human-like intelligence across various tasks',
  },
  {
    question: 'What is the concept of explainable AI (XAI)?',
    choices: [
      'A technique for training AI models without human involvement',
      'The ability of an AI system to explain its decision-making process',
      'A type of AI focused on speech recognition'
    ],
    answer: 'The ability of an AI system to explain its decision-making process',
  },
  {
    question: 'What is a generative adversarial network (GAN) in AI?',
    choices: [
      'A network that generates adversarial examples for testing AI systems',
      'A type of network used in online gaming',
      'A network architecture for generating and discriminating data'
    ],
    answer: 'A network architecture for generating and discriminating data',
  },
  {
    question: 'What is deep reinforcement learning?',
    choices: [
      'A technique for training deep neural networks',
      'A combination of deep learning and reinforcement learning',
      'A technique for training robots using deep learning'
    ],
    answer: 'A combination of deep learning and reinforcement learning',
  },
  {
    question: 'What is the "bias-variance tradeoff" in machine learning?',
    choices: [
      'A tradeoff between model complexity and data quality',
      'A tradeoff between bias and variance in model predictions',
      'A tradeoff between training time and model accuracy'
    ],
    answer: 'A tradeoff between bias and variance in model predictions',
  },
  {
    question: 'What is the Turing test?',
    choices: [
      'A test for identifying prime numbers',
      'A test to evaluate the capabilities of an AI system to exhibit human-like intelligence',
      'A test to assess network security'
    ],
    answer: 'A test to evaluate the capabilities of an AI system to exhibit human-like intelligence',
  },
  {
    question: 'What is a genetic algorithm?',
    choices: [
      'A type of neural network architecture',
      'An optimization technique inspired by the process of natural selection',
      'A method for labeling data in machine learning'
    ],
    answer: 'An optimization technique inspired by the process of natural selection',
  },
  {
    question: 'What is the "knowledge bottleneck" problem in AI?',
    choices: [
      'The challenge of storing vast amounts of data',
      'The challenge of encoding human knowledge into AI systems',
      'The challenge of processing data efficiently'
    ],
    answer: 'The challenge of encoding human knowledge into AI systems',
  },
  {
    question: 'What is a decision tree in machine learning?',
    choices: [
      'A tree-like structure used for storing data',
      'A type of neural network architecture',
      'A tree-like model used to make decisions based on features'
    ],
    answer: 'A tree-like model used to make decisions based on features',
  },
  {
    question: 'What is data augmentation?',
    choices: [
      'The process of increasing data storage capacity',
      'The process of improving data quality',
      'The process of creating new training examples from existing data'
    ],
    answer: 'The process of creating new training examples from existing data',
  },
  {
    question: 'What is the primary goal of AI in healthcare?',
    choices: [
      'To replace medical professionals',
      'To improve patient outcomes and healthcare processes',
      'To provide entertainment to patients'
    ],
    answer: 'To improve patient outcomes and healthcare processes',
  },
  {
    question: 'What is a Markov decision process (MDP) in AI?',
    choices: [
      'A technique for data visualization',
      'A framework for modeling decision-making in uncertain environments',
      'A type of neural network'
    ],
    answer: 'A framework for modeling decision-making in uncertain environments',
  },
  {
    question: 'What is overfitting in machine learning?',
    choices: [
      'A situation where models generalize well to new data',
      'A situation where models perform poorly on training data',
      'A situation where models perform well on training data but poorly on new data'
    ],
    answer: 'A situation where models perform well on training data but poorly on new data',
  },
  {
    question: 'What is the "bias" of an AI model?',
    choices: [
      'The difference between predicted and actual outcomes',
      'The error due to the model's inability to capture underlying patterns',
      'The systematic error that prevents a model from accurate predictions'
    ],
    answer: 'The systematic error that prevents a model from accurate predictions',
  },
  {
    question: 'What is a convolutional neural network (CNN) used for?',
    choices: [
      'Text processing',
      'Audio processing',
      'Image processing and computer vision'
    ],
    answer: 'Image processing and computer vision',
  },
  {
    question: 'What is the concept of "transferability" in AI?',
    choices: [
      'The ability of AI models to transfer knowledge between different domains',
      'The ability of AI models to transfer data securely',
      'The ability of AI models to transfer to different programming languages'
    ],
    answer: 'The ability of AI models to transfer knowledge between different domains',
  },
  {
    question: 'What is a recurrent neural network (RNN)?',
    choices: [
      'A type of neural network used for image classification',
      'A neural network architecture with connections between layers',
      'A neural network architecture designed for sequences and time series data'
    ],
    answer: 'A neural network architecture designed for sequences and time series data',
  },
  {
    question: 'What is GPT-3?',
    choices: [
      'A type of programming language',
      'A natural language processing model developed by OpenAI',
      'A neural network architecture for image recognition'
    ],
    answer: 'A natural language processing model developed by OpenAI',
  },
  {
    question: 'What is the concept of "artificial narrow intelligence" (ANI)?',
    choices: [
      'AI that can perform a specific task at human-level intelligence',
      'AI that can perform a wide range of tasks at human-level intelligence',
      'AI that can perform a specific task at or beyond human-level intelligence'
    ],
    answer: 'AI that can perform a specific task at or beyond human-level intelligence',
  },
  {
    question: 'What is the concept of reinforcement learning in AI?',
    choices: [
      'The use of rewards to encourage human learning',
      'The process of learning from labeled data',
      'The process of learning by interacting with an environment and receiving rewards'
    ],
    answer: 'The process of learning by interacting with an environment and receiving rewards',
  },
  {
    question: 'What is Bayesian inference?',
    choices: [
      'A method for proving mathematical theorems',
      'A method for estimating probabilities based on prior knowledge and evidence',
      'A technique for image compression'
    ],
    answer: 'A method for estimating probabilities based on prior knowledge and evidence',
  },
  {
    question: 'What is the concept of "artificial general intelligence" (AGI)?',
    choices: [
      'AI that specializes in creating art',
      'AI that can understand and generate human-like intelligence across various tasks',
      'AI that is capable of understanding and generating art'
    ],
    answer: 'AI that can understand and generate human-like intelligence across various tasks',
  },
  {
    question: 'What is artificial superintelligence (ASI) in AI?',
    choices: [
      'AI that performs at superhuman levels in all tasks',
      'AI that is focused on superhuman strength and agility',
      'AI that mimics the intelligence of superhuman beings'
    ],
    answer: 'AI that performs at superhuman levels in all tasks',
  },
  {
    question: 'What is the concept of "fairness" in AI?',
    choices: [
      'The ability of AI to make just decisions',
      'The concept of treating all users equally in AI systems',
      'The ethical consideration of avoiding bias and discrimination in AI systems'
    ],
    answer: 'The ethical consideration of avoiding bias and discrimination in AI systems',
  },
  {
    question: 'What is the "black box" problem in AI?',
    choices: [
      'A problem in computer vision',
      'The challenge of developing AI systems',
      'The difficulty of understanding the internal workings of complex AI models'
    ],
    answer: 'The difficulty of understanding the internal workings of complex AI models',
  },
  {
    question: 'What is the concept of "neuroevolution" in AI?',
    choices: [
      'The study of brain evolution in animals',
      'The application of evolutionary algorithms to train neural networks',
      'The use of neural networks to model evolutionary processes'
    ],
    answer: 'The application of evolutionary algorithms to train neural networks',
  },
  {
    question: 'What is the concept of "data privacy" in AI?',
    choices: [
      'The practice of sharing data publicly for AI research',
      'The ethical consideration of protecting personal data used in AI systems',
      'The concept of data sharing between AI systems'
    ],
    answer: 'The ethical consideration of protecting personal data used in AI systems',
  },
  {
    question: 'What is an AI agent?',
    choices: [
      'A computer program that can browse the internet',
      'A program that mimics human behavior in virtual environments',
      'A type of chatbot'
    ],
    answer: 'A program that mimics human behavior in virtual environments',
  },
  {
    question: 'What is the concept of "unsupervised learning"?',
    choices: [
      'A type of machine learning where models learn from labeled data',
      'A type of machine learning where models learn from rewards and punishments',
      'A type of machine learning where models learn from unlabeled data'
    ],
    answer: 'A type of machine learning where models learn from unlabeled data',
  },
  {
    question: 'What is the concept of "bias" in AI?',
    choices: [
      'A technique to improve model performance',
      'The tendency of AI models to favor certain outcomes or groups',
      'The ethical consideration of treating all users fairly'
    ],
    answer: 'The tendency of AI models to favor certain outcomes or groups',
  },
  {
    question: 'What is the concept of "preprocessing" in AI?',
    choices: [
      'The final stage of model training',
      'The process of preparing and cleaning data before feeding it into a model',
      'The process of selecting features for a model'
    ],
    answer: 'The process of preparing and cleaning data before feeding it into a model',
  },
  {
    question: 'What is AI ethics?',
    choices: [
      'A branch of philosophy unrelated to AI',
      'The study of algorithms in AI',
      'The study of the moral implications and guidelines for AI development and use'
    ],
    answer: 'The study of the moral implications and guidelines for AI development and use',
  },
  {
    question: 'What is natural language generation (NLG) in AI?',
    choices: [
      'The process of creating realistic images from textual descriptions',
      'The process of understanding and interpreting human language',
      'The process of generating human-like text from structured data'
    ],
    answer: 'The process of generating human-like text from structured data',
  },
  {
    question: 'What is AI ethics?',
    choices: [
      'A branch of philosophy unrelated to AI',
      'The study of algorithms in AI',
      'The study of the moral implications and guidelines for AI development and use'
    ],
    answer: 'The study of the moral implications and guidelines for AI development and use',
  },
  {
    question: 'What is artificial narrow intelligence (ANI)?',
    choices: [
      'AI that can perform a specific task at human-level intelligence',
      'AI that can perform a wide range of tasks at human-level intelligence',
      'AI that can perform a specific task at or beyond human-level intelligence'
    ],
    answer: 'AI that can perform a specific task at or beyond human-level intelligence',
  },
  {
    question: 'What is the concept of reinforcement learning in AI?',
    choices: [
      'The use of rewards to encourage human learning',
      'The process of learning from labeled data',
      'The process of learning by interacting with an environment and receiving rewards'
    ],
    answer: 'The process of learning by interacting with an environment and receiving rewards',
  },
  {
    question: 'What is Bayesian inference?',
    choices: [
      'A method for proving mathematical theorems',
      'A method for estimating probabilities based on prior knowledge and evidence',
      'A technique for image compression'
    ],
    answer: 'A method for estimating probabilities based on prior knowledge and evidence',
  },
  {
    question: 'What is the concept of "artificial general intelligence" (AGI)?',
    choices: [
      'AI that specializes in creating art',
      'AI that can understand and generate human-like intelligence across various tasks',
      'AI that is capable of understanding and generating art'
    ],
    answer: 'AI that can understand and generate human-like intelligence across various tasks',
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
 if (numQuestions < 5 || numQuestions > 50) {
   alert('Please enter a number between 5 and 50.');
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
