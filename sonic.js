// import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti();
// console.log(jsConfetti)

// jsConfetti.addConfetti({ test to see how it looks before using
//   confettiRadius: 3,
//   confettiNumber: 800,
// })
let rings = new Audio("rings.mp3");
let bgMusic = new Audio("green-hills.mp3");
bgMusic.loop = true;

let wins = 0;

//Random sonic name generator
let names = [ //List of all guessable names
  "sonic",
  "knuckles",
  "tails",
  "shadow",
  "amy",
  "eggman",
  "rouge",
  "blaze",
  "silver",
  "cream",
];

let randomName = names[Math.floor(Math.random() * names.length)];
console.log("Name:" + randomName);
let attempts = 0;

function playMusic(){
  bgMusic.play();
  document.getElementById("guess").removeEventListener("click", playMusic)
}
document.getElementById("guess").addEventListener("click", playMusic)

document.getElementById("guess").addEventListener("keyup", (e) => { // When you click to type it clears feedback, and winimg
  if (document.getElementById("submit").getAttribute("disabled")) {
    feedback.innerHTML = `You already won. Click play again or refresh!`;
    feedback.style.color= "gray";
    // instead of clearing img and feedback it checks if the button is disabled first when clicking enter and runs the new feedback.
  } else {
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("winimg").innerHTML = "";
  }
});

function enterBtn(event) { // run the checkGuess on the submit button when you click enter
  if (event.key === "Enter") {
    checkGuess();
  }
}

document.addEventListener(
  //clicking enter key does same as submit button
  "keyup",
  enterBtn
);

function checkGuess() {
  let guessInput = document.getElementById("guess");

  const feedback = document.getElementById("feedback");

  const valueGuess = guessInput.value.trim();
  const userGuess = valueGuess.toLowerCase();

  //deals with errors/issues
  if (!userGuess || userGuess.trim() == "") {
    feedback.innerHTML = "Please enter a name!";
    feedback.style.color = "gray";
    return;
  }

  attempts++;

  if (userGuess === randomName) {
    displayImage(userGuess);
    feedback.innerHTML = `Congratulations! You guessed the character in ${attempts} attempts.`;
    feedback.style.color = "green";

    document.removeEventListener("keyup", enterBtn);
    document.getElementById("submit").setAttribute("disabled", true);
    //celebration particles
    jsConfetti.addConfetti({
      confettiRadius: 3,
      confettiNumber: 800,
    });

    //add 1 to the score 
    wins++
    document.getElementById("wins").innerHTML = wins
     
    console.log(wins)

    rings.play();

  } else {
    feedback.innerHTML = "Try again!";
    feedback.style.color = "red";
    document.getElementById("guess").value = "";
  }
}

function displayImage(randomName) {
  const winImage = document.getElementById("winimg");
  winImage.innerHTML = `<img id="character" src="${randomName}.png">`;
}

function getHint() {
  feedback.style.color = "gray";
  if (randomName === "sonic") {
    document.getElementById("feedback").innerHTML = "Blue!";
  }
  if (randomName === "knuckles") {
    document.getElementById("feedback").innerHTML = "Red!";
  }
  if (randomName === "tails") {
    document.getElementById("feedback").innerHTML = "Yellow!";
  }
  if (randomName === "amy") {
    document.getElementById("feedback").innerHTML = "Pink!";
  }
  if (randomName === "shadow") {
    document.getElementById("feedback").innerHTML = "Black!";
  }
  if (randomName === "silver") {
    document.getElementById("feedback").innerHTML = "White!";
  }
  if (randomName === "eggman") {
    document.getElementById("feedback").innerHTML = "Bald with a Mustache!";
  }
  if (randomName === "rouge") {
    document.getElementById("feedback").innerHTML = "White and Pink!";
  }
  if (randomName === "blaze") {
    document.getElementById("feedback").innerHTML = "Purple!";
  }
  if (randomName === "cream") {
    document.getElementById("feedback").innerHTML = "Rabbit!";
  }
}

function resetGame() {
  randomName = names[Math.floor(Math.random() * names.length)];
  attempts = 0;
  console.log("Name:" + randomName);
  document.getElementById("guess").value = ""; //resets guess box
  document.getElementById("feedback").innerHTML = ""; //resets feedback from guess
  document.getElementById("winimg").innerHTML = "";
  document.getElementById("submit").removeAttribute("disabled");
  document.addEventListener(
    //clicking enter key does same as submit button
    "keyup",
    enterBtn
  );
  jsConfetti.clearCanvas();
}

// To do: resize buttons with other box (maybe), leaderboard (see nicolas), more characters?, score counter

// dev log thingy lol: fixed play again/reset button, changed website tab to chaos emerald, shows character images, disable submit button after u get it correct, make feedback box empty when guess box is empty, list of guessable characters, centered the enter your guess text, changed css bg and button positions, no longer case sensitive, image clears when deleting answer during correct guess, enter button also submits asnwer, confetti now explodes when u get it right, guess box now clears when the player is wrong, bug where all feedback stays red after getting the name wrong fixed, added a hint button, correct button sound effect added, bug when clicking enter it still submits after getting it right is patched, infinity celebration particles when holding down enter patched, when attempting to submit a new or the same name after winning it runs a feedback telling the user they already won, question mark is now resizable and in line with the enter guess box, added sonic bg music, all answers are now trimmed
