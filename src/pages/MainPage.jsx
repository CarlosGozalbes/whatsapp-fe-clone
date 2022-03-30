import React, {useState} from 'react'
import ContactsSideBar from '../components/contactssidebar/ContactsSideBar'
import ConversationDetails from '../components/conversationdetails/ConversationDetails'
import './mainpage.css'
import { Row,Col } from 'react-bootstrap'
import EmptyConversation from '../components/conversationdetails/EmptyConversation'
/* import { AnimatePresence, motion } from "framer-motion"; */


/* function Sidebar({ sideBar = false, setSideBar = () => {} }) {
  return (
    <AnimatePresence className="sideBarEditProfile">
      {sideBar && (
        <>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{
              x: 0,
              backgroundColor: "green",
              zIndex: 999999999999999,
              width: "100",
            }}
            exit={{
              x: "-100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            <button
              onClick={() => setSideBar((sideBar) => !sideBar)}
              className=""
            >
              &times;
            </button>
            <h2 className="text-4xl capitalize leading-loose">hello!</h2>
            <p className="leading-relaxed" style={{ zIndex: 10000 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setSideBar((sideBar) => !sideBar)}
            className=""
          />
        </>
      )}
    </AnimatePresence>
  );
} */

function MainPage() {
  /* const [sideBar, setSideBar] = useState(false); */
  const [selectedConversation, setSelectedConversation] = useState()
  return (
    <>
      <Row style={{ maxWidth: "100vw", marginRight: "0px", marginLeft: "0px" }}>
        <Col md={4} className="contacts-side-bar">
          {/* <Sidebar {...{ sideBar, setSideBar }} /> */}
          <ContactsSideBar />
        </Col>
        {
          <Col md={8} className="coversation-details">
            {selectedConversation ? <ConversationDetails /> : <EmptyConversation/>}
          </Col>
        }
      </Row>
    </>
  );
}

export default MainPage