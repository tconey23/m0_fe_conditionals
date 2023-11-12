// In the below exercises, write code that achieves the desired result. 
// To check your work, run this file by entering the following command in your Terminal: `node ifStatements.js`

// CHALLENGE 1
// Using the numQuarters variable defined below, determine if you have enough money to buy a gumball. A gumball costs two quarters.

// Right now, the program will print out both "I have enough money for a gumball" and "I don't have enough money for a gumball". 
// Write a conditional statement that prints only one or the other.
// Experiment with manipulating the value held within numQuarters to make sure both conditions can be achieved.

var numQuarters1 = 0;

if(numQuarters1 > 1){
console.log("I have enough money for a gumball");
}else{
console.log("I don't have enough money for a gumball");
}

var numQuarters2 = 5;

if(numQuarters2 > 1){
console.log("I have enough money for a gumball");
}else{
console.log("I don't have enough money for a gumball");
}

// CHALLENGE 2
// Using the variables defined below, write code that will tell you if you have the ingredients to make a pizza. 
// A pizza requires at least two cups of flour and sauce.

// You should be able to change the variables to achieve the following outputs:
// If cupsOfFlour = 1 and hasSauce = true, print "I cannot make pizza"
// If cupsOfFlour = 5 and hasSauce = false, print "I cannot make pizza"
// If cupsOfFlour = 2 and hasSauce = true, print "I can make pizza"
// If cupsOfFlour = 3 and hasSauce = true, print "I can make pizza"

// Experiment with manipulating the value held within both variables to make sure all above conditions output what you expect.

var cupsOfFlour1 = 1;
var hasSauce1= true;

if(cupsOfFlour1 > 1 && hasSauce1 === true){

console.log("I have the ingredients to make pizza")

}else{ console.log("I don't have the ingredients to make pizza")

}

var cupsOfFlour2 = 5;
var hasSauce2= true;

if(cupsOfFlour2 > 1 && hasSauce2 === true){

console.log("I have the ingredients to make pizza")

}else{ console.log("I don't have the ingredients to make pizza")

}




