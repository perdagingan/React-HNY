import React from 'react';

const ChatBubbleComponent = ({ message }) => {
  return (
    <div className="bg-green-500 text-white p-2 rounded mb-2">
      <p>{message}</p>
    </div>
  );
};

export default ChatBubbleComponent;
