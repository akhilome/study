# Scope Closure

Closures generally happen as a result of writing code that relies on lecical scope.

Closure is when a function can remember ancd access its lecical scope even when it is invoked outside its lexical scope.

It basically allows functions to continue to access the lexical scope it was defined in at author-time.

Using the `let` keyword in a for loop instead of `var` for declarign the `"i"` variable, block scope and closure work hand in hand to circumnavigate any semantic errors that would have been encountered otherwise.

Modules also leverage the power of closures.

For the module pattern to be exercised:

  * There must be an outer enclosing function, and it must be invoked at least once.
  * This outer enclosing function must return back at least one inner function, so that this inner function has closure over the private scope and can access and/or modify that private state.


# Appendices

The notes below appear in the numerous appendicies that are contained in the book after the final chapter.

## On Dynamic vs Lexical Scope

Lexical scope is write-time, while dynamic scope is runtime.

What this implies is that in lexical scope is statically defined by the author at wirte time, while dynamic doesn't care which scope it was written in, it on concerns itself with which 'resources' as closest to it at runtime -- think call stack.

## On Lexical `this`

The concept of Lexical `this` was introduced in ES6, by fat arrow functions.

Lexical `this` takes on the `this` value of their immediate lexical enclosing scope, whatever that scope is.
