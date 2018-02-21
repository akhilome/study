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

* To fully imbibe **scope**, the concept of 'circles and arrows' should be employed. Simply put, once a function has been written, a circle should be drawn around it and arrows can only go out, not in. These arrows going out are simply the function trying to use a variable outside its 'circle'.

* A function can be a property of an object. A function inside of an object is normally called a **method** in JS. Illustrating:  

```javascript

var person = {
	name: "Kizito",
	country: "Nigeria",
	sayCountry: function() {
		console.log(this.country);
	}
}

person.sayCountry(); // outputs "Nigeria"

```

The `this` keyword used in the function within the "person" object refers to the person object (I don't know if that sentence makes sense). So, just like `person.name` would output "Kizito", `this.name` within a function in the object also outputs "Kizito".  

