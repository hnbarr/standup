export function createNote (note){
    return {
        type: 'CREATE_NOTE',
        value: note
    }
}

export function listNotes (notes){
    return {
        type: 'LIST_NOTES',
        value: notes
    }
}

export function shownote (note){
    return {
        type: 'SHOW_NOTE',
        value: note
    }
}

export function updatenote (note){
    return {
        type: 'UPDATE_NOTE',
        value: note
    }
}

export function deletenote (note){
    return {
        type: 'DELETE_NOTE',
        value: note
    }
}