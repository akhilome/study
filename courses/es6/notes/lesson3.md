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

