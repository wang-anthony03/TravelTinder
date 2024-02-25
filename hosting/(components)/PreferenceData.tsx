"use client";
import React, { useState, useCallback, MouseEventHandler } from "react";
import { db } from "../app/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

const SubmitIdeasForm = ({ pollKey: lobbyKey, userId }) => {
  lobbyKey = "1234";
  userId = "1234";
  const [idea, setIdea] = useState("");

  const handleSubmit: MouseEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      if (!idea.trim()) {
        return;
      }

      try {
        // Create an initial document to update.
        const pollDoc = doc(db, "lobbies", lobbyKey);
        // To update age and favorite color:
        await updateDoc(pollDoc, {
          [`ideas.${userId}`]: idea,
        });
        setIdea("");
      } catch (error) {
        console.error("Error submitting idea:", error);
      }
    },
    [idea, lobbyKey, userId]
  );

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Triplet</h1>
      <h2>Submit Your Ideas</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Enter your idea..."
          style={{
            minHeight: "100px",
            margin: "10px 0",
            padding: "5px",
            borderRadius: "5px",
            resize: "vertical",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            alignSelf: "flex-end",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitIdeasForm;
