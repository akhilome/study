## Week 2: Using Javascript to Create Dynamic, Data-Driven Web Pages

This week we get a breif introduction to the Javascript language and how to use it within webpages.

### Javascript Variables

* Viewing a variable's value in the browser:

  * `document.write(varName);`
  * `console.log(varName);`
  * `alert(varName);`
  
* Variable types in JS:

  * Numbers
  * Strings
  * Booleans
  * Null
  * Undefined

### Javascript Arrays and Objects

* Arrays are used to store a list of values in a single variable which are split with commas and wrapped in square brackets. For example:  
  `newArray = ['thing1', 'thing2', 3, true];`
  
* Elements within an array can be accessed using the using a zero-based index. For example:  

```javascript

var newArr = ['I', 'am', 'finally', 'learning', 'a', 'programming', 'language'];

// console.log(newArr[0]) will output the string 'I'

// document.write(newArr[4]) will output 'a'

```

* Elements within the array can be changed as well using their index. For example, using the `newArr` created above, `newArr[2] = 'actually';` will change `'finally'` in the originally created array to `'actually'`. So from there on out, anytime one tries to `console.log(newArr[2]);`, the output would be `'actually'`

* Elements can be added to an array using the `push()` and `unshift()` methods.
  * `push()` add elements to the end of the array
  * `unshift()` adds elements to the beginning of the array. For example, using `newArr` created above:
  
```javascript

newArr.push('Wow!');

console.log(newArr);

// output >> ["I", "am", "finally", "learning", "a", "programming", "language", "Wow!"]

newArr.unshift('Guess what?');

console.log(newArr);

// output >> ["Guess what?", "I", "am", "finally", "learning", "a", "programming", "language", "Wow!"]

```

* Elements can also be removed from an array using the following methods:  
  * pop() removes elements from the end.
  * shift() removes elements from the beginning

* Worth noting is: when an element is removed from an array using any of the aforementioned methods, the element removed is returned into the console. So one can save the popped off element into a new variable or, hell!, into another array! Here's an illustration:  

```javascript

var Arr1 = [1, 2, 3, 4, 5];

var hodler1 = Arr1.pop();

console.log(hodler1);

// output >> 5

console.log(Arr1);

// output >> [1, 2, 3, 4]

var Arr2 = [];

Arr2.push(Arr1.shift());

console.log(Arr2);

// output >> [1]

console.log(Arr1);

// output >> [2, 3, 4]

```

* Javascript __objects__ are used to store key-value pairs which can be of any type including arrays and even objects.

* Values in the object are known as properties and can be accessed using the .property notation or array notation (objectName['property']). For example:  

```javascript

var kizito = {
  gender: 'Male',
  age: 21,
  nationality: 'Nigerian',
  colors: ['Blue', 'Purple', 'Green']
};

console.log(kizito.age);

// output >> 21

```

* Much like Arrays, after a JS object has been initialized, more properties can be added to it.

### Javascript Control Structures

* Conditional statements: `if () { ... } else { ... }`

* Comparison and Logical operators:  
  * `==`: equal to
  * `===`: equal to and same type
  * `!=`: not equal to
  * `!==`: not equal to or different type
  * `>`
  * `>=`
  * `<`
  * `<=`
  * `||`: logical OR
  * `&&`: logical AND
  * `!`: logical NOT

* Loops can be a:  
  * for loop: `for ( ... ) { ... }`
  * while loop: `while ( ... ) { ... }`
  * do while loop: `do { ... } while ( ... );`

### Javascript Functions

* To create a function in Javascript, the `function` keyword is used alongside the function nanme and accepted arguments, if any, like so:  

```javascript 

function newFunc (arg1, arg2, ... argX {

. . . 

// Code goes here

. . .

};

```

* To apply functions to Arrays without using loops, various [array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), like [.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), e.t.c, exist.

* _The instructor is mentioning something about prototypes, using the `this` and `new` keywords, but I'm having slight issues wrapping my head around what he is saying at the moment. I am sure I'd get a hang of it eventually as I thumb through other resources (like the YDKJS books I am yet to devour). For now, let me keep forging ahead._

* _Another foreign concept (for now). He's talking about __inheritance__ -- about how a prototype can extend another prototype with more functionality. I'd get this eventually, I'm certain. For now, I'll keep playing along._

### Javascript Regular Expressions

* Javascript strings are __Immutable__

* `string.length`: number of characters in a string.

* `string.charAt(n)`: Access each char. in a string by a 0-based index. i.e. 

```javascript

var name = "My Name";

console.log(name.charAt(3));

// output >> N

```

* [String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) -- check them out. The few touched on in this video include:  
  * `.toUpperCase()`
  * `.trim()`
  * `.concat('')`
  * `.startsWith('')`
  * `.endsWith('')`
  * `.includes('')`
  * `.search ('')`

*  A regular expression is a pattern of characters.

* RegEx can be parsed into a string's `.search()` function to see if it matches the pattern.

* regex in JS have the `.test()` function which operates as follows:  

```javascript

var phoneNum = '2348131132744';

// A regex checking if the num contains 234

/234/.test(phoneNum);

// output >> true

```

* Ranges can also be specified in regex. `/[0427]/` means any char in the square bracket, `/[a-z]/` means any char from a (lowercase) to z.

* Special characters other than string literals have their notation in regex. e.g. fork digits, `\d` is used. I.e. when looking for a digit in a string, `/\d/.test(string);` or `string.search(/\d/);` is applicable.

* Different ranges can be combined as well. For example:  

```javascript 

var someString = 'gh48bdsnew9d84n';

// test for a digit-letter-digit character sequence within the string

/[0-9][a-z][0-9]/.test(someString);

// output >> true

someString.search(/[0-9][a-z][0-9]/); // second format

// output >> 10

```

* For chars not in a particular range:
  `/[^0-9a-z]/`: this looks for UPPERCASE letters.

* Regex [_quantifiers_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#quantifiers) (e.g. `x?` - "single optional", `x*` - "multiple optional") may also be used.

* Regex startsWith: `/^[a-z][0-9]/`: does the string being tested start with a lowercase letter followed by a digit? if yes, `true`, else `false`.

* Regex endsWith: `/[a-z][0-9]$/`: does the string being tested end with a digit followed by (reading backwards) a lowercase letter? if yes, `true`, else `false`.

* For __exact__ matches, these hold true:
  * `/^[a-z][0-9][a-z]$/`: _pattern:_ [1 lowercase letter]-[1 digit]-[1 lowercase letter] returns `true`, all else `false`
  * `/^[a-z][0-9a-z]*[0-9]$/`: _pattern:_ [1 lowercase letter]-[any amount of lowercase letters or digits]-[1 digit] returns `true`, all else `false`.

