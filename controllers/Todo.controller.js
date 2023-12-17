const TodoModel = require("../models/Todo.model");

module.exports.getToDo = async (req, res) => {
  const toDo = await TodoModel.find();
  res.status(200).json(toDo);
};
