import React from 'react'
import ConversationsList from './conversationlist/ConversationsList'
import HeaderContactBar from './HeaderContactBar'
export default function ContactsSideBar() {
  return (
    <div>
        {<HeaderContactBar/>}
        {<ConversationsList/>}
    </div>
  )
}
