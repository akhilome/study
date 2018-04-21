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