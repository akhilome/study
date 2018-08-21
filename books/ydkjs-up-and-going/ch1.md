# Into Programming 

This chapter in the book mainly discusses common programming stuff beginners should be well aware of and versed with when starting out. The major things covered in this chapter include:

* What expressions and statements are in programming,

* Different operators which can be used when writing your programs,

* Importance of commenting your code as you write your programs and how to properly make those comments,

* What variables are and how they help programmers keep track of things as the program progresses,

* Conditionals may include: if statements, switch statements, 

* Loops can be: while loops, do while loops and for loops,

* More basic fundamentals like those. 

Some important concepts I grabbed from this chapter which I have not encountered before include:

* JS variables as constants are usually capitalized and have underscores between multiple words. For example: `var SPECIFIC_WEIGHT = 22.68;`

* New way of declaring constants in ES6:  

```javascript 

const CONSTANT_NAME = value;

```

  After the intial declaration of the constant, it can not be changed anywhere else within the program.

* 0 and "" (an empty string) are **falsy** values. Values not on the "falsy list" are **truthy**.  

* When falsy values are coerced into booleans, they result in `false`. Likewise, when truthy values are coerced, they resolve to `true`.

* The only major difference between the `while` loop and the `do ... while` loop is: if the looping condition is false, the `while` loop never runs while the `do ... while` loop runs just once. So essentially, in `while` loops the conditional is tested before the first iteration while in `do ... while` loops, the conditional is tested after the first iteration.

* `for` loops have 3 clauses within their syntax:  

  * The initiation clause,
  * The conditional test clause,
  * The update clause.

  for example:

```javascript 

for (init; condition; update) {

. . .

}

```

* Generally, all loop forms operate on the "repeat until condition fails" concept.

* _"Lexical Scope rules say that code in one scope can access variables of either that scope or any scope outside of it"_.


