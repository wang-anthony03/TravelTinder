"use client";
import React, { useState } from "react";

const SubmitIdeasForm = () => {
  const [idea, setIdea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the idea to your AI or do whatever you need with it
    console.log("Submitted idea:", idea);
    // Reset the textarea after submission
    setIdea("");
  };

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
