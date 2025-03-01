import React from 'react';
import './Message.css'
import MessageHeader from './Header/MessageHeader';
import Users from './Users/Users';
import Chat from './Chat/Chat';

const Message = () => {
  return (
    <div className='Message'>
      <MessageHeader/>

      <div className="data">
        <Users/>
        <Chat />
      </div>
    </div>
  );
}

export default Message;
