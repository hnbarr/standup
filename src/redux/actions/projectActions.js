export function createProject (project){
    return {
        type: 'CREATE_PROJECT',
        value: {
            title: project.title, 
            description: project.description, 
            deadline: project.deadline
        }
    }
}

export function listProjects (){
    return dispatch => {
        fetch('/api/projects')
        .then(res => res.json())
        .then(projects => {
            dispatch(setProject(projects))
            return projects;
        })
    }
}

export function setProject(projects){
    return {
      type: "LIST_PROJECTS",
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