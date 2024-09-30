"use strict";

// Task1
const numbersArray = [1, 2, 3];

numbersArray.push(6, 5, 4);
numbersArray.unshift(-3, -2, -1);
console.log(numbersArray);

// Task2
const ShiftPopExampleArray = [100, -273.15, 0, 1, 2, 3, 4, 5, 6, 9, 10];

ShiftPopExampleArray.shift();
ShiftPopExampleArray.shift();
ShiftPopExampleArray.pop();
ShiftPopExampleArray.pop();
ShiftPopExampleArray.pop();
console.log(ShiftPopExampleArray);

// Task3
const task3Arr = [1, 2, 3, 4, 5];

task3Arr.splice(1, 2);
console.log(task3Arr);

// Task4
const spliceExampleArray = [1, 2, 3, 4, 5];

const removedElements = spliceExampleArray.splice(1, 3);
console.log(removedElements);

// Task5
const insertElementsArray = [1, 2, 3, 4, 5];

insertElementsArray.splice(3, 0, "a", "b", "c");
console.log(insertElementsArray);

// Task6
const mixedArray = [1, 2, 3, 4, 5];

mixedArray.splice(1, 0, "a", "b");
mixedArray.splice(6, 0, "c");
mixedArray.splice(8, 0, "e");
console.log(mixedArray);

// Task7
const sliceArray = [1, 2, 3, 4, 5];

const slicedArray = sliceArray.slice(3, 5);
console.log(slicedArray);

// Task8
const stringArray = ["first", "second", "third", "fourth", "last"];

const slicedStringArray = stringArray.slice(1, 3);
console.log(slicedStringArray);

// Task9
const reverseArray = ["first", "second", "third", "fourth", "last"];

reverseArray.reverse();
console.log(reverseArray);

// Task10
const nestedArray = [1, 2, [3, 4, [5]], 6, 7];

const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray);

// Task11
const task11Arr = ["Name 1", "Name 2", true, 1000, "secret string"];

console.log(task11Arr.includes("secret string"));

// Task12
const concatArray = ["first", "second", "third", "fourth", "last"];

const concatenatedArray = concatArray.concat(1000, 2000, [true, false]);
console.log(concatenatedArray);

// Bonus task
const bonusArray = [13, 534, 63, 8236, 1, 341, 45];

for (let i = 0; i < bonusArray.length; i += 2) {
  console.log(bonusArray[i]);
}

let i = 0;

while (i < bonusArray.length) {
  console.log(bonusArray[i]);
  i += 2;
}

let j = 0;

do {
  console.log(bonusArray[j]);
  j += 2;
} while (j < bonusArray.length);
