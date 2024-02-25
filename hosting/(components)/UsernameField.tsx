"use client";

import React, { useState } from "react";

interface UsernameFieldProps {
  onSubmit: (firstName: string) => void; // Pass the first name back on submit
}

const UsernameField: React.FC<UsernameFieldProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name); // Trigger the callback with the first name
    }
  };

  return (
    <div>
      <p>Let's get some information</p>
      <div>
        <label htmlFor="firstName">Name: </label>
        <input
          type="text"
          id="firstName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      {name && <p>Hello, {name}!</p>}
      <button
        onClick={handleSubmit}
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
    </div>
  );
};

export default UsernameField;
