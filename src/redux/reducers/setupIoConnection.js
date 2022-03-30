//import store

export default function setupConnection(socket) {
  socket.on("connect", () => {
    console.log("connection established!");
  });

  socket.on("loggedin", () => {
    console.log("You're correctly logged in now");

    socket.on("newConnection", () => {
      console.log("Another client is connected!");
    });

    
    socket.on("NEW_MESSAGE", () => {
        
        
    });



    socket.on("disconnectedUser", () => {
      console.log("Another client is disconnected");
    });
  });

  //socket.on*message........
  // store.dispatch(NEWMESSAGE)
}
