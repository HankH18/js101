
// Example

// The purpose of this first exercise is just to show how 
// assertions work and how the homework should be carried out. 
// We'll do it together in class.

// Part EXAMPLE

// Write a function called addOne() that returns the input number, plus one. 

var addOne = function(num) {
	return num + 1
}

// Part 1

// Fix the following code so doubleNum(2) wil equal 4. 

var doubleNum = function(num) {
	return num * 2
}

/**
 * PART 2
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */
var sum = function(num1,num2) {
	return num1 + num2
}

// PART 3

// Write a function called average that takes two numbers
// as inputs and returns the average of the two. To avoid
// repeating yourself, use your sum function inside 
// of your average function.
var average = function(num1,num2) {
	return sum(num1,num2)/2
}

// Part 4

// Write a function called isNegative that will tell 
// whether a number is negative or not.
var isNegative = function(num) {
	if num < 0 {
		return true
	}
	else {
		return false
	}
}

// Now, modify your sum function again, so that it 
// will return null if any of the inputs is negative.
// To avoid repeating yourself, use your isNegative 
// function inside your sum funciton ***
sum = function(num1,num2) {
	if (isNegative(num1) === true || isNegative(num2) === true) {
		return null
	}
	else {
		return num1 + num2
	}
}

// Part 5

// Write a function that will find the minimum of four 
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).
var minimum = function(num1,num2,num3,num4) {
	if (num1 <= num2 && num1 <= num3 && num1 <= num4) {
		return num1
	}
	else if (num2 <= num1 && num2 <= num3 && num2 <= num4) {
		return num2
	}
	else if (num3 <= num1 && num3 <= num2 && num3 <= num4) {
		return num3
	}
	else {
		return num4
	}
}

// Part 6

// Using logical operators, write a function that will
// return true if either input is a string, but not 
// both or neither. 
var isOneString = function(input1,inpu2) {
	if (typeof input1 === 'string' && typeof input2 === 'string') {
		return false
	}
	else if (typeof input1 != 'string' && typeof input2 != 'string') {
		return false
	}
	else {
		return true
	}
}

// HARD MODE

// Part 7

// Write a function called doTwice that takes as input a 
// function and invokes that function twice. 

// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.

var doTwice = function(func) {
	for (i=0; i<2; i++) {
		return func
	}
}

var helloWorld = function() {
	console.log('hello world')
}


doTwice(helloWorld) // should print 'hello world' to the console twice. 


// Part 8

// Write a function called conditionallyInvoke that takes a function
// as input. It should invoke that input function only if 
// the value of a certain global variable, called ORACLE, is 
// "YES." Otherwise, it will does nothing.

var conditionallyInvoke = function(func) {
	if (ORACLE === 'YES') 
}

var ORACLE = 'NO'

conditionallyInvoke(helloWorld) // should do nothing

var ORACLE = 'YES'

conditionallyInvoke(helloWorld) // should print hello world


// EPIC MODE

// For parts 9 through 11, your only instructions are to make the tests pass.

// Part 9

var factory = function() {

}


// Part 10

var factory2 = function() {
	// you want more?
}
	
// Part 11

var factory3 = function(stuff) {
	// This can't be healthy...	
}

