// Start the quiz

// Define quiz questions and corresponding outcomes with points
const quiz = [
  {
    question:
      "If you were to watch all of the Starwars films, in what order would you watch them?",
    options: [
      { text: "By release date", points: 1 },
      { text: "By the actual timeline in the films", points: 0 },
    ],
  },
  {
    question: "Did you have a barbie growing up?",
    options: [
      { text: "Of course!", points: 1 },
      { text: "No...but I wanted one", points: 1 },
      { text: "No, or I didn't like Barbies", points: 0 },
    ],
  },
  {
    question: "Can one bad thing ruin your entire day?",
    options: [
      { text: "Nope! Solid as a rock.", points: 1 },
      { text: "Sometimes, yeah!", points: 0 },
    ],
  },
  {
    question: "After a movie, do you like to sit in your feels?",
    options: [
      { text: "Yes, if a movie made me feel, I am satisfied", points: 1 },
      { text: "No, movies are supposed to be fun!", points: 0 },
    ],
  },
  {
    question: "Are you a history nerd?",
    options: [
      { text: "Yes", points: 0 },
      { text: "Kinda", points: 0 },
      { text: "Not really", points: 1 },
    ],
  },
  {
    question: "Are you big fan of Tom Cruise?",
    options: [
      { text: "Love that guy", points: 0 },
      { text: "...", points: 1 },
    ],
  },
];

let currentQuestion = 0;
let barbiePoints = 0;
let oppenheimerPoints = 0;

// Function to display the current question
function displayQuestion() {
  const questionContainer = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const resultContainer = document.getElementById("result");

  questionContainer.innerHTML = quiz[currentQuestion].question;
  optionsContainer.innerHTML = "";

  for (let i = 0; i < quiz[currentQuestion].options.length; i++) {
    const optionButton = document.createElement("button");
    optionButton.innerText = quiz[currentQuestion].options[i].text;
    optionButton.setAttribute("onclick", `selectOption(${i})`);
    optionsContainer.appendChild(optionButton);
  }

  resultContainer.innerText = "";
}

// Function to handle option selection
function selectOption(optionIndex) {
  const selectedOption = quiz[currentQuestion].options[optionIndex];

  barbiePoints += selectedOption.points;
  oppenheimerPoints += 1 - selectedOption.points;

  if (currentQuestion < quiz.length - 1) {
    currentQuestion++;
    displayQuestion();
    console.log(`Barbie: ${barbiePoints}, Oppen: ${oppenheimerPoints}`);
  } else {
    displayResult();
  }
}

// Function to display the final result based on accumulated points
function displayResult() {
  const resultContainer = document.getElementById("result");
  const questionContainer = document.getElementById("question");
  const optionsContainer = document.getElementById("options");

  if (barbiePoints > oppenheimerPoints) {
    resultContainer.style.color = "pink";
    questionContainer.innerText = "";
    optionsContainer.innerText = "";
    resultContainer.innerText =
      "Team Barbenheimer! See Barbie first, then Oppenheimer.";
  } else if (oppenheimerPoints > barbiePoints) {
    resultContainer.style.color = "brown";
    questionContainer.innerText = "";
    optionsContainer.innerText = "";
    resultContainer.innerText =
      "Team Oppenbarbie! See Oppenheimer first, then Barbie.";
  } else {
    resultContainer.style.color = "red";
    questionContainer.innerText = "";
    optionsContainer.innerText = "";
    resultContainer.innerText =
      "Inconclusive, you are chaos incarnate, do whatever you want man.";
  }
}

// Start the quiz
displayQuestion();
