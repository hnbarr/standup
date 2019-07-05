import { combineReducers } from 'redux'

const notes = ( state = [], action ) => {
    switch(action.type){
        case 'LIST_NOTES':
            return action.value
        case 'SHOW_NOTE':
            return action.value
        case 'CREATE_NOTE':
            return [...state, action.value]
        case 'UPDATE_NOTE':
            return //need to figure this one out a little more.
        case 'DELETE_NOTE':
            const index = newState.findIndex(each => each.title === action.value)
            index > -1 && newState.splice(index, 1)
            return newState
    }
}

const tasks = ( state = [], action ) => {
    switch(action.type){
        case 'LIST_TASKS':
            return action.value
        case 'SHOW_TASK':
            return action.value
        case 'CREATE_TASK':
            return [...state, action.value]
        case 'UPDATE_TASK':
            return //need to figure this one out a little more.
        case 'DELETE_TASK':
            const index = newState.findIndex(each => each.task === action.value)
            index > -1 && newState.splice(index, 1)
            return newState
    }
}


export default combineReducers({
    notes,
    tasks
})