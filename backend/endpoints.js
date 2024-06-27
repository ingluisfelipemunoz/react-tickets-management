// apiEndpoints.js

const express = require("express");
const crudOperations = require("./db.js");

const router = express.Router();

// User endpoints
router.get("/users", (req, res) => {
  const { id, name } = req.body;
  const data = crudOperations.getUsers();
  res.status(201).json(data);
});

router.post("/users", (req, res) => {
  const { id, name } = req.body;
  crudOperations.createUser(id, name);
  res.status(201).send("User created");
});

router.get("/users/:id", (req, res) => {
  const user = crudOperations.readUser(parseInt(req.params.id));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("User not found");
  }
});

router.put("/users/:id", (req, res) => {
  const { name } = req.body;
  crudOperations.updateUser(parseInt(req.params.id), name);
  res.status(200).send("User updated");
});

router.delete("/users/:id", (req, res) => {
  crudOperations.deleteUser(parseInt(req.params.id));
  res.status(200).send("User deleted");
});

// Task endpoints
router.post("/tasks", (req, res) => {
  const { id, name, description, status, user_id } = req.body;
  crudOperations.createTask(id, name, description, status, user_id);
  res.status(201).send("Task created");
});

router.get("/tasks/:id", (req, res) => {
  const task = crudOperations.readTask(parseInt(req.params.id));
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).send("Task not found");
  }
});

router.put("/tasks/:id", (req, res) => {
  const { name, description, status, user_id } = req.body;
  crudOperations.updateTask(
    parseInt(req.params.id),
    name,
    description,
    status,
    user_id,
  );
  res.status(200).send("Task updated");
});

router.delete("/tasks/:id", (req, res) => {
  crudOperations.deleteTask(parseInt(req.params.id));
  res.status(200).send("Task deleted");
});

// Additional endpoints
router.get("/tasks/user/:user_id", (req, res) => {
  const tasks = crudOperations.getTasksByUser(parseInt(req.params.user_id));
  res.status(200).json(tasks);
});

router.get("/tasks/user/:user_id/completed", (req, res) => {
  const tasks = crudOperations.getTasksByUserCompleted(
    parseInt(req.params.user_id),
  );
  res.status(200).json(tasks);
});

router.get("/tasks/user/:user_id/pending", (req, res) => {
  const tasks = crudOperations.getTasksByUserPending(
    parseInt(req.params.user_id),
  );
  res.status(200).json(tasks);
});

router.get("/tasks/user/:user_id/in_progress", (req, res) => {
  const tasks = crudOperations.getTasksByUserInProgress(
    parseInt(req.params.user_id),
  );
  res.status(200).json(tasks);
});

module.exports = router;
