# Function Versus Block Scope

* In javascript	function scopes such as: 

```javascript

function somethingGood() { 
	
	// Some awesome code ...

}

```

  are the most common units of scope variables and functions defined in these scopes are only available to scope and functions/scopes nested within. Functions/scopes outside the declared fucntion scope (e.g. the global scope) cannot "see" declared identifiers nested within.  

* Apart from function scoping, **block scopes**  `{ ... }` also exist. A code block in JS is generally any code which is enclosed with curly braces like so:  

```javascript

{
	// .. This is a code block
}

```

* Using mechanisms/keywords such as `let`/`const` makes identifiers declared with these blocks "scoped" to them. For example:  

```javascript

{
	let a = 5;
	console.log(a); // returns 5
}

console.log(a); // throws up a reference Error

```

* In the above code snippet, the identifier `a` is "invisible" to the global scope because the `let` keyword was used to define it within that block. Using `var` in place of `let` above, however, will "expose" `a` to the global scope.

**NOTE:** Both the `let` and `const` keywords were introduced in ES6.