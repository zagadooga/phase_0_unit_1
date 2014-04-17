// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Matias Meneses    
//  2.Alec Ashford


// 1. "YOU SIGNED... WHO?!"

var tomHanks = {
    name: "Tom Hanks",
    age: 58,
    quote: "Lt. Dan! You got new legs!"
};

// 2. "Here they Come!"
var adamSandler = {
    name: "Adam Sandler",
    age: 45,
    quote: "That's your home! Are you too good for your home?!"
};

var kristenBell = {
  name: "Kristen Bell",
  age: 33,
  quote: "Do you want to build a snowman?"
};


var jimCarrey = {
  name: "Jim Carrey",
  age: 52,
  quote: "...so you're telling me there's a chance? YEAH!"
};


// 3. "TIME IS MONEY!"

//YOUR CODE HERE!
clientList = [tomHanks, adamSandler, kristenBell, jimCarrey, shooterMcGavin];

function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
console.log(shooterMcGavin.constructor === Client);
console.log(shooterMcGavin.age === 48);
console.log(shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.");





// 4. "SHOW 'EM OFF!"

  for (i=0; i<clientList.length; i++) {
  console.log("name: " + clientList[i].name + ", age: " + clientList[i].age + ", quote: " + clientList[i].quote);
}


// ** BONUS **


//  Your Reflection:
