const { Router } = require("express");
const {
  getToDo,
  addToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/Todo.controller");

const router = Router();

router.get("/", getToDo);
router.post("/", addToDo);
router.patch("/", updateToDo);
router.delete("/", deleteToDo);

module.exports = router;
