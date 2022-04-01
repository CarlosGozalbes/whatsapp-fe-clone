import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material/styles/createTypography";
import ContactsSideBar from "../components/contactssidebar/ContactsSideBar";
import ConversationDetails from "../components/conversationdetails/ConversationDetails";
import "./mainpage.css";
import EmptyConversation from "../components/conversationdetails/EmptyConversation";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { getUserInfo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function MainPage() {
  const [selectedConversation, setSelectedConversation] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const activeChat = useSelector((state) => state.chats.active);

  // const user = from the store
  let token = localStorage.getItem("MyToken")
  useEffect(() => {
     
    let token = localStorage.getItem("MyToken");
      console.log(token);
      if (!token) {
        navigate("/login")} else {dispatch(getUserInfo(token));} 
    },
    [navigate] 
  );
  ;  
  /* useEffect(() => {
      
      
      console.log(dispatch(getUserInfo(token)))
    }, []) */
    
  // const token = localStorage.getItem("MyToken")
  // console.log("MyToken",token);

  const socket = useSelector((state) => state.socket);
  console.log("socket", socket);
  
  return (
    <>
      <Button
        variant="success"
        onClick={() => dispatch({ type: "INIT_SOCKET" })}
      >
        Init socket
      </Button>
      <Button variant="success" onClick={() => dispatch({ type: "EMIT_TEST" })}>
        Send message
      </Button>
      <Row style={{ maxWidth: "100vw", marginRight: "0px", marginLeft: "0px" }}>
        <Col md={4} className="contacts-side-bar">
          <ContactsSideBar />
        </Col>
        {
          <Col md={8} className="coversation-details">
            {activeChat ? <ConversationDetails /> : <EmptyConversation />}
          </Col>
        }
      </Row>
    </>
  );
}

export default MainPage;
