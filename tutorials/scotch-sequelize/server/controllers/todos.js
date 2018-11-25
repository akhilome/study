const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    return Todo.create({
      title: req.body.title,
    })
    .then(todo => res.status(201).json(todo))
    .catch(error => res.status(400).json(error));
  },
  list(req, res) {
    return Todo
      .findAll({
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }]
      })
      .then(todos => res.status(200).json(todos))
      .catch(error => res.status(400).json(error));
  },
  retrieve(req, res) {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if(!todo) {
          return res.status(404).json({
            message: 'Todo not found 😢',
          });
        }
        return res.status(200).json(todo);
      })
      .catch(error => res.status(400).json(error));
  },
  update(req, res) {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if(!todo) {
          return res.status(404).json({
            message: 'Todo not found! 😝',
          });
        }
        return todo
          .update({ title: req.body.title || todo.title })
          .then(() => res.status(200).json(todo))
      })
      .catch(error => res.status(400).json(error));
  },
  destroy(req, res) {
    return Todo
      .findById(req.params.todoId)
      .then(todo => {
        if (!todo) {
          return res.status(400).json({
            message: 'Todo Not Found! 😠',
          });
        }
        return todo.destroy()
          .then(() => res.status(204).json())
      })
      .catch(error => res.status(400).json(error));
  },
};
