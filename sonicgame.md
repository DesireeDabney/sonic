# SONIC CHARACTER GUESSING GAME

## DESCRIPTION
A guessing game featuring several characters from the Video Game Series Sonic. The computer randomly chooses a character, and the player tries to guess which one it is.

## HOW TO PLAY
1. If you don't know any of the characters, look at the list of guessable characters by hovering over the question mark first.
2. Enter a name in the input field.
3. Click the "Submit Guess" button.
4. Read the feedback to know if you got it right or not.
5. If you're having a hard time, consider clicking the hint button.
6. Keep guessing until you find the correct character.
7. Click "Play Again" to start a new game.
## TECHNOLOGIES USED 
- HTML5
- CSS3
- JavaScript

## FEATURES
- Random character generation
- Input validation
- Visual feedback
- Attempt counter
- hint functionality
- play again functionality

## PROJECT STRUCTURE 
The project structure consists of three files:
- **index.html** - Contains the structure of the game
- **styles.css** - Contains the styling of the game
- **sonic.js** - Contains the game logic

## CODE EXAMPLE
```javascript
function displayImage(randomName) {
  const winImage = document.getElementById("winimg");
  winImage.innerHTML = `<img id="character" src="${randomName}.png">`;
}

