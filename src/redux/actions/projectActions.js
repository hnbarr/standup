export function createProject (project){
    // console.log('createProject in actions: ', title, description, deadline)
    return {
        type: 'CREATE_PROJECT',
        value: project
    }
}

export function listProjects (projects){
    return {
        type: 'LIST_PROJECTS',
        value: projects
    }
}

export function showProject (project){
    return {
        type: 'SHOW_PROJECT',
        value: project
    }
}

export function updateProject (project){
    return {
        type: 'UPDATE_PROJECT',
        value: project,
    }
}

export function deleteProject (project){
    return {
        type: 'DELETE_PROJECT',
        value: project
    }
}