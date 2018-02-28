/* 
* 	Author: Kizito Akhilome
* 	Author URL: https://akhilo.me/
* 	Based on: Practical Javascript (https://watchandcode.com/p/practical-javascript)	
* 
*	These code snippets fulfil the requirements
*	poised by the Practical JS course
*/


var todoList = {
	todos: [],
	addTodo: function(todo) {
		this.todos.push({
			todoText: todo,
			completed: false
		});
	},
	changeTodo: function(index, todo) {
		this.todos[index].todoText = todo;
	},
	deleteTodo: function (index) {
		this.todos.splice(index, 1);
	},
	toggleCompleted: function(index) {
		var todo = this.todos[index];
		todo.completed = !todo.completed;
	},
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;

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

var handlers = {
	addTodo: function() {
		var addTodoInputText = document.getElementById('addTodoInputText');
		todoList.addTodo(addTodoInputText.value);

		addTodoInputText.value = ''; // Make input field blank after data submission

		view.displayTodos();
	},
	changeTodo: function() {
		var changeTodoInputPosition = document.getElementById('changeTodoInputPosition');
		var changeTodoInputText = document.getElementById('changeTodoInputText');
		todoList.changeTodo(changeTodoInputPosition.valueAsNumber, changeTodoInputText.value);

		changeTodoInputPosition.value = '';
		changeTodoInputText.value = '';

		view.displayTodos();
	},
	deleteTodo: function(position) {
		todoList.deleteTodo(position);
		view.displayTodos();
	},
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
		todosUl.innerHTML = '';  // Make HTML container empty before repopulating

		todoList.todos.forEach(function(todo, position) {
			var todosLi = document.createElement('li');

			if (todo.completed === true) {
				todosLi.textContent = '(x) ' + todo.todoText;
			} else {
				todosLi.textContent = '( ) ' + todo.todoText;
			}

			todosLi.appendChild(this.createDeleteButton());
			todosLi.id = position; // Tag each li with Array Index
			todosUl.appendChild(todosLi);
		}, this);
	},
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';

		return deleteButton;
	},
	setUpEventListeners: function () {
		var todosUl = document.querySelector('ul');

		// Delegate click event to parent Ul element
		todosUl.addEventListener('click', function(event) {
			var elementClicked = event.target;

			if(elementClicked.className === 'deleteButton') { // Confirm an actual delete button was clicked
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
}

view.setUpEventListeners();
