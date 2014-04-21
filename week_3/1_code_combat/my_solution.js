// I worked on this challenge by myself
 
//First mission

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.moveDown();

this.attackNearbyEnemy();

//Grab the mushroom
 
 //go up
 //go right
 //go left
 //move up
 //attack
 
 this.moveUp();
 this.moveRight();
 this.moveLeft();
 this.moveUp();
 this.attackNearbyEnemy();
 
 //Drink me
 
 //move right
 //attack
 //move right
 //move down
 //move up
 //move right
 //attack
 
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();


//Taunt the guards

//move right
//attract ogre
//tell phoebe to attack
//tell phoebe to follow me
//go right
//go up
//go right
//attract ogres
//go down
//go right
//go up
//go right
 
this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveUp();
this.say("Attack!");
this.say("Follow me!");
this.moveDown();
this.moveRight();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

//Cowardly taunt

//run out to within 35m of ogres
//say something
//run back to safety

this.moveXY(51, 21);
this.say("Hey you!");
this.moveXY(70, 10);
 

//Commanding followers

//tell men to follow
//move to place of danger
//tell men to attack

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("Follow!");
moveXY(65, 44);
this.say("attack!");
 
// Reflection:

//I found this challenge exceedingly frustrating, not because it was difficult (the challenges were generally pretty
//trivial), but because the website kept freezing my browser and having me force a restart. There was too much going on
//on the page at once, and my computer could not handle it. The challenges I completed, however, were fairly interesting.
//I’m still not totally convinced it is a very efficient method of learning javascript. It uses an interesting analogy
//for objects, but I found creating my own level to be of much more help understanding the object-oriented philosophy
//in javascript.

// Write your reflection here.
