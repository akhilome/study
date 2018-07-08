# Lesson 2: Functions

This lesson, according to the instructors, generally reviews the new features and changes available to the 'already powerful' JS functions, plus new easier and less clunky ways to do some pretty important things.

## On Arrow Functions

Arrow function expressions are now a thing, make judicious use of them where possible. 

Here's an illustration showing why using a arrow function (also known as **fat arrow** functions, just FYI) is more 'convinient' over the 'normal' way.

_The normal way_: 

```javascript
function getSquared(num) {
  return num * num;
}

getSquared(2); // returns 4
```

_The new 'fancy' way_:

```javascript
const getSquared = num => num * num;

getSquared(3); // returns 9
```

See? 

Less code.

Quick pointer though, arrow functions can be either written in a: 

* Concise body syntax, or
* Block body syntax.

The concise body syntax format is what was illustrated above (where there's no need to explicitly `return` the results). Using block body syntax, the `return` keyword is required.

### What is `this`?

The value of `this`, according to the Udacity lessons, inside of an arrow function is the value of `this` outside of the arrow function.

I know this explanation of `this` isn't clear enough, even for me, but I **promise** to do more brushing up in this area.

## On Default Function Parameters

Take the following function declaration:

```javascript
const amazingThings = (thing1, thing2) => `${thing1} and ${thing2} are amazing things!`;
```

Calling the function without passing in the exact required args result in something funny. Here:

```javascript
amazingThings('Me');

//=> returns "Me and undefined are amazing things!"
```

Enter, default function params.

Using default function parameters, this can be conviniently circumvented. Here:

```javascript
const amazingThings = (thing1 = 'Sleep', thing2 = 'Music') => `${thing1} and ${thing2} are amazing things!`;

amazingThings('Me');

//=> returns "Me and Music are amazing things!"

amazingThings('Me', 'You');

//=> returns "Me and You are amazing things!"

amazingthings();

//=> returns "Sleep and Music are amazing things!"

```

## On Creating Javascript Classes

There's now a `Class` keyword which can be used to make classes as thus: 

```javascript

class SuperHero {
  constructor(name, universe, powers) {
    this.name = name;
    this.universe = universe;
    this.powers = [...powers];
  }
}

```
To make an object using the prototype defined above:

```javascript

const antman = new SuperHero('Antman', 'MCU', ['Sacarsm', 'Shrinkability', 'Ocassional Stupidness']);

antman.universe // returns MCU

```

Also, child classes can be created based existing parents using the `extends` keyword as follows: 

```javascript 

class Child extends Parent {
  constructor () {
    super();
    // ....
  }

  // ...
}

```

The `super()` keyword seen above is used within the subclass to access properties present on the Parent class. Also worth pointing out is the fact that the `super` keyword can be used as both a function and an object within the subclass.

Finally, one must take note of the fact that in a subclass constructor, `super()` must be called before the `this` keyword can be used.
