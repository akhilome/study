/* 
* 	Author: Kizito Akhilome
* 	Author URL: https://akhilo.me/
* 	Based on: Practical Javascript (https://watchandcode.com/p/practical-javascript)	
* 
*	These code snnippets fulfil the version 2
*	requirements poised by the Practical JS
*	course.
*/

// Req. 1: It should a function to display todos

function displayTodo() {
	console.log("Current Todos: ", todos);
}

// Req. 2: It should have a function to add todos

function addTodo(newItem) {
	todos.push(newItem);
	displayTodo(); // Displays updated todo list after addition of new Item.
}

// Req. 3: It should have a function to change todos

function changeTodo(index, newItem) {
	todos[index] = newItem;
	displayTodo();
}

// Req. 4: It should have a function to delete todo

function deleteTodo(index) {
	todos.splice(index, 1); // deletes just one item in the todos array depending on the index passed into the function
	displayTodo();
}

// Additional Requirement (by me): It should have a function to delete more than one todo.

function deleteTodos(index, amount) {
	todos.splice(index, amount); // deletes the amount of items specified starting fromt he index specified.
}