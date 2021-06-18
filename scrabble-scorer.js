// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};



function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(data) {
  wordTobeScored =  input.question("Let's play some scrabble! Enter a word:");
  //console.log(oldScrabbleScorer(wordTobeScored));
  return wordTobeScored;

};
let simpleScore = function simpleScore(word) {
  word = word.toUpperCase();
  sscore = word.length;
  score = Number(sscore);
  return score;
      
}
let vowelBonusScore = function vowelBonusScore(word) {
  word = word.toUpperCase();
  const vowelArray = ["A", "E", "I", "O", "U"] //what's worth 3 points
  let vbsArray = []; //the array for the word
  let vbScore = 0 //the score we'll be updating
  vbsArray = word.split("") //breaks the word into pieces
  for (i = 0; i < word.length; i++) //standard loop
    if (vowelArray.includes(word[i])) { // if our character is in the vowel array
    vbScore = vbScore + 3 // its worth 3
     } else { 
       vbScore = vbScore + 1 
     }
       return vbScore
}
function scrabbleScore(word) {
 let scrabbleArray = []
 let score = 0
 scrabbleArray = word.split("")
for (let i = 0; i < newPointStructure.length; i++) {
  if (oldboy[i] === scrabbleArray[i]) {
			score = score + Number(newPointStructure[i])
		 }
	  }
     return value;

  }
;

 //holds the keys (info) to all the scoring algorithms
 let scrabbleAlgorithm = {name: "Scrabble Algorithm",description: "The traditional scoring algorithm.",algofunction: scrabbleScore}
 let simpleAlgorithm = 
 {name: "Simple Algorithm",description: "Each letter is worth 1 point.",algofunction: simpleScore}
 let vowelBonusAlgorithm = {name: "Vowel Bonus Algorithm",description: "Vowels are 3 pts, consonants are 1 pt.",algofunction: vowelBonusScore}
const scoringAlgorithms  = [simpleAlgorithm, vowelBonusAlgorithm, scrabbleAlgorithm]//holds the keys (info) to all the scoring algorithms



function scorerPrompt() {
  userPrompt = input.question("Which scoring algorithm would you like to use? \n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system")
  
  userPrompt = Number(userPrompt)
  //if (userPrompt !== 0 || 1|| 2){ //PROBLEM you need to make sure this is a number.
  //console.log("Please enter 0, 1, or 2.")
  //return scorerPrompt();
    if (userPrompt === 0) {
  console.log("Algorithm Name:", scoringAlgorithms[0].name)
  console.log("Scorer Function result: ", scoringAlgorithms[0].algofunction(wordTobeScored));
} else if (userPrompt === 1) {
  console.log("Algorithm Name:", scoringAlgorithms[1].name)
  console.log("Scorer Function result: ", scoringAlgorithms[1].algofunction(wordTobeScored));
  } else if (userPrompt === 2) {
  console.log("Algorithm Name:", scoringAlgorithms[2].name )
  console.log("Scorer Function result: ", scoringAlgorithms[2].algofunction(wordTobeScored));
  }
  console.log(`Your word was ${wordTobeScored}`)
}
let newStructure = []
function transform() {
  for (value in oldPointStructure) {
    for ( let letter of oldPointStructure[value]) {
            letter = letter.toLowerCase()
               newStructure[letter] = value
  }
}      return newStructure
}
let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();

  scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

