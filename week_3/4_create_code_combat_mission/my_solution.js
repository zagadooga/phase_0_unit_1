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
// 
// 
// 
// 
// 
