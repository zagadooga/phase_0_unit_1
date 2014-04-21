// Pseudocode

// Intro: There are two arrays and we want to create three functions to do things with the arrays.

//-----------------------------------------------------------
// Function 1: Find the sum of the array

// Set a sum variable to zero. 
// Loop through the array using a for loop. At each instance, add the element to the sum.
// Return the sum.

function sum(arr){
   var total = 0;
   for (var i in arr) {
       total += arr[i];
   }
   return total;
}

//User story final: I want the sum of the array named "arr" 

//-----------------------------------------------------------
// Function 2: Find the mean of an array

// Call the sum function 
// Divide the answer from the sum function by the length of the array
// Return that answer


function mean(arr) {
   return (theSum(arr) / arr.length);
}

//User story fnal: I want the average of the array called "arr"

//-----------------------------------------------------------
// Function 3: Find the median of the array. For this excercise, if there is an even amount of 
// numbers in the array, we return the mean (average) of the two middle numbers.
// Note that the  arrays are already sorted in order, 
// this solution would not work if they were unsorted

// create an if/else statement for even and odd arrays 
// if the number of elements in the array is odd, return the element in the array at [(array length / 2) +1]
 // make sure to use integer division, so 3/2 = 1
// if the number of elements in the array is even, 
 // add the elements at positions (array length/2) and (array length/2) +1 together [these are the center to elements]
   // again, make sure to use integer division here
 // divide this sum by 2 and return this answer 
 
 //refactored: by making each part of the average equatiomn effectively an integer.
 //So when it's an odd number array both elements will floor to the same number 
 //and if there is an even number array they will be the two elements around the exact middle of the array

function median(arr) {
 return (  ( arr[Math.floor(arr.length/2)] + arr[Math.floor((arr.length -1)/2 )] )  / 2 );
}

//User story fnal: I want the median of the array called "arr"




//While I found this challenge enjoyable, I did not learn too much from it as I had done similar things with javascript
//before. Furthermore, while I don't think the multiple person model was very efficient for this challenge, I can
//understand its utility in the context of a much large project. That said, I think it would be much simpler if we had
//"modularized" the challenge, so that each one of the four people were working independently on one function from
//beginning to end, and then testing each function to ensure that they worked properly, before putting them together. I
//don't think it was efficient to have each person working on a different stage of development, as in one case, there was
//an error in the pseudocode that would have been quickly apparent to the person that preceded me if they were writing the
//code themselves. However, being bound to translate the code directly, it was my job to pass on code that didn't work
//properly to the next person.
