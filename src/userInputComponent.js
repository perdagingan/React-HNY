import React, { useState } from 'react';

const UserInputComponent = ({ onSubmit }) => {
  const [userMessage, setUserMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userMessage.trim() !== '') {
      onSubmit(userMessage);
      setUserMessage('');
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        className="border p-2 rounded mr-2"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  );
};

export default UserInputComponent;
