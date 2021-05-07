console.log("js script is linked")

function guessGame(targetNum, playerGuess) {
    
    if(playerGuess == targetNum){
        alert("Correct! You win!")
    } else {
        playerGuess = prompt("Wrong! Guess again!")
        guessGame(targetNum, playerGuess)
    }
}

let target = Math.floor(Math.random() * 10 + 1)
console.log(target)

let guess = prompt("What number am I thinking of?")

guessGame(target,guess)