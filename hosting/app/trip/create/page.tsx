"use client";

import * as React from "react";
import { useCallback, useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function CreateEvent({ params }) {
  const [description, setState] = useState("");
  const [lobbyId, setLobbyId] = useState("");
  const [code, setCode] = useState("");
  const buttonHandler = useCallback(async () => {
    if (description.trim().length === 0) {
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "lobbies"), {
        description,
        code,
      });
      const lobbyId = docRef.id;
      setLobbyId(lobbyId);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }, [description]);
  return (
    <div className="flex flex-col self-end py-11 mt-8 max-w-full text-5xl font-bold tracking-tighter text-black shadow-sm bg-white bg-opacity-50 rounded-3xl w-[589px] max-md:pl-5 max-md:text-4xl">
      <div className="max-md:max-w-full max-md:text-4xl">Create your trip</div>
      {lobbyId.length === 0 ? (
        <>
          <p>Description</p>
          <textarea
            className="mt-8 text-4xl font-medium tracking-tighter max-md:max-w-full"
            placeholder="We’re going to Ubad, Indonesia for a few weeks in May, to have a couple
        ...."
            value={description}
            onChange={(e) => setState(e.target.value)}
          />
          <p>Admin Code</p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={buttonHandler}
            className="justify-center self-center px-12 py-4 mt-8 text-center whitespace-nowrap border-4 border-black border-solid rounded-[66px] max-md:px-5 max-md:text-4xl"
          >
            Create Trip
          </button>
        </>
      ) : (
        <div>Your lobby has been created. The ID is {lobbyId}.</div>
      )}
    </div>
  );
}
