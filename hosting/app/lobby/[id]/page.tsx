"use client";

import React, { useState, useCallback, useEffect } from "react";
import UsernameField from "../../../(components)/UsernameField";
import PreferenceData from "../../../(components)/PreferenceData";
import WaitingPage from "../../../(components)/WaitingPage";
import { db } from "../../firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const MainPage = ({ params }) => {
  const { id: lobbyId } = params;
  const [userName, setUserName] = useState("");
  const [userState, setUserState] = useState(0);

  useEffect(() => {
    getDoc(doc(db, "lobbies", lobbyId)).then((doc) => {
      const data = doc.data();
      if (data.isClosed) {
        setUserState(3);
      }
      console.log(doc.data());
    });
  }, []);

  // Handler to be called from UsernameField when the submit button is clicked
  const handleUsernameSubmit = useCallback((name: string) => {
    setUserName(name);
    setUserState(1);
  }, []);

  const handlePreferenceSubmit = useCallback(() => {
    setUserState(2); // Update the userState to 2
  }, []);
  return (
    <div>
      {userState === 0 && <UsernameField onSubmit={handleUsernameSubmit} />}
      {userState === 1 && (
        <PreferenceData
          onSubmit={handlePreferenceSubmit}
          lobbyKey={lobbyId}
          userId={userName}
        />
      )}
      {userState === 2 && <WaitingPage />}
      {userState === 3 && (
        <div>
          <h1>Lobby has been closed. Schedule is created below.</h1>
          <p>Placeholder schedule goes here</p>
        </div>
      )}
    </div>
  );
};

export default MainPage;
