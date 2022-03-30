import React from 'react'
import './conversation.css'
import SingleConversation from './SingleConversation'
export default function ConversationsList() {
  return (
    <div className="d-flex flex-column conversation-list">
      <SingleConversation />
    </div>
  );
}
