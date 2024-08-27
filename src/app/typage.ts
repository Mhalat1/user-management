interface Tasks {
    title:string;
    dueDate:string;
    statusCompleted:boolean;
    }

let tasks: Tasks[] = [];
tasks.push(createTask("Finaliser le projet TypeScript", "2023-03-31"));

function createTask(title: string, dueDate: string): Tasks {
    return {
        title: title,
        dueDate: dueDate,
        statusCompleted: false
    };
}


function completeTask(task) {
    task.statusCompleted = true;
}

function displayTasks(tasks) {
    tasks.forEach(task => {
        console.log(`${task.title} (Due: ${task.dueDate}) - Completed: ${task.statusCompleted}`);
    });
}

displayTasks(tasks);

// Filtrage des tâches terminées
let completedTasks = tasks.filter(task => task.statusCompleted);

console.log("Tâches terminées :");
displayTasks(completedTasks);