/* 
	#1: 04/21/2018

	Write a function that takes in a string of one or more words, 
	and returns the same string, but with all five or more letter 
	words reversed (Just like the name of this Kata). Strings 
	passed in will consist of only letters and spaces. Spaces will 
	be included only when more than one word is present.

	Examples: spinWords( "Hey fellow warriors" ) => returns 
	"Hey wollef sroirraw" 

*/

// => My Solution:

const spinWords = (str) => {

	// Create a dedicated reverser function
	const reverser = (str) => {
		if (str.length > 4) {	
			let strArr = str.split('');
			strArr.reverse();
			return strArr.join('');
		} else {
			return str;
		}
	}

	if (str.includes(' ')) { // Check for sentences
		let strArr = str.split(' ');
		let strArrRev = [];

		// Reverse individual words in the provided sentence
		strArr.forEach((word) => {
			strArrRev.push(reverser(word));
		});

		return strArrRev.join(' ');
	} else {
		return reverser(str);
	}
}

// ==> Two nice solutions from codewars:

// Solution 1:
function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

// Solution 2:
function spinWords(str){
  return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
}

// ===> Things I'm picking from these
//
// * Continue brushing up on RegEx,
// * Learn more about the Array.prototype.map() & String.prototype.replace() methods,
// * Tenary operators are a thing. Find out more about them.


/* 
	#2: 05/08/2018

	Welcome.

	In this kata you are required to, given a string, replace
	every letter with its position in the alphabet.

	If anything in the text isn't a letter, ignore it and
	don't return it.

	a being 1, b being 2, etc.

	example:

	alphabetPosition("The sunset sets at twelve o' clock.")

	Should return: 

	"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
	as a string.

*/

// => My first solution:

