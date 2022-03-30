export const ACTIONS = {
    INIT_SOCKET:"INIT_SOCKET",
    SET_USER_INFO:"SET_USER_INFO",
    SET_ACTIVE_CHAT:"SET_ACTIVE_CHAT",
    NEW_MESSAGE:"NEW_MESSAGE"
}


export const getUserInfo =(token)=>{
    return async(dispatch)=> {
        try {
            const response = await fetch("https://localhost:3001/users/me", {
                method:"GET",
                headers:{
                    Authorization:"Bearer " + token
                }
            })
            if(response.ok){
                const data = await response.json()
                console.log(data);
                dispatch({
                    type:ACTIONS.SET_USER_INFO,
                    payload:data
                })
            }
        } catch (error) {
            
        }
    }
}


export const getActiveChat =(token)=>{
    return async(dispatch)=> {
        try {
            const response = await fetch("https://localhost:3001/chat/:chatId", {
                method:"GET",
                headers:{
                    Authorization:"Bearer " + token
                }
            })
            if(response.ok){
                const data = await response.json()
                console.log(data);
                dispatch({
                    type:ACTIONS.SET_ACTIVE_CHAT,
                    payload:data
                })
            }
        } catch (error) {
            
        }
    }
}