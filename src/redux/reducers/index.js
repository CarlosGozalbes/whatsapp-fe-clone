import { initialState } from "../store";

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
     
        case "FETCH_ALL_USERS_BY_SEARCH": 
            return {
                ...state,
                allSearchedUsers: action.payload,
            }

        default:
            return {
                ...state
            }
    }
}