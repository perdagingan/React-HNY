import React, { useState } from 'react';
import CharacterComponent from './characterComponent';
import ChatBubbleComponent from './chatBubbleComponent';
import UserInputComponent from './userInputComponent';

const ChatComponent = () => {
  const [chat, setChat] = useState([]);

  const handleUserInput = (message) => {
    setChat([...chat, { user: true, message }]);
    // Add logic to handle the character's response here
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-lg">
      {chat.map((entry, index) => (
        <div key={index} className={entry.user ? 'user-entry' : 'character-entry'}>
          {entry.user ? <UserInputComponent onSubmit={handleUserInput} /> : null}
          {entry.user ? null : <CharacterComponent characterName="Character" />}
          <ChatBubbleComponent message={entry.message} />
        </div>
      ))}
    </div>
  );
};

export default ChatComponent;
