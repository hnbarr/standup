export function createTask (task){
    return {
        type: 'CREATE_TASK',
        value: task
    }
}

export function listTasks (tasks){
    return {
        type: 'LIST_TASKS',
        value: tasks
    }
}

export function updateTask (task){
    return {
        type: 'UPDATE_TASK',
        value: task
    }
}

export function deleteTask (task){
    return {
        type: 'DELETE_TASK',
        value: task
    }
}