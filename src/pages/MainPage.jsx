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
  const [selectedConversation, setSelectedConversation] = useState();
  const navigate = useNavigate();

  //  useEffect(() => {
  //   let myToken = localStorage.getItem("MyToken");
  //   if (!myToken) {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  // const token = localStorage.getItem("MyToken")
  // console.log("MyToken",token);
  const dispatch = useDispatch();
  const socket = useSelector((s) => s.socket);

  return (
    <>
      <Button
        variant="success"
        onClick={() => {
          socket.emit("testEvent");
        }}
      >
        Send message
      </Button>
      <Row style={{ maxWidth: "100vw", marginRight: "0px", marginLeft: "0px" }}>
        <Col md={4} className="contacts-side-bar">
          <ContactsSideBar />
        </Col>
        {
          <Col md={8} className="coversation-details">
            {selectedConversation ? (
              <ConversationDetails />
            ) : (
              <EmptyConversation />
            )}
          </Col>
        }
      </Row>
    </>
  );
}

export default MainPage;
