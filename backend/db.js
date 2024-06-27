let users = [];
let tasks = [];

function getUsers(id, name) {
  users.push({ id, name });
}

function createUser(id, name) {
  users.push({ id, name });
}

function readUser(id) {
  return users.find((user) => user.id === id);
}

function updateUser(id, name) {
  const user = users.find((user) => user.id === id);
  if (user) {
    user.name = name;
  }
}

function deleteUser(id) {
  users = users.filter((user) => user.id !== id);
}

function createTask(id, name, description, status, user_id) {
  tasks.push({ id, name, description, status, user_id });
}

function readTask(id) {
  return tasks.find((task) => task.id === id);
}

function updateTask(id, name, description, status, user_id) {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.name = name;
    task.description = description;
    task.status = status;
    task.user_id = user_id;
  }
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
}

function getTasksByUser(user_id) {
  return tasks.filter((task) => task.user_id === user_id);
}

function getTasksByUserAndStatus(user_id, status) {
  return tasks.filter(
    (task) => task.user_id === user_id && task.status === status,
  );
}

function getTasksByUserCompleted(user_id) {
  return getTasksByUserAndStatus(user_id, "completed");
}

function getTasksByUserPending(user_id) {
  return getTasksByUserAndStatus(user_id, "pending");
}

function getTasksByUserInProgress(user_id) {
  return getTasksByUserAndStatus(user_id, "in_progress");
}

module.exports = {
  getUsers,
  createUser,
  readUser,
  updateUser,
  deleteUser,
  createTask,
  readTask,
  updateTask,
  deleteTask,
  getTasksByUser,
  getTasksByUserCompleted,
  getTasksByUserPending,
  getTasksByUserInProgress,
};
