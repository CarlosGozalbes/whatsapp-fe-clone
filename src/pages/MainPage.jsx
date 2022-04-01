import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material/styles/createTypography";
import ContactsSideBar from "../components/contactssidebar/ContactsSideBar";
import ConversationDetails from "../components/conversationdetails/ConversationDetails";
import "./mainpage.css";
import EmptyConversation from "../components/conversationdetails/EmptyConversation";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function MainPage() {
  const [selectedConversation, setSelectedConversation] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeChat = useSelector(
    (state) => state.chats.active
  );

  // const user = from the store
   useEffect(() => {
    let myToken = localStorage.getItem("MyToken");
    if (!myToken) {
      navigate("/login");
    } // 
    else {dispatch(getUserInfo(token));}
  }, [navigate]);

  // const token = localStorage.getItem("MyToken")
  // console.log("MyToken",token);

  const socket = useSelector((state) => state.socket);
  console.log("socket",socket);
  useEffect(() => {
    const token = localStorage.getItem("MyToken");
    console.log(token);
    
    
  }, []); 
  return (
    <>
      <Button
        variant="success"
        onClick={() => dispatch({type:"INIT_SOCKET"})}
      >
        Init socket
        </Button>
      <Button
        variant="success"
        onClick={() => dispatch({type:"EMIT_TEST"})}
      >
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
