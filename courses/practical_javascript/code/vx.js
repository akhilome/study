/* 
* 	Author: Kizito Akhilome
* 	Author URL: https://akhilo.me/
* 	Based on: Practical Javascript (https://watchandcode.com/p/practical-javascript)	
* 
*	These code snnippets fulfil the requirements
*	poised by the Practical JS course from version
*	3 onwards.
*
* 	Naming Conventions: v[x]r[y], where:
*
*	v = Version, r = Requirement, 
* 	x & y = variable numerical values.
*
* 	For instance, v3r4 means: Version 3, Requirement 4.
*/


var todoList = {
	todos: [], // v3r1: It should store the todos array on an object
	//* deprecated
	//
	// displayTodos: function() {
	// 	/* deprecated

	// 	// v3r2: It should have a displayTodos method
	// 	console.log("Current Todos: ", this.todos);

	// 	*/
	// 	console.log("Current Todos:");
	// 	if (this.todos.length === 0) {
	// 		console.log("Woot! Nothing to do."); // v5r2: .displayTodos should tell you if .todos is empty
	// 	} else {
	// 		for (var i = 0; i < this.todos.length; i++) {
	// 			// v5r3: .displayTodos should show completed
	// 			if (this.todos[i].completed === true) {
	// 				console.log("(x) ", this.todos[i].todoText /* v5r1: .displayTodos should show .todoText */);
	// 			} else {
	// 				console.log("( ) ", this.todos[i].todoText);
	// 			};
	// 		};
	// 	};
	// },
	addTodo: function(todo) {
		/* deprecated

		// v3r3: It should have an addTodo method
		this.todos.push(todo);

		*/

		// v4r1: todoList.addTodo should add objects
		this.todos.push({
			todoText: todo,
			completed: false
		});
	},
	changeTodo: function(index, todo) {
		/* deprecated

		// v3r4: It should have a changeTodo Method
		this.todos[index] = todo;

		*/

		// v4r2: todoList.changeToddo should change the todoText property
		this.todos[index].todoText = todo;
	},
	deleteTodo: function (index) {
		// v3r5: It should have a deleteTodo method
		this.todos.splice(index, 1);
	},
	toggleCompleted: function(index) {
		// v4r3: todoList.toggleCompleted should change the Completed property
		var todo = this.todos[index];
		todo.completed = !todo.completed;
	},
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		/* deprecated

		// v6r1: if everything's true, make everything false
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			};
		};

		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			};
		} else { // v6r2: Otherwise, make everything true
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			};
		};

		*/

		// v11r1 todoList.toggleAll should use forEach()
		todoList.todos.forEach(function(todo) {
			if(todo.completed == true) {
				completedTodos++;
			}
		});

		todoList.todos.forEach(function(todo) {
			if (completedTodos === totalTodos) {
				todo.completed = false;
			} else {
				todo.completed = true;
			}
		});
	}
}

/* deprecated

// v7r2 Clicking "Display Todos" should run todoList.displayTodos();

var displayTodosButton = document.getElementById('displayTodosButton');

displayTodosButton.addEventListener('click', function() {
	todoList.displayTodos();
});

// v7r3 Clicking "Toggle All" should run todoList.toggleAll();

var toggleAllButton = document.getElementById('toggleAllButton');

toggleAllButton.addEventListener('click', function() {
	todoList.toggleAll();
});

*/

// v8r0 Create a new object to house all methods

var handlers = {
	displayTodos: function () {
		todoList.displayTodos();
	},
	// v8r1: It should have working controls for .addTodo
	addTodo: function() {
		var addTodoInputText = document.getElementById('addTodoInputText');
		todoList.addTodo(addTodoInputText.value);
		addTodoInputText.value = '';
		view.displayTodos();
	},
	// v8r2: It should have working controls for .changeTodo
	changeTodo: function() {
		var changeTodoInputPosition = document.getElementById('changeTodoInputPosition');
		var changeTodoInputText = document.getElementById('changeTodoInputText');
		todoList.changeTodo(changeTodoInputPosition.valueAsNumber, changeTodoInputText.value);
		changeTodoInputPosition.value = '';
		changeTodoInputText.value = '';
		view.displayTodos();
	},
	// v8r3: It should have working controls for .deleteTodo
	deleteTodo: function(position) {
		// var deleteTodoInputPosition = document.getElementById('deleteTodoInputPosition');
		todoList.deleteTodo(position);
		// deleteTodoInputPosition.value = '';
		view.displayTodos();
	},
	// v8r4: It should have working controls for .toggleCompleted
	toggleCompleted: function() {
		var toggleCompletedInputPosition = document.getElementById('toggleCompletedInputPosition');
		todoList.toggleCompleted(toggleCompletedInputPosition.valueAsNumber);
		toggleCompletedInputPosition.value = '';
		view.displayTodos();
	},
	toggleAll: function () {
		todoList.toggleAll();
		view.displayTodos();
	}
}

var view = {
	displayTodos: function() {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		
		/* deprecated

		// v9r1: There should be an li element for every todo
		for (var i = 0; i < todoList.todos.length; i++) {
			var todosLi = document.createElement('li');
			var todo = todoList.todos[i];

			// v9r2: Each li element should contain todoText
			// v9r3: Each li element should show .completed
			if (todo.completed === true) {
				todosLi.textContent = '(x) ' + todoList.todos[i].todoText;
			} else {
				todosLi.textContent = '( ) ' + todoList.todos[i].todoText;
			}
			// v10r2: There should be a delete button for each todo
			todosLi.appendChild(this.createDeleteButton());
			// v10r3: Each li should have an id that has the todo position
			todosLi.id = i;

			todosUl.appendChild(todosLi);
		}

		*/

		// v11r2: view.displayTodos should use .forEach();
		todoList.todos.forEach(function(todo, position) {
			var todosLi = document.createElement('li');

			if (todo.completed === true) {
				todosLi.textContent = '(x) ' + todo.todoText;
			} else {
				todosLi.textContent = '( ) ' + todo.todoText;
			}

			todosLi.appendChild(this.createDeleteButton());
			todosLi.id = position;
			todosUl.appendChild(todosLi);
		}, this);
	},
	// v10r1: There should be a way to create delete buttons
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';

		return deleteButton;
	},
	// v10r4: Delete buttons should have access to the todo id
	setUpEventListeners: function () {
		var todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', function(event) {
			var elementClicked = event.target;
			// v10r5: Clicking delete should update todoList.todos and the DOM
			if(elementClicked.className === 'deleteButton') {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
}

view.setUpEventListeners();