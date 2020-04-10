let correctGuess = false;
let randomNumber = Math.floor(Math.random() * 6) + 1;
let guess = prompt("Hádaj na aké číslo medzi 1 až 6 myslím.");
if(+(guess) === randomNumber){
    correctGuess = true
}else if(+(guess) > randomNumber){
    let guessLess = prompt(`Číslo na ktoré myslím je menšie ako ${guess}.`);
    if (+(guessLess) === randomNumber){
        correctGuess = true;
    }
}else if(+(guess) < randomNumber){
    let guessMore = prompt(`Číslo na ktoré myslím je vačšie ako ${guess}.`);
    if (+(guessMore) === randomNumber){
        correctGuess = true;
    }
}
if (correctGuess){
    document.write("<p>Uhádol si. Gratulujem!!</p>");
}else {
    document.write(`<p>Žiaľ neuhádol si!! Číslo na ktoré som myslel bolo ${randomNumber}.</p>`);
}