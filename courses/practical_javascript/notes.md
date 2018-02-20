# Concise Notes from Practical Javascript

This md contains brief pointers on new concepts I encounter as I go through the [Practical Javascript](https://watchandcode.com/p/practical-javascript) course.

* Arrays in Programming are synonymous to lists in the real world.

* `array.splice()` deletes existing members of an array. The `.splice()` method accepts two variables: a start point and the number of items to be deleted. Say, for example, you have the following array:

```javascript

var anArr = [1,3,9,4,5];

```
  using `anArr.splice(2,1)` deletes `9` (third item in the array counting from 0).

* After splicing, logging `anArr` to the console again reveals that the array has been altered. i.e.

```javascript

console.log(anArr) // outputs [1,3,4,5]

```

