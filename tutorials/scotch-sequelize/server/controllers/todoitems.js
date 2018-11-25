const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    return TodoItem.create({
      content: req.body.content,
      todoId: req.params.todoId,
    })
    .then(todoItem => res.status(201).json(todoItem))
    .catch(error => res.status(400).json(error))
  },
  update(req, res) {
    return TodoItem
      .find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        },
      })
      .then(todoItem => {
        if (!todoItem) {
          return res.status(404).json({ message: 'TodoItem not found' });
        }
        return todoItem
          .update(req.body, { fields: Object.keys(req.body) })
          .then(updatedTodoItem => res.status(200).json(updatedTodoItem))
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return TodoItem
      .find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        },
      })
      .then(todoItem => {
        if (!todoItem) {
          return res.status(404).json({ message: 'TodoItem Not Found' });
        }

        return todoItem.destroy()
          .then(() => res.status(204).json())
      })
      .catch(error => res.status(400).json(error))
  },
};
