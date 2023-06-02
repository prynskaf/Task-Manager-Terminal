const prompt = require('prompt-sync')();

// Mock data for tasks
let tasks = [
  {
    id: 1,
    description: "Buy groceries",
    done: false,
  },
  {
    id: 2,
    description: "Clean the house",
    done: true,
  },
];

// Function to display all tasks
function showTasks() {
  console.log("Your tasks:");
  tasks.forEach((task) => {
    console.log(`${task.id}. [${task.done ? "X" : " "}] ${task.description}`);
  });
}

// Function to add new tasks
function addTask(description) {
  const newTask = {
    id: tasks.length + 1,
    description,
    done: false,
  };
  tasks.push(newTask);
  console.log(`Task ${newTask.id} added: ${newTask.description}`);
}

// Function to delete tasks
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  console.log(`Task ${id} deleted`);
}

// Function to mark tasks as done
function markAsDone(id) {
  const task = tasks.find((task) => task.id === id);
  task.done = true;
  console.log(`Task ${id} marked as done`);
}

// Main function to run the task manager system
function taskManager() {
  console.log(`Welcome to your task manager. Press:
    1. To see all your tasks
    2. To add a task
    3. To delete a task
    4. To mark a task as done
    5. To exit the task manager`);

  const option = prompt("Enter your choice: ");
  
  switch (option) {
    case "1":
      showTasks();
      taskManager();
      break;
    case "2":
      const description = prompt("Enter task description: ");
      addTask(description);
      taskManager();
      break;
    case "3":
      const idToDelete = parseInt(prompt("Enter task id to delete: "));
      deleteTask(idToDelete);
      taskManager();
      break;
    case "4":
      const idToMarkDone = parseInt(prompt("Enter task id to mark as done: "));
      markAsDone(idToMarkDone);
      taskManager();
      break;
    case "5":
      console.log("Exiting the task manager.");
      break;
    default:
      console.log("Invalid option. Please try again.");
      taskManager();
      break;
  }
}

// Start the task manager system
taskManager();
