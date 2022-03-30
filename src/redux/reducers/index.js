import io from "socket.io-client";
import { ACTIONS } from "../actions";
import { initialState } from "../store";
import setupConnection from "./setupIoConnection";

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INIT_SOCKET": //initialize your client side socket
      // this means that you want to connect to the BE using directly some ID
      // the ID will be in the token retrieveable from the localStorage
      const token = localStorage.getItem("MyToken")
      const socket = io(process.env.REACT_APP_BE_LINK, {
          transports: ["websocket"],
          auth: token,
        });

      setupConnection(socket)

      return {
        ...state,
        socket: socket,
      };
    case "EMIT_TEST":
        state.socket.emit("testEvent", { message: "Hello"})
        return state
    case ACTIONS.NEW_MESSAGE:
    // const { sender, message} = action.payload
    // if (sender === state.userInfo._id) state.socket.emit("öutgoing_msg", message)

    // .....update the chat list
    // return {...state......}



    case ACTIONS.SET_USER_INFO:
        return{
            ...state,
            userInfo: action.payload
        }

    case ACTIONS.SET_ACTIVE_CHAT:
        return{
            ...state.chats,
            list: action.payload
        }
    default:
      return state;
  }
};
