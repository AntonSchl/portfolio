let correctGuess = false;
let randomNumber = Math.floor(Math.random() * 6) + 1;
let guess = prompt("Hádaj na aké číslo medzi 1 až 6 myslím.");
if(parseInt(guess) === randomNumber){
    correctGuess = true
}else if(parseInt(guess) > randomNumber){
    let guessLess = prompt("Číslo na ktoré myslím je menšie ako " + guess + ".");
    if (parseInt(guessLess) === randomNumber){
        correctGuess = true;
    }
}else if(parseInt(guess) < randomNumber){
    let guessMore = prompt("Číslo na ktoré myslím je vačšie ako " + guess + ".");
    if (parseInt(guessMore) === randomNumber){
        correctGuess = true;
    }
}
if (correctGuess){
    document.write("<p>Uhádol si. Gratulujem!!</p>");
}else {
    document.write("<p>Žiaľ neuhádol si!! Číslo na ktoré som myslel bolo " + randomNumber + ".</p>");
}