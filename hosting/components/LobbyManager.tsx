'use client';

import React, { useState } from 'react';
import CopyLinkButton from './CopyLinkButton';

const LobbyManager = () => {
  const [lobbyLink, setLobbyLink] = useState('');

  const generateLobbyLink = () => {
    // const lobbyId = Math.random().toString(36).substr(2, 9);
    const lobby_id = "testpage";
    const newLink = `http://localhost:3000/${lobby_id}`;
    setLobbyLink(newLink);
    console.log('Lobby link generated:', newLink); 
  };

  return (
    <div>
      <button onClick={generateLobbyLink}>Generate Lobby Link</button>
      {lobbyLink && (
        <>
          <CopyLinkButton link={lobbyLink} />
          <p>Link: <a href={lobbyLink} target="_blank" rel="noopener noreferrer">{lobbyLink}</a></p>
        </>
      )}
    </div>
  );
};

export default LobbyManager;