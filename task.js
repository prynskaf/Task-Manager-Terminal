const fs = require('fs');
const prompt = require('prompt-sync')();

const tasksFile = 'tasks.json';

let tasks = loadTasks();

function loadTasks() {
  try {
    const data = fs.readFileSync(tasksFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveTasks() {
  const data = JSON.stringify(tasks, null, 2);
  fs.writeFileSync(tasksFile, data, 'utf8');
}

function showTasks() {
  console.log('Your tasks:');
  tasks.forEach((task) => {
    console.log(`${task.id}. [${task.done ? 'x' : ' '}] ${task.taskName}`);
  });
}

function addTask(taskName) {
  const newTask = {
    id: tasks.length + 1,
    taskName,
    done: false,
  };
  tasks.push(newTask);
  console.log(`Task ${newTask.id} added: ${newTask.taskName}`);
  saveTasks();
}

function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1)[0];
    console.log(`Task ${deletedTask.id} deleted`);
    saveTasks();
  } else {
    console.log(`Task with ID ${id} not found`);
  }
}

function markAsDone(id) {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.done = true;
    console.log(`Task ${task.id} marked as done`);
    saveTasks();
  } else {
    console.log(`Task with ID ${id} not found`);
  }
}

function taskManager() {
  console.log(`Welcome to your task manager.
  Press:
  1. To see all your tasks
  2. To add a task
  3. To delete a task
  4. To mark a task as done
  5. To exit the task manager`);

  const option = prompt('Enter your choice: ');

  switch (option) {
    case '1':
      showTasks();
      taskManager();
      break;
    case '2':
      const taskName = prompt('Enter task description: ');
      addTask(taskName);
      taskManager();
      break;
    case '3':
      const idToDelete = parseInt(prompt('Enter task id to delete: '));
      deleteTask(idToDelete);
      taskManager();
      break;
    case '4':
      const idToMarkDone = parseInt(prompt('Enter task id to mark as done: '));
      markAsDone(idToMarkDone);
      taskManager();
      break;
    case '5':
      console.log('Exiting the task manager.');
      break;
    default:
      console.log('Invalid option. Please try again.');
      taskManager();
      break;
  }
}

taskManager();
