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
  data =  input.question("Let's play some scrabble! Enter a word:");
  data = oldScrabbleScorer(data);
  console.log(data)

};

let simpleScore = function simpleScore(word) {
  word = word.toUpperCase();
  sscore = word.length
  score = Number(sscore)
  console.log(sscore)
  return sscore

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
       return vbScore //give back the updated score

let scrabbleScore;

const scoringAlgorithms = [  //holds the keys (info) to all the scoring algorithms

simpleAlgorithm = {
  simpleAlgorithmName: simpleAlgorithm,
  simpleAlgorithmDescription: "Each letter is worth 1 point.",
  simpleAlgorithmScorerFunction: simpleScore
}
vowelBonusAlgorithm = {
  vowelBonusAlgorithmName: vowelBonusAlgorithm,
  vowelBonusAlgorithmDescription: "Vowels are 3 pts, consonants are 1 pt.	",
  vowelBonusAlgorithmFunction: vowelBonusScore
scrabbleAlgorithm = {
  scrabbleAlgorithmName: scrabbleAlgorithm,
  scrabbleAlgorithmDescription: "The traditional scoring algorithm.	",
  scrabbleAlgorithmFunction: oldScrabbleScorer

}
]
function scorerPrompt() {
  input.question("Select which scoring method to use: ")
  
}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
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

