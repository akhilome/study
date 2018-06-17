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
    case 'mult': return left * right;
    case 'div': return Math.floor(left / right);
    case 'plus': return left + right;
    case 'minus': return left - right;
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

/* 
	#9: 06/08/2018

	You probably know the "like" system from Facebook and other 
	pages. People can "like" blog posts, pictures or other items. 
	We want to create the text that should be displayed next to 
	such an item.

	Implement a function likes :: [String] -> String, which must 
	take in input array, containing the names of people who like an 
	item. It must return the display text as shown in the examples:

		likes [] // must be "no one likes this"
		likes ["Peter"] // must be "Peter likes this"
		likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
		likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
		likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

	For 4 or more names, the number in and 2 others simply increases.
*/

// My solution:

function likes(names) {
  switch(names.length) {
    case 0: return "no one likes this";
    case 1: return `${names[0]} likes this`;
    case 2: return `${names[0]} and ${names[1]} like this`;
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default: return  `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

/* 
	#10: 06/11/2018

	Write a function, which takes a non-negative integer (seconds) as input and returns 
	the time in a human-readable format (HH:MM:SS)

	HH = hours, padded to 2 digits, range: 00 - 99
	MM = minutes, padded to 2 digits, range: 00 - 59
	SS = seconds, padded to 2 digits, range: 00 - 59
*/

// My solution (with some help from Stackoverflow): 

function humanReadable(seconds) {
  let h = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  
  h = h < 10 ? "0" + String(h) : String(h);
  m = m < 10 ? "0" + String(m) : String(m);
  s = s < 10 ? "0" + String(s) : String(s);
  
  return `${h}:${m}:${s}`
}

/*
	#11: 06/15/2018

	A pangram is a sentence that contains every single letter of the alphabet 
	at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" 
	is a pangram, because it uses the letters A-Z at least once (case is 
	irrelevant).

	Given a string, detect whether or not it is a pangram. Return True if 
	it is, False if not. Ignore numbers and punctuation.
*/

// My solution: 

const isPangram = string => {
  // No point moving on if provided string is less than 26 chars
  if (string.length < 26) return false;
  // A hashmap of some sort for storing each encountered alphabet, and the occurence number
  let tracker = {};
  // Loop over each lower cased character of the passed string
  for (let char of string.toLowerCase()) {
    if(/[a-z]/.test(char)) { // check if alphabet with regex
      // update the tracker
      tracker[char] = !tracker[char] ? 1 : ++tracker[char];
    }
  }
  // check the length of the keys in the tracker and return true if equal to 26
  return Object.keys(tracker).length === 26 ? true : false;
}


/*
	#12: 06/16/2018

	Given a string of words, you need to find the highest scoring word.

	Each letter of a word scores points according to it's position in 
	the alphabet: a = 1, b = 2, c = 3 etc.

	You need to return the highest scoring word as a string.

	If two words score the same, return the word that appears earliest 
	in the original string.

	All letters will be lowercase and all inputs will be valid.
*/

// My Solution:

const high = x => {
  if (!/\w/.test(x) || !x) return '';
  const wordScore = word => {
    let total = 0;
    for(let char of word) total += char.charCodeAt() - 96;
    return total;
  }
  let arr = x.split(' ');
  let scores = arr.map(word => wordScore(word));
  return arr[scores.indexOf(Math.max(...scores))];
}


/*
	#13: 06/17/2018

	When you divide the successive powers of 10 by 13 you get the 
	following remainders of the integer divisions:

	1, 10, 9, 12, 3, 4.

	Then the whole pattern repeats.

	Hence the following method: Multiply the right most digit of the 
	number with the left most number in the sequence shown above, the 
	second right most digit to the second left most digit of the number 
	in the sequence. The cycle goes on and you sum all these products. 
	Repeat this process until the sequence of sums is stationary.

	.....................................................................

	Example: What is the remainder when 1234567 is divided by 13?

		7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

	We repeat the process with 178:

		8x1 + 7x10 + 1x9 = 87

	and again with 87:

		7x1 + 8x10 = 87

	.....................................................................

	From now on the sequence is stationary and the remainder of 1234567 
	by 13 is the same as the remainder of 87 by 13: 9

	Call thirt the function which processes this sequence of operations on 
	an integer n (>=0). thirt will return the stationary number.

	thirt(1234567) calculates 178, then 87, then 87 and returns 87.

	thirt(321) calculates 48, 48 and returns 48

*/

// My first working implementation:

function thirt(n) {
  const arrayfier = num => {
    return String(num).split('').reverse().map(x => Number(x));
  }
  let rems = [1, 10, 9, 12, 3, 4];
  let remsForUse = [...rems];
  for (let i = 0; i < Math.floor((arrayfier(n).length)/6); i++) {
    remsForUse = remsForUse.concat(rems);
  }
  let output = n;
  const runner = n => {
    let num = arrayfier(n);
  
    let out1 = num
      .map((x, i) => {
        return x * remsForUse[i];
      })
      .reduce((a, b) => a + b);
  
    return out1;
  }
  
  do {
    output = runner(output);
  } while (output !== runner(output));
  
  return output;
}

//* I'd most definely be comming back to refactor this.