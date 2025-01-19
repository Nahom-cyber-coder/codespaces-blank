// Store tasks in an array
let tasks = [];

// Function to add a task
function addTask() {
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-desc').value;
    const deadline = document.getElementById('task-date').value;
    const reminder = document.getElementById('task-reminder').value;
    const priority = document.getElementById('task-priority').value;

    // Validate input
    if (!title || !description) {
        alert('Please fill in both title and description!');
        return;
    }

    const task = {
        title,
        description,
        deadline,
        reminder,
        priority,
        completed: false
    };

    // Add task to tasks array
    tasks.push(task);
    renderTasks();
    resetForm();
}

// Function to render tasks to the page
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear the list before re-rendering

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-item');

        taskElement.innerHTML = `
            <div class="task-title">${task.title}</div>
            <div class="task-desc">${task.description}</div>
            <div class="task-info">
                <span>Deadline: ${task.deadline || 'No deadline'}</span>
                <span>Priority: ${task.priority}</span>
                <span>Reminder: ${task.reminder || 'No reminder'}</span>
            </div>
            <button class="complete-btn" onclick="completeTask(${index})">
                ${task.completed ? 'Completed' : 'Mark as Completed'}
            </button>
        `;

        taskList.appendChild(taskElement);
    });
}

// Function to mark a task as completed
function completeTask(index) {
    tasks[index].completed = true;
    renderTasks();
}

// Function to reset the task input form
function resetForm() {
    document.getElementById('task-title').value = '';
    document.getElementById('task-desc').value = '';
    document.getElementById('task-date').value = '';
    document.getElementById('task-reminder').value = '';
    document.getElementById('task-priority').value = 'Low';
}

// Scroll to top function
window.onscroll = function() {
    const scrollBtn = document.getElementById("scroll-btn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
