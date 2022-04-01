import React, {useState} from 'react'
import './conversation.css'
import SingleConversation from './SingleConversation'
import { Row,Image } from 'react-bootstrap'
import avatar from "../../../assets/avatar.png";
import { useDispatch } from 'react-redux';
import { getActiveChat } from '../../../redux/actions';
export default function ConversationsList() {
  const [listOfConversations, setListOfConversations] = useState([])
  const dispatch = useDispatch();
  const token = localStorage.getItem("MyToken");
  const fetchOpenChats = async () => {try {
    const token = localStorage.getItem('MyToken')
    let res = await fetch(`${process.env.REACT_APP_BE_LINK}/chat`, {
      //https://epichat1.herokuapp.com
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status !== 200) {
      // handleOpen();
      alert("couldnt retrieve the conversations");
      // setOpen(true);
    }
    if (res.ok) {
      let data = await res.json()
      console.log(data)
      //setListOfConversations(data)

      dispatch({ type: "SET_CHATS", payload: data})
    }
  } catch (error) {
    console.log(error);
  }}
  
  
  React.useEffect(() => {
    
    // fetchOpenChats()
  }, [])
  
  
  
  return (
    <div className="d-flex flex-column conversation-list">
      {listOfConversations &&
        listOfConversations.map((conversation) => (
          <Row
            onClick={dispatch(getActiveChat(token, conversation._id))}
            className="d-flex single-conversation-container pl-2"
          >
            <Image
              roundedCircle
              src={avatar}
              width={"10%"}
              height={"10%"}
              className="conversation-list-avatar "
            />
            <div className="d-flex flex-column details-list">
              <div className="d-flex justify-content-between mt-3">
                <span>Nombre Apellido</span>
                <span className="last-message-date  pt-1">friday</span>
              </div>
              <span className="preview-truncate-message">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum laudantium itaque ipsa quisquam enim, voluptate
                distinctio asperiores, aliquam accusantium eum, fugit corrupti
                dolore nisi maxime qui excepturi repellat dignissimos harum.
              </span>
            </div>
            {/* <div className="message-without-read align-self-end ml-2 mb-3"> 1 </div> */}
          </Row>
        ))}

      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
      <SingleConversation />
    </div>
  );
}
