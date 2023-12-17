const { json } = require("express");
const TodoModel = require("../models/Todo.model");

module.exports.getToDo = async (req, res) => {
  const toDo = await TodoModel.find();
  return res.status(200).json(toDo).end();
};

module.exports.addToDo = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: `Text is required` }).end();
    const newToDo = await TodoModel.create({ text });
    console.log(`Added new todo successfully : ${newToDo}`);
    return res.status(201).json(newToDo).end();
  } catch (error) {
    console.error(`Error adding new todo: ${error}`);
    return res.status(500).json({ error: `Internal Server Error` }).end();
  }
};

module.exports.updateToDo = async (req, res) => {
  try {
    const { _id, text } = req.body;
    if (_id === null || typeof text !== "string")
      return res.status(400).json({ error: `Invalid Input` }).end();
    const updatedTodo = await TodoModel.findByIdAndUpdate(_id, { text });
    console.log(`Updated successfully : ${updatedTodo}`);
    return res.status(201).json(updatedTodo).end();
  } catch (error) {
    console.error(`Error updating todo list: ${error}`);
    return res.status(500).json({ error: `Internal Server Error` }).end();
  }
};

module.exports.deleteToDo = async (req, res) => {
  try {
    const { _id } = req.body;
    if (_id === null)
      return res.status(400).json({ error: `Invalid Input` }).end();

    const deletedTodo = await TodoModel.findByIdAndDelete(_id);
    console.log(`Deleted successfully : ${deletedTodo}`);
    return res.status(200).json(deletedTodo).end();
  } catch (error) {
    console.error(`Error deleting todo list: ${error}`);
    return res.status(500).json({ error: `Internal Server Error` }).end();
  }
};
