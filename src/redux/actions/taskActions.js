import axios from 'axios'

export function createTask (task){
    return {
        type: 'CREATE_TASK',
        value: task
    }
}

// export function listTasks (){
//     console.log('made it to list task')
//     return dispatch => {
//         fetch('/api/tasks')
//         .then(res => res.json())
//         .then(tasks => {
//             dispatch(setTask(tasks))
//             return tasks;
//         })
//     }
// }

// export function setTask(tasks){
//     return {
//       type: "LIST_TASKS",
//       value: tasks
//     }
// }

export function updateTask (task){
    return {
        type: 'UPDATE_TASK',
        value: task
    }
}

// export const updateTask = (task, id) => async dispatch => {
//     try {
//         const res = await axios.put(`/api/tasks/${id}`, task)
//         return dispatch({
//             type: 'UPDATE_TASK',
//             value: res.data
//         })
//     } catch (err){
//         console.log(err.message)
// // need to make edit form to populate on pencil click
//     }
   
// }

export function deleteTask (task){
    return {
        type: 'DELETE_TASK',
        value: task
    }
}

export const listTasks = () => async dispatch => {
    try {
        const res = await axios.get('/api/tasks')
        dispatch({
            type: `LIST_TASKS`,
            value: res.data
        })
        dispatch({
            type: 'LIST_TASKS',
            value: res.data       
        })
    } catch(err) {
        console.log(err.message)
    }
}