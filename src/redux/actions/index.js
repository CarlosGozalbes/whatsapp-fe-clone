export const ACTIONS = {
    INIT_SOCKET:"INIT_SOCKET",
}


export const getAuthToken =(myToken)=> {
    return async(dispatch)=> {
        dispatch({
            type:ACTIONS.INIT_SOCKET,
            payload:myToken
        })
    }
}