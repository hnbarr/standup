export function createproject (project){
    return {
        type: 'CREATE_PROJECT',
        value: project
    }
}

export function listprojects (projects){
    return {
        type: 'LIST_PROJECTS',
        value: projects
    }
}

export function showproject (project){
    return {
        type: 'SHOW_PROJECT',
        value: project
    }
}

export function updateproject (project){
    return {
        type: 'UPDATE_PROJECT',
        value: project
    }
}

export function deleteproject (project){
    return {
        type: 'DELETE_PROJECT',
        value: project
    }
}