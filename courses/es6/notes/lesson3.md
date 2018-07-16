# Lesson 3: Built-Ins

Lesson 3 essentially focuses on the entirely new built in features baked into the language starting from ES6.

## On Symbols

Symbol is a new primitive javascript datatype. They unique and immutable, often used to identify object properties.

## On Sets

A `Set` is a collection of distinct items -- i.e. a `Set` cannot have more than one occurence of a particular item.

To make a new `Set`:

```javascript
const aSet = new Set();
```

or: 

```javascript
const anotherSet = new Set([1, 2, 3]);
```

To add or remove items from a set, the following methods are used:

  * `.add()` - add passed item to set.
  * `.delete()` - deletes the passed item from the set.
  * `.clear()` - deletes all items from the set.

_**Important to Note**_: `.add()` returns the Set if an item is successfully added, `.delete()` return a Boolean depending on successful deletion.

Other important `Set` methods/props to be aware of:

  * `.size` - to check the 'length' of the set,
  * `.has()` - checks if passed value exists in the set,
  * `.values()`/`.keys()` - returns a `SetIterator`,

Finally, a `for ... of` loop can be used to loop over a set.

### On WeakSets

These:
  * contain only objects, 
  * are not iterable,
  * donot have the `.clear()` method.

For creation of a weak set, the WeakSet constructor is used as thus:

```javascript
const weakOne = new WeakSet();
```

Worth noting is that to remove an object from a weak set, the object's identifier should be set to `null`. On doing that, Javascript's 'Garbage collector' automatically removes the object's identifier from the weak set.

## On Maps

Maps are collection of key-value pairs, where either the keys/values can be primitives or objects, or a combo of both. To create a Map:

```js
const myFirstMap = new Map();
```

To add new items to a map, the Map's `.set()` method is used as follows:

```js
myFirstMap.set(key, value);
```

For example:

```js
const map1 = new Map();
map1.set('item 1', 'value 1');
```

Other important methods possessed by a Map include:

  * `.delete()` - removes passed key's key-value pair from the Map.
  * `.clear()` - removes all key-vale pairs from the Map.
  * `.get()` - returns the value of the passed in key.
  * `.has()` - checks if a key-value pair exists by passing in a key.

_**Important to Note**_: Upon setting a key-value pair on a Map using an already existing key, the current/existing value would be overwritten and no error would be returned. Think of this as a way of 'updating' the key.

Maps can be iterated over using:

  * MapIterator - by creating a new iterator object from the `.keys()`/`.values()` and using `.next()` to move from one member of the Map to the next.
  * `for ... of` loop - returns an array with two items where item 1 (index 0) is the key, and item 2 (index 1) is the value.
  * `.forEach()` method - takes a function which takes two args where arg1 - value and arg2 - key.

### On WeakMaps

Just like WeakSets, WeakMaps exist too. Also, similar to WeakSets, WeakMaps:

  * can only contain objects as keys,
  * are not iterables,
  * do not have the `.clear()` method.

To create a new WeakMap:

```js

const weakOneTwo = new WeakMap();

```

Again, be aware that WeakMaps can only contain objects as keys. Passing anything other than an object in the WeakMap's `.set()` method results in a `TypeError`.

## On other built-ins

### Promise

A Javascript `Promise` is the new way to handle asynchronous requests (_more reading is needed on this_).

### Proxies

Javascript proxies let an object 'stand in' for another object to handle interactions for that other object.

For creating new proxies, the `new Proxy()` constructor is used which can accept two arguments as follows:

```js
const awesomeObject = {property1: 'value 1'};
const handler = {
  get(target, property) { // a 'trap'
    console.log('My oga is busy, call back later');
  }
};

const sweetProxy = new Proxy(awesomeObject, handler);

sweetProxy.property; //=> My oga is busy, call back later

```
The first argument is the object being proxied and the second is the handler object.

As also seen above, the handler object consists 'traps'. These traps intercept calls to the proxied object.

### Generators

They are pausable functions which, unlike 'normal' javascript functions (which run from top-to-bottom or until a `return` keyword), can be paused mid-execution.

Generator functions have an asterisk (`*`) placed between the `function` keyword and the function name as follows:

```js
function* aGenerator() { ... }
```
It should be noted that just calling a generator function (e.g. `aGenerator();`) returns an iterator object.

The `yield` keyword, when used within the generator function, causes the function execution to 'pause'.

Also, the `yield` keyword (coupled with `.next()`) can be used to send data into the generator function, while just the `yield` keyword can be used to get data out of the generator function (synonymous to `return`ing data from a normal function).
