
//Set all variables and an array of words.
var randomwordarray = ["Jamiroquai", "Eminem", "Cher", "Metallica", "Fergie", "Coldplay"];
var wrongguesses = 0;
var guessesleft = 0;
var winscount = 0;
var losecount = 0;
var underscore = [];

//PC randomly generates a word from the array. 
//picks random index from array and multiples and removes extra digits.  
var randnum = Math.floor(Math.random() * randomwordarray.length);
// the number picked (index) nows assigns it to the corresponding word in array.
var randword = randomwordarray[randnum];
//verify that pc it is selecting a random word.
console.log(randword);

//create underscores based on the length of the word.
var genunderscores = function () {
    for (let i = 0; i < randword.length; i++) {
        underscore.push('_');
    }
    return underscore;
}
console.log(genunderscores());

//THIS IS WHERE THE MAGIC BEGINS!!! 

//Create a function the captures the key that user inputs.

//this fn starts after releasing the keypress
document.onkeyup = function (event) {
    var keycode = event.key;
    //converts the "keycode" into the actual string letter.     
    var userguess = String.fromCharCode(keycode);

    //compare input from user with each letter from the randword and returns -1 if not found.
    if(randword.indexOf(userguess) > -1) {
        console.log(true);
}
    
}
        //If letter is in the word, display it and show it.
        //if not set it to wrong guesses and deduct 1 point from "guesses left".
        //
