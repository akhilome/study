/* 
* 	Author: Kizito Akhilome
* 	Author URL: https://akhilo.me/
* 	Based on: Practical Javascript (https://watchandcode.com/p/practical-javascript)	
* 
*	These code snnippets fulfil the version 1
*	requirements poised by the Practical JS
*	course.
*/

// Req. 1: It should have a place to store Todos

var todos = [];

// Req. 2: It should have a way to display todos

console.log(todos); // outputs an empty array.

//Req. 3: It should have a way to add new todos

todos.push("New Todo"); // Using the array push method

// Req. 4: It should have a way to change a Todo

todo[0] = "Another New Todo" // Using the index number of each item in an array to change a value in the array since Arrays in JS are mutable.

// Req. 5: It should have a way to delete a todo.

todo.splice(0, 1); // Using the array splice method