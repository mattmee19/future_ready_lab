/*eslint-env browser*/
function playGame() {
    alert("Firt enter a low number, then a high number. Then, guess a random number between them.");
    
//gets the low and high bounds
//uses parseInt() to make sure we have numbers not strings
    var from = parseInt(prompt("Enter the lower bound."));
    
    while (from < 0 || from > 1000) {
       from = parseInt(prompt("Your number must be between 0-1000"));
    }
    
    var to = parseInt(prompt("Enter the higher bound."));
    while (from > to) {
       to = parseInt(prompt("Higher bound must be higher then low bound"));
    }
    
//get an integer between [from and to]
//Math.random() only tells you from 0-1 with decimals
//math.round() rounds to the nearest integer 
    var target = Math.round(Math.random() * (to - from) + from);

    var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));
    
while (currentGuess < from || currentGuess > to) {
    currentGuess = parseInt(prompt("Must enter a number within " + from + " and " + to));
}
    var totalGuessess = 1;

    while (currentGuess !== target) {
        if (currentGuess < target) {
            parseInt(("Enter a higher number"));
            
            totalGuessess++;
        } else if (currentGuess > target) {
            currentGuess = parseInt(prompt("Enter a lower number"));
            totalGuessess++;
        }
    }
    alert("It took " + totalGuessess + " tries to guess the right  umber.");
}
