// Quiz 1

// numbers = [1, 2, 3, 4, 5, 6, 7];

// function sumArray(numbers) {
//   let sum = 0;
//   for (let key in numbers) {
//     sum = sum + numbers[key];
//     // console.log(`${key} => ${numbers[key]}`);
//   }
//   return sum;
// }

// console.log(sumArray(numbers));

// # Expected result: 15

// Quiz 2

// numbers = [1, 2, 3, 4, 5];

// function findLargestNumber(numbers) {
//   let largestNumber = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largestNumber) {
//       largestNumber = numbers[i];
//     }
//   }
//   return largestNumber;
// }

// console.log(findLargestNumber(numbers));
// // # Expected result: 5

// // quiz 3
// numbers = [1, 2, 3, 4, 5];
// function filterEvenNumbers(numbers) {
//   let evenNumbers = [];
//   let index = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       evenNumbers[index] = numbers[i];
//       index++;
//     }
//   }
//   return evenNumbers;
// }

// console.log(filterEvenNumbers(numbers));
// # Expected result: [2,4]

// Quiz 4

// words = ["hello", "world"];

// function getLengthsOfStrings(strings) {
//   let lengths = [];
//   for (let i = 0; i < words.length; i++) {
//     lengths[i] = words[i].length;
//   }

//   return lengths;
// }

// console.log(getLengthsOfStrings(words));
// # Expected result: [5, 5]

// Quiz 5
// numbers = [1, 2, 3, 4, 5];

// function reverseArray(numbers) {
//   let reversedNumbers = [];
//   let index = 0;
//   for (let i = numbers.length - 1; i >= 0; i--) {
//     reversedNumbers[index] = numbers[i];
//     index++;
//   }

//   return reversedNumbers;
// }

// console.log(reverseArray(numbers));
// # Expected result: [5,4,3,2,1]

// Quiz 6

// numbers = [1, 3, 2, 4, 5];

// function findSecondSmallestNumber(numbers) {
//   numbers.sort();
//   let secondSmallestNumber = numbers[1];
//   return secondSmallestNumber;
// }

// console.log(findSecondSmallestNumber(numbers));
// # Expected result: 2
// implementasinya boleh pake sorting bawaan javascript?

// quiz 7

words = ["apple", "banana", "avocado"];

function filterStringsStartingWithA(strings) {
  let filteredStrings = [];
  let index = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("a")) {
      filteredStrings[index] = words[i];
      index++;
    }
  }
  return filteredStrings;
}

console.log(filterStringsStartingWithA(words));
// # Expected result: ["apple", "avocado"]
