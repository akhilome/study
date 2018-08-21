# Concise Notes from Practical Javascript

This md contains brief pointers on new concepts I encounter as I go through the [Practical Javascript](https://watchandcode.com/p/practical-javascript) course. [Click here](code/) to see a live version of the app built.

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

## Javascript Data Types and Comparison.

* Javascript Data types can be considered to be divided into two major categories: **Objects** and **Primitives**.

* Objects include things such as:  
  
  * **Objects**: `var newObj = { ... };`,  
  * **Arrays** `var newArr = [ ... ];`, and  
  * **Functions** `function newFunc() { ... };`.

* Primitives include things such as:  

  * **Strings**: `var newStr = "Hey! I'm a string";`
  * **Numbers**: `var newNum = 69;`
  * **Boolean**: `var newBoo = false;`
  * **Undefined**: `var newVar;` (_Generally, a value that hasn't been set yet_)
  * **Null**: `var nullVar = null;`

* Comparing two primitive values would work as you'd normally expect. I.e. `2 === 2` would return `true` likewise would `"name" === "name"` and even `undefined === undefined`.

* Comparing two objects is not as straightforward. This is because when doing the comparison, contrary to what is done for primitives where the actual values are compared, each object's memory address is compared. For example:  

```javascript

var obj1 = {
	id: 66
}

var obj2 = {
	id: 66
}

console.log(obj1 === obj2); // returns false

```

* In the snippet above, `false` is logged to the console because, despite the fact that both `obj1` and `obj2` contain **exactly** the same code, their memory addresses are different and it's that memory address that the variables (`obj1`, and `obj2`) are holding, not the object itself.

* If one were to continue and do the following:  

```javascript

var obj1 = {
	id: 66
}

var obj2 = {
	id: 66
}

console.log(obj1 === obj2); // returns false

var obj1_1 = obj2; 

console.log(obj2 === obj1_1) // returns true

```

* `obj1_1 === obj2` returns true because in the previous line, the memory address stored in `obj2` was taken and stored in `obj1_1` so, when compared, they hold **the same memory address** and hence return true.

## HTML and The DOM

* **DOM**: **D**ocument **O**bject **M**odule - A way for the browser to organize HTML documents using a tree structure.

* The DOM can be accessed in Javascript using the `document` keyword.

* To gain access to **a specific** element on a HTML page in JS: 

```javascript

var getAccess = document.getElementById('elementsId');

// Event Listeners can be added so that the HTML element does something when something happens to it:

getAccess.addEventListener('click', function(){
	someAwesomeFunction();
});

```

* If you wan to interact with things on an HTML page in JS, the script tag (`<script></script>`) should be placed **after** the element - ideally, before `</body>`.

* The chrome developer tools has a debugger that can be (_should be_ used to see how your code is being executed. It can be "invoked" by typing in `debugger;` into the line of code you want to start debugging from. For example:  

```javascript

var aNumber = 99;
debugger;
if (aNumber > 100) {
	console.log("Gargantuan!");
} else {
	console.log("Minuscule");
}

```

* In the example above, the debugger pauses at line 2 in the dev tools and "grants access" to be able to run each line individually and seeing what happens.

### Important Advice from the Instructor

Gordon, the intructor/author of the course, advices that we, the students, "**_Focus on understanding and stop worrying about building things from scratch_**". This quote might not make sense to you reading this without context, but it does to me. Need context, watch [this video](https://watchandcode.com/courses/practical-javascript/lectures/2292494) from the course.

### Refactoring Old Code.

* Refactoring code generally involves rewriting old code in a program to make it clearer and easier to understand without altering the program's original functionality (while using the old code).

### On Functions

* Functions cann be passed into other functions.

* Arrays have a `.forEach()` method which does the job of looping over each element contained in the array. An example: 

```javascript

var anArr = ["One", "Two", "Three"];

anArr.forEach(function(element) {
	console.log(element); // logs every element contained in the array to the console individually
});


```

* **Higher Order Functions**: These kinds of functions accept other functions as arguments and they generally "enhance" the behaviour of other functions.  

* **Callback Function**: These are generally the functions which are passed into higher order functions.  

* _Javascript Event Delegation_ is a useful thing to master. Read more about it.  

#### On Constructor Functions

* Constructor functions function name are usually capitalized like so:  

```javascript

function Country(name) {
	this.name = name;
}

```

* When a constructor function is called using the `new` keyword, an empty object is created automatically.  