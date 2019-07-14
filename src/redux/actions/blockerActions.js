export function createBlocker (blocker){
    return {
        type: 'CREATE_BLOCKER',
        value: blocker
    }
}

export function listBlockers (blockers){
    return {
        type: 'LIST_BLOCKERS',
        value: blockers
    }
}

export function showBlocker (blocker){
    return {
        type: 'SHOW_BLOCKER',
        value: blocker
    }
}

export function updateBlocker (blocker){
    return {
        type: 'UPDATE_BLOCKER',
        value: blocker
    }
}

export function deleteBlocker (blocker){
    return {
        type: 'DELETE_BLOCKER',
        value: blocker
    }
}