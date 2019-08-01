export function handleErrors(response){
    if(! response.ok){
        throw Error(response.statusText)
    }
    return response
}
export function createBlocker(blocker){
    // debugger;
    console.log('createBlocker in actions:', blocker)
    // return (dispatch) => {
    //     debugger;
    //     return fetch(`/api/blockers`, {
    //       method: 'POST',
    //       headers: {'Content-Type': 'application/json'},
    //       body: JSON.stringify(blocker)
    //     })
    //     // .then(handleErrors)
    //     .then(res => res.json())
    //     .then(blocker=>{ 
    //         console.log('before dispatch: ') 
    //         dispatch({
    //         type: "CREATE_BLOCKER",
    //         value: blocker
    //     })
    // })
    //     // .then(() => {dispatch(listBlockers())})
    // };
    return {
        type: "CREATE_BLOCKER",
        value:  blocker
    }
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



// export const FETCH_BLOCKERDATA_BEGIN = "FETCH_BLOCKERDATA_BEGIN";
// export const FETCH_BLOCKERDATA_SUCCESS = "FETCH_BLOCKERDATA_SUCCESS";
// export const FETCH_BLOCKERDATA_FAILURE = "FETCH_BLOCKERDATA_FAILURE";

// export const fetchBlockerDataBegin = () =>({
//     type: FETCH_BLOCKERDATA_BEGIN
// });

// export const fetchBlockerDataSuccess = blockers =>({
//     type: FETCH_BLOCKERDATA_SUCCESS,
//     payload: { blockers }
// });

// export const fetchBlockerDataFailure = error =>({
//     type: FETCH_BLOCKERDATA_FAILURE,
//     payload: {error}
// });

// export const loadBlockerData = () => {
//     return dispatch => {
//         dispatch(fetchBlockerDataBegin());
//         return fetch(`/api/blockers`)
//             .then(handleErrors)
//             .then(res => res.json())
//             .then(blockers => {
//                     dispatch(fetchBlockerDataSuccess(blockers));
//                     return blockers;
//             })
//             .catch(error => {
//                 console.log("error:", error)
//                 dispatch(fetchBlockerDataFailure(error))
//             })
//     };
// }