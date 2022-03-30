import io from "socket.io-client";
import { initialState } from "../store";
import setupConnection from "./setupIoConnection";

console.log("MyToken",token);
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INIT_SOCKET": //initialize your client side socket
      // this means that you want to connect to the BE using directly some ID
      // the ID will be in the token retrieveable from the localStorage
      
      const token = localStorage.getItem("MyToken")
      const socket = io(ADDRESS, {
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
    case "NEW_MESSAGE":
    // const { sender, message} = action.payload
    // if (sender === state.userInfo._id) state.socket.emit("öutgoing_msg", message)

    // .....update the chat list
    // return {...state......}
    default:
      return state;
  }
};
