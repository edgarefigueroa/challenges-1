//CHALLENGES
console.log(`Max of Two`)
// Max of Two
// Difficulty
// Easy
// Concepts
// Mathematical Operators, Conditionals
// Given the starting code of:
x = 9
y = 2
// Write a block of code that will print out the largest value.
// Using the given values as an example, your code should print out 2.
// To verify your code is working properly, try and change the values of x and y.
// As an additional challenge, print out The values are identical. if x and y have the same value.

if(x>y){
  console.log(x)
}
else if(x<y){
  console.log(y)
}
else if(x===y){
  console.log(x)
}


console.log(`\nFind The Range`);
// Find The Range
// Difficulty
// Easy

// Concepts
// Loops, General

// Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.
// For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.

let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let smallest = array[0]
let largest = array[0]

for (let i = 0; i < array.length; i++) {
  if (smallest > array[i]) {
    smallest = array[i]
    console.log(smallest)
  } else if (largest < array[i]) {
    largest = array[i]
    console.log(largest)
  }
}

console.log(`\nFizz Buzz`)
// Fizz Buzz
// Difficulty
// Easy

// Concepts
// Loops, Conditionals

// Write a program that counts from 1 to 50 in fizzbuzz fashion.
// To do so, loop from 1 to 50 (inclusive). Each time through, if the number is evenly divisible by 3, say ‘fizz’.
// If the number is evenly divisible by 5, say ‘buzz’.
// If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. Otherwise, say the number.

for(let i=0; i<=50;i++){
  if(i%3===0 && i%5===0){
      console.log(`FizzBuzz`);
  }

  else if(i%3===0){
      console.log(`Fizz`);
  }

  else if(i%5===0){
      console.log(`Buzz`);
  }
  else{
      console.log(i);
  }
}