const alphabetPosition = text => {
	// Init required variables
	let alpha = [null, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let strArr = text.split('');
	let result = [];

	strArr.forEach( char => {
		if (/[a-zA-Z]/.test(char)) { // Use regex to see if the character is an alphabet
			let currentChar = char.toLowerCase(); // Save scope
			alpha.forEach((char, pos) => { // Run the char through the alphabet array defined above
				if (char === currentChar) result.push(pos);
			});
		}
	});

	return result.join(' ');
}

// => My second solution - after seeing some solution and discovering
// that I could use the Unicode encoding.

const alphabetPosition = text => {
	// Init required variables
	let strArr = text.split('');
	let result = [];

	strArr.forEach( char => {
		if (/[a-zA-Z]/.test(char)) { // Use regex to see if the character is an alphabet
			char = char.toLowerCase();
			result.push(char.charCodeAt() - 96); // Lowercase alphabets start at 97
		}
	});

	return result.join(' ');
}

// => One solution I found interesting (by jimmy-ringo)

let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

/* 
	#3: 05/08/2018

	You might know some pretty large perfect squares. But 
	what about the NEXT one?

	Complete the findNextSquare method that finds the next 
	integral perfect square after the one passed as a parameter. 
	Recall that an integral perfect square is an integer n such 
	that sqrt(n) is also an integer.

	If the parameter is itself not a perfect square, than -1 
	should be returned. You may assume the parameter is positive.

	Examples:

	findNextSquare(121) --> returns 144
	findNextSquare(625) --> returns 676
	findNextSquare(114) --> returns -1 since 114 is not a perfect

*/

// => My Solution:

const findNextSquare = sq => {
	let x = Math.sqrt(sq);
	if (Math.floor(x) === x) { // See if arg is a perfect square
		x++; // Pave way for computing the next perfect square
		return (x*x);
	} else {
		return -1;
	}
}

// => An interesting one:

function findNextSquare(sq) {
    let r = Math.sqrt(sq)
    return r % 1 ? -1 : ++r * r
}

/*
	#4: 06/04/2018

	Define a function isPrime/is_prime() that takes one integer argument
	and returns true/True or false/False depending on if the integer is 
	a prime.

*/

// My Solution:

function isPrime(num) {
  if (num <= 1) return false;

  for(var i = 2; i < num; i++) {
    if (!(num % i)) return false;
  }
  
  return true;
}


/* 
	#5: 06/05/2018

	If we list all the natural numbers below 10 that are multiples of 3 
	or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

	Finish the solution so that it returns the sum of all the multiples 
	of 3 or 5 below the number passed in.

	Note: If the number is a multiple of both 3 and 5, only count it once.

*/

// My Solution:

const solution = number => {
  let sum = 0;

  for(let i = 0; i < number; i++) {
    sum += !(i % 3) && !(i % 5) ? i : !(i % 3) ? i : !(i % 5) ? i : 0;
  }

  return sum;
}

/*
	#6: 06/06/2018

	Write a function toWeirdCase (weirdcase in Ruby) that accepts a string,
	and returns the same string with all even indexed characters in each 
	word upper cased, and all odd indexed characters in each word lower 
	cased. The indexing just explained is zero based, so the zero-ith 
	index is even, therefore that character should be upper cased.

	The passed in string will only consist of alphabetical characters and 
	spaces(' '). Spaces will only be present if there are multiple words. 
	Words will be separated by a single space(' ').

*/

// My Solution:

function toWeirdCase(string){
  const weirdoMaker = word =>  {
    let strArr = word.split('');
    strArr.forEach((char, i, arr) => {
        arr[i] = i % 2 ? char.toLowerCase() : char.toUpperCase();
    });
    return strArr.join('');
  }
  
  return string.includes(" ") ? string.split(" ").map(weirdoMaker).join(" ") : weirdoMaker(string);
}


/*
	#7: 06/07/2018

	Write an algorithm that takes an array and moves all of the zeros to 
	the end, preserving the order of the other elements.

*/

// My First Solution:

const moveZeros = arr => {
	let zeroIndex = [];
	arr.forEach((char, i) => {
		if (char === 0) zeroIndex.push(i)
	});

	if (!zeroIndex.length) {
		return arr;
	} else {
		arr = arr.filter(char => char !== 0);
		for (var i = 0; i < zeroIndex.length; i++) arr.push(0);
		
		return arr;
	}
}

// My second solution after seeing other warriors' implementation: 

const moveZeros = arr => {
	return arr.filter(char => char !== 0).concat(arr.filter(char => char === 0));
}


/*
	#8: 06/08/2018

	This time we want to write calculations using functions and 
	get the results. Let's have a look at some examples:

		even(times(five())); // must return 35
		four(plus(nine())); // must return 13
		eight(minus(three())); // must return 5
		six(dividedBy(two())); // must return 3

	Requirements:

		- There must be a function for each number from 0 ("zero") to 
		9 ("nine")

		- There must be a function for each of the following mathematical 
		operations: plus, minus, times, dividedBy (divided_by in Ruby)
		
		- Each calculation consist of exactly one operation and two 
		numbers
		
		- The most outer function represents the left operand, the 
		most inner function represents the right operand
		
		- Divison should be integer division
*/

// My solution: 

const checker = (operation, right, left) => {
  switch (operation) {
    case 'mult':
      return left * right;
      break;
    case 'div':
      return Math.floor(left / right);
      break;
    case 'plus':
      return left + right;
      break;
    case 'minus':
      return left - right;
      break;
  }
}

function zero(arg) {return !arg ? 0 : checker(arg[0], arg[1], 0)}
function one(arg) {return !arg ? 1 : checker(arg[0], arg[1], 1)}
function two(arg) {return !arg ? 2 : checker(arg[0], arg[1], 2)}
function three(arg) {return !arg ? 3 : checker(arg[0], arg[1], 3)}
function four(arg) {return !arg ? 4 : checker(arg[0], arg[1], 4)}
function five(arg) {return !arg ? 5 : checker(arg[0], arg[1], 5)}
function six(arg) {return !arg ? 6 : checker(arg[0], arg[1], 6)}
function seven(arg) {return !arg ? 7 : checker(arg[0], arg[1], 7)}
function eight(arg) {return !arg ? 8 : checker(arg[0], arg[1], 8)}
function nine(arg) {return !arg ? 9 : checker(arg[0], arg[1], 9)}

function plus(x) { return ['plus', x] }
function minus(x) { return ['minus', x] }
function times(x) { return ['mult', x] }
function dividedBy(x) { return ['div', x] }
