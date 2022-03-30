//import store

export default function setupConnection(socket) {
    socket.on("connection", ()=> {
        console.log('connection established! Id Socket ' + socket.id)
    })



    //socket.on*message........
    // store.dispatch(NEWMESSAGE)
}