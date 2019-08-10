import Axios from "axios";

// export function handleErrors(response){
//     if(! response.ok){
//         throw Error(response.statusText)
//     }
//     return response
// }
export function createBlocker(blocker){
    // debugger;
    console.log('createBlocker in actions:', typeof blocker);
    // return (dispatch) => {
    //     fetch(`/api/blockers`, {
    //       method: 'POST',
    //       headers: {'Content-Type': 'application/json'},
    //       body: JSON.stringify(blocker)
    //     })
    //     // .then(handleErrors)
    //     .then(res => res.json())
    //     .then( blocker=>{ 
    //         console.log('before dispatch: ') 
    //         dispatch({
    //         type: "CREATE_BLOCKER",
    //         value: blocker
    //     })
    // })
    //     .then(() => {dispatch(listBlockers())})
    // };
    return {
        type: "CREATE_BLOCKER",
        value:  blocker
    }
}

export function listBlockers(){
    // console.log('listblockers, ')
    return dispatch => {
        // console.log('listblockers after dispatch')
        fetch('/api/blockers')
        .then(res => res.json())
        .then(blockers => {
            dispatch(setBlocker(blockers))
            return blockers;
        })
        .catch(err => console.error(err.message))
    }
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

export const deleteBlocker = _id => async (dispatch, getState) => {
    const { blockers } = getState()
    try {
        await Axios.delete(`/api/blockers/${_id}`)
        dispatch({
            type: `DELETE_BLOCKER`,
            payload: {
                blockers : blockers,
                delete: _id
            }
        })
    } catch (err) {
       console.error(err.message)
    }
}

// export function deleteBlocker(blocker){

//     return {
//         type: 'DELETE_BLOCKER',
//         value: blocker
//     }
// }