"use client";
import React, { useCallback } from "react";
import { db } from "../app/firebase";
import { doc, getDoc } from "firebase/firestore";

const WaitingComponent: React.FC = ({ lobbyId }) => {
  const createSuggestions = useCallback(() => {
    getDoc(doc(db, "lobbies", lobbyId)).then((doc) => {
      const data = doc.data();
      const names = [];
      const preferences_ = [];
      for (const [username, preferences] of Object.entries(data.ideas || {})) {
        names.push(username);
        preferences_.push(preferences);
      }
      // Create a set of suggestions.
    });
  }, []);
  return (
    <div>
      <p>Waiting...</p>
    </div>
  );
};

export default WaitingComponent;
