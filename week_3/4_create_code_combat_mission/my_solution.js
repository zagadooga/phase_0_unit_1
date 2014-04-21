// I worked with Amelia on this challenge


//A warrior gives a message to a pigeon, which finds his ally and gives the message to him.


// Idea: You write a letter. 
// Find the pigeon.
// Give the pigeon the letter. 

// You (Fearsome Warrior)
    // x_loc, y_loc, health, 
    // funcs: give, move_up, move_down, move_left, move_right
    
// Pigeon 
    // x_loc, y_loc, letter
    // funcs: locate, give
    
var you = {
    x_loc: 10,
    y_loc: 10,
    health: 100,
  
   move_up: function(){
      you.y_loc += 10;
    },
    
    move_down: function(){
      you.y_loc -= 10;
    },
    
    move_left: function(){
      you.x_loc -= 10;
    },
    
    move_right: function (){
      you.x_loc += 10;
    },
  
    give: function (){
      pigeon.letter = prompt("CooCoo, what would you like to tell your friend");
    }
};

var ally = {
  x_loc: 30, 
  y_loc: 70,
  letter: "",
};

var pigeon = {
  x_loc: 90,
  y_loc: 40,
  letter: "",
  
  fly: function(){
    pigeon.x_loc = ally.x_loc;
    pigeon.y_loc = ally.y_loc;
  },
  
  give: function(){
    console.log("Coo coo. You've got mail.");
    ally.letter = pigeon.letter;
    console.log(pigeon.letter);
  }
  
};
// 
// 
// 
// What parts of your strategy worked? What problems did you face?

//My partner and I were pretty effective at this challenge, partly because we planned out our code before we even began.
//We had a good idea of what we wanted our product to be both in english and pseudocode. The only real problems we had
//were not in the concept, but in the implementation; neither of us were experts in javascript so we had to pause and
//check out online resources to solve the problems.

//What questions did you have while coding? What resources did you find to help you answer them?

//We googled a couple problems, I believe I used the mozilla developer network for one issue.

//What concepts are you having trouble with, or did you just figure something out? If so, what?

//Conceptually, the challenge was pretty straightforward; the problems were in the limitations of our javascript knowledge.

//Did you learn any new skills or tricks?

//Of course, I learned how to implement a function within an object in javascript.

//How confident are you with each of the learning objectives?

//Confident.

//Which parts of the challenge did you enjoy?

//I enjoyed the problem solving aspects, and pretty much every part before debugging.

//Which parts of the challenge did you find tedious?

//Debugging...obviously. It took a fair amount of time tinkering with the code to get it right after we had written it all out.
// 
// 
// 
// 
