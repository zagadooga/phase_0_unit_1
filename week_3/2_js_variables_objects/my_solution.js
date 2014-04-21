// I paired [by myself, with:] on this challenge.
// 1. Alec Ashford
// 2. Ronald Ishak



// Pseudocode
// 1. Make sure secretNumber is 7
// 2. Make sure password is "just open the door"
// 3. allowedIn should equal false
// 4. members should be an array with array 0 being John, array 3 being Mary


// __________________________________________
// Write your code below.


var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "Alec", "Ronald", "Mary"];




// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 





// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// What parts of your strategy worked? What problems did you face?

//Ronald and I completed this problem fairly easily; he was the navigator for the most part and I was the driver. It
//really helped to write it in pseudo code, even though I was a little skeptical at first.

//What questions did you have while coding? What resources did you find to help you answer them?

//We both knew JS syntax well enough to complete the problem, we really didn't need go out and find other sources.

//What concepts are you having trouble with, or did you just figure something out? If so, what?

//The concepts in this challenge were all ones I was familiar with. I'm less clear on the "this" keyword in javascript.
//I don't see a clear cut advantage of using it over just refering to the variable by name.

//Did you learn any new skills or tricks?

//I'm definitely going to use pseudocode more.

//How confident are you with each of the learning objectives?

//Very confident.

//Which parts of the challenge did you enjoy?

//As always, I enjoy the logic part, thinking through the problem before we even write anything down. Sometimes I can be slightly slow processor though, so sometimes when I'm thinking through something with someone, they will be a half step ahead of me.

//Which parts of the challenge did you find tedious?

//It was not so tedious, but other problems I've done that are similar to it get tedious fast when you hit a wall and can't figure out how to get past it for hours. Working with a partner helps prevent grinding, though.
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)
