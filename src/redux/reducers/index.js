import { combineReducers } from 'redux'

// import { 
//     FETCH_BLOCKERDATA_BEGIN,
//     FETCH_BLOCKERDATA_SUCCESS,
//     FETCH_BLOCKERDATA_FAILURE,
// } from '../actions/blockerActions';

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
            return [...state, action.value]
        // case 'UPDATE_PROJECT':
        //     return //need to figure this one out a little more.
        case 'DELETE_PROJECT':
            const index = state.findIndex(each => each.title === action.value)
            index > -1 && state.splice(index, 1)
            return state
        default: 
            return [ ...state]
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
        // case 'UPDATE_LOG':
        //     return //need to figure this one out a little more.
        case 'DELETE_LOG':
            const index = state.findIndex(each => each.title === action.value)
            index > -1 && state.splice(index, 1)
            return state
        default: 
            return [ ...state]
    }
}

const tasks = ( state = [], action ) => {
    switch(action.type){
        case 'LIST_TASKS':
            return action.value
        case 'CREATE_TASK':
            return [...state, action.value]
        // case 'UPDATE_TASK':
        //     return //need to figure this one out a little more.
        case 'DELETE_TASK':
            const index = state.findIndex(each => each.task === action.value)
            index > -1 && state.splice(index, 1)
            return state
        default: 
            return [ ...state]
    }
}

// const blockerdata = (state = [], action) => {
    // switch(action.type){
    //     case FETCH_BLOCKERDATA_BEGIN:
    //         return {
    //             ...state,
    //             loading: true,
    //             error: null
    //         };
    //     case FETCH_BLOCKERDATA_SUCCESS:
    //         return {
    //             ...state,
    //             loading: false, 
    //             blockers: action.payload.blockers
    //         };
    //     case FETCH_BLOCKERDATA_FAILURE:
    //         return {
    //             ...state, 
    //             loading: false,
    //             error: action.payload.error,
    //             blockers: []
    //         };
    //     default:
    //         return state;
    // }
// }
const blockers = ( state = [], action ) => {
    switch(action.type){
        case 'LIST_BLOCKERS':
            return action.value
        case 'CREATE_BLOCKER':
            return [...state, action.value]
        // case 'UPDATE_BLOCKER':
        //     return //need to figure this one out a little more.
        case 'DELETE_BLOCKER':
            const index = state.findIndex(each => each.title === action.value)
            index > -1 && state.splice(index, 1)
            return state
        default: 
            return [ ...state]
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