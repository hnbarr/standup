import { combineReducers } from 'redux'
import { stat } from 'fs';

const stats = ( state=[], action ) => {
    switch(action.type){
        case 'LIST_STATS':
            return action.value
        case 'UPDATE_STAT':
            return action.value
        case 'DELETE_STAT':
            const index = state.findIndex(each => each.title === action.value)
            index > -1 && state.splice(index, 1)
            return state
        default: 
            return [...state]
    }
}

const projects = ( state = [], action ) => {
    switch(action.type){
        case 'LIST_PROJECTS':
            return action.value
        case 'SHOW_PROJECT':
            return action.value
        case 'CREATE_PROJECT':
            return action.value
        // case 'UPDATE_PROJECT':
        //     return //need to figure this one out a little more.
        case 'DELETE_PROJECT':
            const index = state.findIndex(each => each.title === action.value)
            index > -1 && state.splice(index, 1)
            return state
        default: 
            return [...state]
    }
}

const logs = (state = [], action ) => {
    switch(action.type){
        case 'LIST_LOGS':
            return [...state].concat(action.value)
        case 'SHOW_LOG':
            return action.value
        case 'CREATE_LOG':
            return [...state, action.value]
        // case 'UPDATE_LOG':
        //     return //need to figure this one out a little more.
        case 'DELETE_LOG':
            const index = state.findIndex(each => each.title === action.value)
            index > -1 && state.splice(index, 1)
            return state
        default: 
            return [...state]
    }
}

const tasks = ( state = [], action ) => {
    switch(action.type){
        case 'LIST_TASKS':
            return action.value
        case 'CREATE_TASK':
            return action.value
        // case 'UPDATE_TASK':
        //     return //need to figure this one out a little more.
        case 'DELETE_TASK':
            const index = state.findIndex(each => each.task === action.value)
            index > -1 && state.splice(index, 1)
            return [...state]
         
        default: 
            return [...state]
    }
}

const blockers = ( state = [], action ) => {
    // debugger;
    switch(action.type){
        case 'LIST_BLOCKERS':
            // console.log('action.value in reducer: ', action.value)
            return action.value
        case 'CREATE_BLOCKER':
            return action.value
        // case 'UPDATE_BLOCKER':
        //     return //need to figure this one out a little more.
        case 'DELETE_BLOCKER':
            // return {
            //     ...state,
            //     blockers: action.payload.blockers.filter(b => b._id !== action.payload.delete)
            // }
            const index = state.findIndex(each => each.blocker === action.value)
            index > -1 && state.splice(index, 1)
            return [...state]
        default: 
            return [...state]
    }
}


const reducers = combineReducers({
    projects,
    logs,
    tasks,
    blockers,
    stats
})

export default reducers;