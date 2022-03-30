// import io from "socket.io-client";

// const initialState = {
//   userInfo: {
//     _id: "",
//     name: "",
//     email: "",
//     avatar: "",
//   },
//   chats: {
//     active: "", // the _id of one of the chats among store.chats.list
//     list: [],
//   },
//   socket: "",
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ÏNIT_SOCKET": //initialize your client side socket
//       // this means that you want to connect to the BE using directly some ID
//       // the ID will be in the token retrieveable from the localStorage

//       const socket = io(ADDRESS, {
//         transports: ["websocket"],
//         auth: "MY_TOKEN",
//       });

//       // io.on("")
//       return {
//         ...state,
//         socket: socket,
//       };
//     case "NEW_MESSAGE":
//     // const { sender, message} = action.payload
//     // if (sender === state.userInfo._id) state.socket.emit("öutgoing_msg", message)

//     // .....update the chat list
//     // return {...state......}
//     default:
//       return state;
//   }
// };
