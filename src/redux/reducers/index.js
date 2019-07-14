import { combineReducers } from 'redux'

const projects = ( state = [], action ) => {
    switch(action.type){
        case 'LIST_PROJECTS':
            return action.value
        case 'SHOW_PROJECT':
            return action.value
        case 'CREATE_PROJECT':
            return [...state, action.value]
        case 'UPDATE_PROJECT':
            return //need to figure this one out a little more.
        case 'DELETE_PROJECT':
            const index = newState.findIndex(each => each.title === action.value)
            index > -1 && newState.splice(index, 1)
            return newState
    }
}

const logs = ( state = [], action ) => {
    switch(action.type){
        case 'LIST_LOGS':
            return action.value
        case 'SHOW_LOG':
            return action.value
        case 'CREATE_LOG':
            return [...state, action.value]
        case 'UPDATE_LOG':
            return //need to figure this one out a little more.
        case 'DELETE_LOG':
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

const blockers = ( state = [], action ) => {
    switch(action.type){
        case 'LIST_BLOCKERS':
            return action.value
        case 'SHOW_BLOCKER':
            return action.value
        case 'CREATE_BLOCKER':
            return [...state, action.value]
        case 'UPDATE_BLOCKER':
            return //need to figure this one out a little more.
        case 'DELETE_BLOCKER':
            const index = newState.findIndex(each => each.title === action.value)
            index > -1 && newState.splice(index, 1)
            return newState
    }
}


export default combineReducers({
    projects,
    logs,
    tasks,
    blockers
})