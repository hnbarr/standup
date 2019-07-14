export function createLog (log){
    return {
        type: 'CREATE_LOG',
        value: log
    }
}

export function listLogs (logs){
    return {
        type: 'LIST_LOGS',
        value: logs
    }
}

export function showLog (log){
    return {
        type: 'SHOW_LOG',
        value: log
    }
}

export function updateLog (log){
    return {
        type: 'UPDATE_LOG',
        value: log
    }
}

export function deleteLog (log){
    return {
        type: 'DELETE_LOG',
        value: log
    }
}