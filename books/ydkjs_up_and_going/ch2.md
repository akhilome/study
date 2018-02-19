# Into Javascript  

* The JS `typeof()` operator can be used to examine the type of a value. For example:  

```javascript

var nameTag = 69;

typeof(nameTag); // > Outputs "number"

```

* Only values have type in JS. Variables are just simply containers.

* In JS, Arrays are considered a subtype of Object. Even doing the `typeof()` test on an array returns `"object"`.

* The _falsy list_ is as follows:  

  * "" (empty string)  
  * 0, -0, NaN,  
  * null, undefined
  * false  

  All else, when coerced, return `true` and are hence called _truthy values_.  

* Much like how using the `var` keyword while creating variables within a function limits the scope in which the variable is valid to the function and its children, ES6 introduced the `let` keyword which enables **"Block Scoping"**. For example,  

```javascript

var a = 1, b = 2, c = 3;

if (b>a) {
    let c = 5;
    console.log(c);
} //> outputs 5 

console.log(c); //> outputs 3

```

* Sometimes, it makes far more sense to employ the `switch` conditional instead of chaining numerous `if ... else if ... else` statements.

* To use _"Strict Mode"_ (introduced in ES5), the `"use strict";` expression should be added to the desired scope.

* Functions can be used as values which can be parsed into other functions and even be stored as variables.

* Functions can be immediately invoked as soon as they've been declared by following this format:  

```javascript

(function someFunction() {
    
    // ... some code ...

})();

```
  The important thing to note there is the presence of parenthesis wrapping the function statement another another set of parenthesis immediately after the statement.  
  The function above operates identical to:  

```javascript

function someFunction() {

// ... some code ...

}

someFunction();

```

  Functions declared following the above format are referred to as _Immediately Invoked Function Expressions (__IIFEs__)_.

* All I can grasp from the concept of **Closure** (for now) is the fact that it's mostly about _rememberance_. Let me explain as best I can from my very limited exposure to closures.

  Generally I know that from the concept of _Lexical Scopes_, when a variable is created within a function using the `var` keyword, that variable is only valid, it only "exists", within that function and all other child functions of it.

  Since child functions of the parent function housing the variable in question can access the variable, they are said to have closure over the variable.


