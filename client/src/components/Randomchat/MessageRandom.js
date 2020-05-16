import React from "react"
import ReactEmoji from "react-emoji"
import ScrollToBottom from "react-scroll-to-bottom"

const MessageRandom = ({ msg: { user, text, time }, name }) => {
  let IsCurrentUser = false
  const trimmedName = name.trim().toLowerCase()
  console.log(text.substring(5, 12))

  if (user === name) {
    IsCurrentUser = true
  }

  const messageList = IsCurrentUser ? (
    <div>
      <div>
        <div className='messageContainer justifyEnd mr-1'>
          <div className='sentText pr-1'>{trimmedName}</div>
          <div className='messageBox backgroundBlue'>
            <div className='messageText colorWhite'>
              <ScrollToBottom>
                {" "}
                {ReactEmoji.emojify(text)} {time}
              </ScrollToBottom>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className='messageContainer justifyStart ml-1'>
        <div className='messageBox bg-dark'>
          <div className='messageText colorDark'>
            <ScrollToBottom>
              {ReactEmoji.emojify(text)} {time}
            </ScrollToBottom>
          </div>
        </div>
        <div className='sentText pl-1'>{user}</div>
      </div>
    </div>
  )
  return <div>{messageList}</div>
}

export default MessageRandom
