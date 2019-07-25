export function createBlocker (blocker){
    return (dispatch) => {
        fetch(`/blockers`, {
          method: 'POST',
          body: JSON.stringify(blocker),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(blocker=> dispatch({
            type: "CREATE_BLOCKER",
            value: blocker
        }))
    };
}

export function listBlockers() {
    return (dispatch) => {
      fetch("/blockers")
      .then(res => res.json())
      .then(blockers => dispatch({
        type: "LIST_BLOCKERS",
        value: blockers
      }));
    };
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