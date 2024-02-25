"use client";

import React, { useState, useCallback, useEffect } from "react";
import UsernameField from "../../../(components)/UsernameField";
import PreferenceData from "../../../(components)/PreferenceData";
import WaitingPage from "../../../(components)/WaitingPage";
import { db } from "../../firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import LobbyManagement from "./LobbyManagement";

export interface AIGeneratedSuggestion {
  suggestion: string;
  reasoning: string;
}

const MainPage = ({ params }) => {
  const { id: lobbyId } = params;
  const [userName, setUserName] = useState("");
  const [aiGeneratedSuggestions, setAIGeneratedSuggestions] =
    useState<AIGeneratedSuggestion[]>();
  const [userState, setUserState] = useState(0);

  useEffect(() => {
    getDoc(doc(db, "lobbies", lobbyId)).then((doc) => {
      const data = doc.data();
      if (data.generatedSuggestions !== undefined) {
        setAIGeneratedSuggestions(data.generatedSuggestions);
      }
    });
  }, []);

  // Handler to be called from UsernameField when the submit button is clicked
  const handleUsernameSubmit = useCallback(
    (name: string) => {
      setUserName(name);
      if (aiGeneratedSuggestions) {
        setUserState(2);
      } else {
        setUserState(1);
      }
    },
    [aiGeneratedSuggestions]
  );

  const handlePreferenceSubmit = useCallback(() => {
    setUserState(2); // Update the userState to 2
  }, []);
  return (
    <div>
      {aiGeneratedSuggestions ? (
        <p>
          Suggestions have been generated. Go
          <a href={`/trip/${lobbyId}/vote`}>here</a>
          to cast your vote!
        </p>
      ) : (
        <LobbyManagement lobbyId={lobbyId} />
      )}
      {userState === 0 && <UsernameField onSubmit={handleUsernameSubmit} />}
      {userState === 1 && (
        <PreferenceData
          onSubmit={handlePreferenceSubmit}
          lobbyKey={lobbyId}
          userId={userName}
        />
      )}
      {userState === 2 && (
        <>{aiGeneratedSuggestions && <WaitingPage />}</>
      )}
    </div>
  );
};

export default MainPage;
