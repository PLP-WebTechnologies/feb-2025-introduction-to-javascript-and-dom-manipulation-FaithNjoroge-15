// Select elements from the DOM
const addTaskButton = document.getElementById('addTaskButton');
const removeTaskButton = document.getElementById('removeTaskButton');
const taskList = document.getElementById('taskList');
const taskMessage = document.getElementById('taskMessage');

// Predefined tasks related to agriculture
const tasks = [
    "Plant new crops",
    "Water the fields",
    "Harvest the crops",
    "Fertilize the soil",
    "Check irrigation system"
];

// Function to add a new task to the list
addTaskButton.addEventListener('click', function () {
    if (tasks.length > 0) {
        // Create a new list item for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = tasks.shift(); // Remove the task from the array and display it
        taskItem.classList.add('new-task');
        taskList.appendChild(taskItem);

        taskMessage.textContent = `The task "${taskItem.textContent}" has been added to the list.`;
    } else {
        taskMessage.textContent = "No more tasks to add! You are all set for the season.";
        taskMessage.style.color = 'red';
    }
});

// Function to remove the last added task
removeTaskButton.addEventListener('click', function () {
    const lastTaskItem = taskList.querySelector('li:last-child');
    if (lastTaskItem) {
        lastTaskItem.remove();
        taskMessage.textContent = `The task "${lastTaskItem.textContent}" has been removed from the list.`;
    } else {
        taskMessage.textContent = "No tasks to remove!";
        taskMessage.style.color = 'red';
    }
});
