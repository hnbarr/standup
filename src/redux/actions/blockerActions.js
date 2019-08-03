export function handleErrors(response){
    if(! response.ok){
        throw Error(response.statusText)
    }
    return response
}
export function createBlocker(blocker){
    // debugger;
    console.log('createBlocker in actions:', blocker);
    return (dispatch) => {
        fetch(`/api/blockers`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(blocker)
        })
        // .then(handleErrors)
        .then(res => res.json())
        .then( blocker=>{ 
            console.log('before dispatch: ') 
            dispatch({
            type: "CREATE_BLOCKER",
            value: blocker
        })
    })
        .then(() => {dispatch(listBlockers())})
    };
    // return {
    //     type: "CREATE_BLOCKER",
    //     value:  blocker
    // }
}

export function listBlockers(blockers) {
    return (dispatch) => {
      fetch(`/api/blockers`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(blockers)
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(blockers => dispatch(setBlocker(blockers)))
    };
  }

  export function setBlocker(blockers){
      return {
        type: "LIST_BLOCKERS",
        value: blockers
      }
  }

export function updateBlocker(blocker){
    return {
        type: 'UPDATE_BLOCKER',
        value: blocker
    }
}

export function deleteBlocker(blocker){
    return {
        type: 'DELETE_BLOCKER',
        value: blocker
    }
}