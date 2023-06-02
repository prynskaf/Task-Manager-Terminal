const prompt = require('prompt-sync')();
const tasksFile = 'tasks.json';

// task 
let tasks = [
  {
    id: 1,
    taskName: "Stay Remote",
    done: false,
  },
  {
    id: 2,
    taskName: "Learn on Campus",
    done: true,
  },
];

// function for to see  all tasks..
function showTasks() {
  console.log("Your task:");
  tasks.forEach((task) => {
    console.log(`${task.id}. [${task.done ? "x" : " "}] ${task.taskName}`)
  });
};


// fuchtion to add a task
function addTask(taskName) {
  const newTask = {
    id: tasks.length + 1,
    taskName,
    done: false,
  };
  tasks.push(newTask)
  console.log(`Task ${newTask.id} added: ${newTask.taskName}`);
};


// to delate task
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  console.log(`Task ${id} deleted`);
}


// function mark as done 
function markAsDone(id) {
  const task = tasks.find((task) => task.id === id);
  console.log(`Task ${id} mark as done`);
}


// Main function to run the task manager system
function taskManager() {
  console.log(`Welcome to your task manager. 
  Press:
  1. to see all your tasks
  2. to add a task
  3. to delete a task
  4. to mark a task as done
  5. to exit the task manager`)


  const option = prompt("Enter your choice: ")

  switch (option) {
    case "1":
      showTasks()
      taskManager()
      break;
    case "2":
      const taskName = prompt("Enter task description: ")
      addTask(taskName);
      break;
    case "3":
      const idToDelete = parseInt(prompt("Enter task id to delete: "));
      deleteTask(idToDelete);
      taskManager();
      break;
    case "4":
      const idTOMarkDone = parseInt(prompt("Enter task to id to mark as done: "));
      markAsDone(idTOMarkDone);
      taskManager();
    case "5":
      console.log("Enter the task Manager.");
      break;
    default:
      console.log("Invalid option. Please try again.")
      break;
  }

}
taskManager();
