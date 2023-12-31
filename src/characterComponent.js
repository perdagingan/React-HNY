import React from 'react';

const CharacterComponent = ({ characterName }) => {
  return (
    <div className="bg-blue-500 text-white p-2 rounded">
      <p>{characterName}</p>
    </div>
  );
};

export default CharacterComponent;
