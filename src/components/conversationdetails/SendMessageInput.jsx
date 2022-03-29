import React, {useState} from 'react'
import './sendmessageinput.css'
import { BsEmojiSmile, BsPaperclip, BsMic } from "react-icons/bs";



export default function SendMessageInput() {
    
    const [inputValue, setInputValue] = useState('')
    const [showChosenEmoji, setShowChosenEmoji] = useState(false)
    
    
    const handleSubmit = (inputValue) => {
      console.log(inputValue);
    };
    return (
      <div className="send-message-input-container">
        {/* <Picker
          onEmojiClick={onEmojiClick}
          style={{ visibility: showChosenEmoji ? "visible" : "hidden", zIndex:"2" }}
        /> */}
        <BsEmojiSmile
          className="send-message-icons mr-3"
          onClick={() => setShowChosenEmoji(!showChosenEmoji)}
        />{" "}
        <BsPaperclip className="send-message-icons mr-3" />
        <input
          type="text"
          className="send-message-input mr-3"
          value={inputValue}
          onChange={() => setInputValue()}
          placeholder="write a message here"
          
          onEnter={handleSubmit}
        />
        <BsMic className="send-message-icons" />
      </div>
    );
}
