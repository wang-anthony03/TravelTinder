import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../../firebase";

export default function LobbyManagement({ lobbyId }) {
  const [code, setCode] = useState("");
  const [hasTrueCode, setHasTrueCode] = useState(false);
  const [haveSuggestionsBeenGenerated, setHaveSuggestionsBeenGenerated] =
    useState(false);
  const submitCode = useCallback(() => {
    getDoc(doc(db, "lobbies", lobbyId)).then((doc) => {
      if (doc.data().code === code) {
        setHasTrueCode(true);
      }
    });
  }, []);
  const createSuggestions = useCallback(async () => {
    const documentValue = await getDoc(doc(db, "lobbies", lobbyId));
    const data = documentValue.data();
    const names = [];
    const suggestions = [];
    for (const [username, suggestion] of Object.entries(data.ideas || {})) {
      names.push(username);
      suggestions.push(suggestion);
    }
    // Create a set of suggestions.
    const generatedSuggestions = await fetch(
      "https://us-central1-myexpo-8ff01.cloudfunctions.net/generateIdeas",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          names,
          suggestions,
          description: data.description,
        }),
      }
    );
    // Update the document to include them.
    await updateDoc(doc(db, "lobbies", lobbyId), {
      generatedSuggestions,
    });
    setHaveSuggestionsBeenGenerated(true);
  }, []);

  if (haveSuggestionsBeenGenerated) {
    return (
      <p>Suggestions have been generated. You can now view them in the app.</p>
    );
  }

  return (
    <div>
      {!hasTrueCode ? (
        <>
          <p>
            If you are the creator of this group, type in the group code to
            access management settings.
          </p>
          <input
            type="text"
            onChange={(e) => setCode(e.target.value)}
            value={code}
          />
          <button onClick={submitCode}>Submit code</button>
        </>
      ) : (
        <>
          <b>Management Settings</b>: Are you ready to generate suggestions?
          <button onClick={createSuggestions}>Create suggestions</button>
        </>
      )}
    </div>
  );
}
