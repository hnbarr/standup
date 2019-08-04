export function createTask (task){
    return {
        type: 'CREATE_TASK',
        value: task
    }
}

export function listTasks (){
    return dispatch => {
        fetch('/api/tasks')
        .then(res => res.json())
        .then(tasks => {
            dispatch(setTask(tasks))
            return tasks;
        })
    }
}

export function setTask(tasks){
    return {
      type: "LIST_TASKS",
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