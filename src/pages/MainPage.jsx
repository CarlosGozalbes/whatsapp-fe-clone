import React, { useEffect } from 'react'
import ContactsSideBar from '../components/contactssidebar/ContactsSideBar'
import ConversationDetails from '../components/conversationdetails/ConversationDetails'
import './mainpage.css'
import { Row,Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
function MainPage() {


  // const token = localStorage.getItem("MyToken")
  // console.log("MyToken",token);
  const dispatch = useDispatch()






  return (
    <>
        <Button variant="success" onClick={()=> {dispatch({ type: "EMIT_TEST" })}}>Send message</Button>
      <Row
        style={{ maxWidth: "100vw", marginRight: "0px", marginLeft: "0px" }}
      >
        <Col md={4} className="contacts-side-bar">
          <ContactsSideBar />
        </Col>
        {
          <Col md={8} className="coversation-details">
            <ConversationDetails />
          </Col>
        }
      </Row>
    </>
  );
}

export default MainPage