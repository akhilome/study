# Lesson 1: Syntax

Interesting pointers I gleaned:

## On Variable Declaration

Employ the use of the `let` & `const` keywords for variable declaration over the `var` keyword (plus know the appropriate way to use them).

## On Template Literals

Template literals (`` `some string ${ ... some code ...} some more strings` ``) are now a thing. Making use of them over legacy string concantenation methods makes string interpolation effortless and less clunky. Plus when using them, no need for the `\n` character when in need of the text/string going to the new line, just hit the return key and shit gets recognized! For example:

```javascript
const curse = 'fucking';
const someSillyText = `This
  just
    proves
      my
        ${curse}
          point`;

console.log(someSillyText);
/* => logs:

This
    just
      proves
       my
         fucking
           point

to the console. */

```

## On Destructuring

Destructuring is also a thing I should be aware of. Here's how its done: 

**From Arrays:**

```javascript
let anArr = [1,2,3];
let [x, y, z] = [anArr];
console.log(y);

//=> logs 2 to the console
```

**From Objects:** 

```javascript
let anObj = {a: 11, b: 22, c: 33};
let {a, b, c} = anObj;

console.log(c);

//=> logs 33 to the console
```

## On Object Literals

Employ the use of [object literal shorthand](https://eslint.org/docs/rules/object-shorthand)

## On `for ... of` Loops 

I do not know how to explain this at the moment, but here's the code:

```javascript
const digits = [1,2,3,4,5,6,7,8,9];
for(const digit of digits) {
  if (!(digit % 2)) continue; // breaks and continues iterating if current digit is even 
  console.log(digit);
}

// => logs all odd numbers in the digits array to the console
```

## On new operators

Two operators to start using: [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and [Rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

