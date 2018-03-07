# Hoisting

Considering the following code snippet:

```javascript

console.log(a); // outputs undefined

var a = 5;

```

Contrary to 'conventional wisdom', the `console.log` statement outputs `undefined` instead of a Reference Error or the value `5` because of something the author refers to as **Hoisting**.

He, the author, that is, states that although it may seem like the JS engine run the code from top to bottom of the file (much like how cascading styles work), but thanks to the compiler he previously asserted JS has, variable declarations (function declarations too) are "hoisted" to the top of the file.

It is important to note that while declarations are hoisted to the top of the code, assignments stay in place.

The code snippet at the top of this md can be translated into the following, when hoisting is taken account of:

```javascript

var a; // declarations hoisted to top of file

console.log(a); // outputs undefined because the engine cannot find a value in the identifier yet

a = 5; // assignments are not hoisted

```

Another example illustration hoisting, but this time with functions:

```javascript

foo();

function foo() {
	console.log(a); // outputs undefined
	var a = 2;
}

```

Taking hoisting into consideration, the above snippet can be rewritten as:  

```javascript

function foo() { // function declaration is hoisted to the top of the file

	var a; // another declaration hoisted to the top

	console.log(a); // there's nothing in a at the moment

	a = 2; // assignment stays in place.

}

```

**Important** to note is that while function declarations are hoisted, function expressions (such as `var foo = function (){ ... };`) are not. Taking an example:

```javascript

baz(); // throws up a TypeError

var baz = function () {
	console.log("Hoisted!");
}

```

As indicated above, the statement `baz();` throws up a TypeError: `baz is not a function` because, taking hoisting into consideration and the fact that function expressions are not hoisted, `baz`, at that point, is just an empty variable. With hoisting in mind, this is what the previously snippet actually translates to:  

```javascript

var baz; // variable declarations are hoisted to the top

baz(); // Opps! baz is still just a mere variable, an empty one at that!

/*
*	this assignment never get the chance to be done
* 	since code execution stops at the previous line
* 	where the engine encounter an error
*
	baz = function () {
		console.log("Hoisted!");
	}
*/

```

However, `baz()` declared as a function (_not_ a function expression) using the same code above would produce a different result. Here, see this:  

```javascript

baz(); // outputs "Hoisted!"

function baz() {
	console.log("Hoisted!");
}

```

The above snippet runs without errors because, again, function declarations are hoisted to the top of the file. So what actually happened under the hood could be synonymous to this:  

```javascript

function baz() { // function declaration hoisted to the top
	console.log("Hoisted!");
}

baz();

```

**One More Important Thing to Note**: In a file containing both function and 'normal' variable declarations for a single identifier/variable name, the functions are hoisted first. An illustration:  

```javascript

typeof(bar); // outputs "function"

var bar = "Help";

function bar() {
	console.log("Don't Help");
}

```

Even though a 'normal' variable declaration was made first by the author, the identifier `bar` still holds a `function` instead of a `string`. Why? because this happened:  

```javascript

function bar() { // functions are hoisted first!
	console.log("Don't Help");
}

// var bar = "Help"; // this is ignored as 'duplicate'

typeof(bar);

```

A final takeaway from this chapter is the fact that the author states that the statement `var a = "something";` should stop being looked at as 'just' one statement as the javascript engine actually sees it as two: A declaration (`var a;` - compiler phase task) and an assignment (`a = "something";` - execution phase task).