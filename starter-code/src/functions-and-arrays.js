// Iteration #1: Find the maximum
let firstNumber = 56;
let secondNumber = 56;

maxOfTwoNumbers(firstNumber, secondNumber);

function maxOfTwoNumbers(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

// Iteration #2: Find longest word

const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

findLongestWord(words);

function findLongestWord(wordsArray) {
  let largestWord = null;
  let numberOfLetters = 0;
  for (i = 0; i < wordsArray.length; i++) {
    if (numberOfLetters < wordsArray[i].length) {
      numberOfLetters = wordsArray[i].length;
      largestWord = wordsArray[i];
    }
  }
  return largestWord;
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

console.log(sumArray(numbers));

function sumArray(numbersArray) {
  let totalSum = 0;
  for (i = 0; i < numbersArray.length; i++) {
    totalSum += numbersArray[i];
  }
  return totalSum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numberArray) {
  let average = null;
  let sumNumbers = sumArray(numberArray);
  if (numberArray.length > 0) {
    average = sumNumbers / numberArray.length;
  }
  return average;
}

// function averageNumbers(numberArray) {
//   return numberArray.length > 0 ? sumArray(numberArray) / numberArray.length : undefined;
// }

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];

averageWordLength(wordsArr);

// function averageWordLength(wordArray) {
//   var wordsLength = [];

//   for (var i = 0; i < wordArray.length; i++) {
//     wordsLength[i] = wordArray[i].length;
//   }

//   return wordArray.length > 0 ? sumArray(wordsLength) / wordArray.length : null;
// }

function averageWordLength(wordsArray) {
  let wordsLength = [];
  let average = null;
  for (let i = 0; i < wordsArray.length; i++) {
    wordsLength[i] = wordsArray[i].length;
  }

  if (wordsArray.length > 0) {
    average = sumArray(wordsLength) / wordsArray.length;
  } else {
    average = null;
  }
  return average;
}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"
];

uniquifyArray(wordsUnique);

function uniquifyArray(words) {
  let newWords = Array.from(new Set(words));
  console.log(newWords);
  return newWords;
}

// function uniquifyArray(words) {
//   let newWords = [];
//   newWords.push(words[0]);
//   debugger
//   for (let i = 0; i < words.length; i++) {
//     for (let j = 0; j < newWords.length; j++) {
//       debugger;
//       console.log(newWords);
//       words[i] === newWords[j] ? j++ : newWords.push(words[i]);
//     }
//   }
//   console.log(newWords);
//   return newWords;
// };

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

let wordToFind = "subset";
console.log(doesWordExist(wordsFind, wordToFind));

function doesWordExist(wordsArray, wordToFind) {
  return wordsArray.includes(wordToFind);
}

// function doesWordExist(wordsArray, wordToFind) {
//   let found = false;
//   for (let i = 0; i < wordsArray.length; i++) {
//     wordsArray[i] == wordToFind ? found = true : '';
//   };
//   // console.log(wordsArray, wordToFind);
//   return found;
// };

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];

console.log(howManyTimes(wordsCount, "e"));

function howManyTimes(words, wordToFind) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    words[i] === wordToFind ? count++ : "";
  }
  return count;
}

// Iteration #8: Bonus

const matrix2 = [
  [2, 2, 1, 1],
  [2, 1, 1, 1],
  [1, 1, 1, 1]
];

console.log("El producto más alto es: ", greatestProduct(matrix3));

function greatestProduct(matrix) {
  let candidateProduct = 0;
  let product = 0;
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix.length - 1; j++) {
      if (i === 0 || j === 0) {
        product = matrix[i][j + 1] * matrix[i + 1][j];
      } else if (i === matrix.length - 1 || j === matrix.length - 1) {
        product = matrix[i][j - 11] * matrix[i - 1][j];
      } else {
        product =
          matrix[i - 1][j] *
          matrix[i][j - 1] *
          matrix[i][j + 1] *
          matrix[i + 1][j];
      }
      candidateProduct < product
        ? (candidateProduct = product)
        : (candidateProduct = candidateProduct);
    }
  }
  return candidateProduct;
}
