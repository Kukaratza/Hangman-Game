
//Set all variables and an array of words.
var randomwordarray = ["Jamiroquai", "Eminem", "Cher", "Metallica", "Fergie", "Coldplay"];
var wrongguesses = 0;
var guessesleft = 0;
var winscount = 0;
var losecount = 0;
var underscore = [];

//PC randomly generates a word from the array.           
var randnum = Math.floor(Math.random() * randomwordarray.length); //picks random index from array and multiples and removes extra digits.  
var randword = randomwordarray[randnum]; // the number picked (index) nows assigns it to the corresponding word in array.
console.log(randword); //verify that pc it is selecting a random word.

//create underscores based on the length of the word.
var genunderscores = function () {
    for (let i = 0; i < randword.length; i++) {
        underscore.push('_');
    }
    return underscore;
}
console.log(genunderscores());

//THIS IS WHERE THE MAGIC BEGINS!!! 
document.onkeyup = function (event) {

    var userguess = event.key;

}

//Generate user input

        //compare input from user with each letter from the word.
        //If letter is in the word, display it and show it.
        //if not set it to wrong guesses and deduct 1 point from "guesses left".
        //
