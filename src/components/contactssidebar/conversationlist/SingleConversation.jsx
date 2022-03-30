import React, {useEffect, useState} from 'react'
import { Image,Row } from 'react-bootstrap';
import avatar from "../../../assets/avatar.png";
import './conversation.css'

export default function SingleConversation() {
  const [ user, setUser] = useState([])

  const getUsers = async() =>{
    try {
      const response = await fetch("http://localhost:3001/users")
      if(response.ok){
        const user = await response.json()
        console.log(user)
        setUser(user)
      }
    } catch (error) {
      console.log(error)
    }

  }
useEffect(() => {
  getUsers()
}, [])

  return (
    <div>
      
      <Row fluid className="d-flex single-conversation-container pl-2">
        {
          user.map(data=>(
            <>
            <Image
              roundedCircle
              src={avatar}
              height={60}
              className="conversation-list-avatar mx-3 my-2"
            />
            <div className="d-flex flex-column details-list">
              <div className="d-flex justify-content-between mt-3">
                <span className='m-2'>{data.username}</span>
                <span className="last-message-date  pt-1">fecha</span>
                <span className='ml-auto mt-4 text-secondary'>{new Date(data.timestamp).toLocaleTimeString()}</span>
              </div>
              <span className="preview-truncate-message">
              
              </span>
            </div>
            </>
          ))
        }
      </Row>
    </div>
  )
}