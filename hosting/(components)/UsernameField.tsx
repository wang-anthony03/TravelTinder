"use client";
import "./Chunk.module.css";
import styles from "./Chunk.module.css"

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
      <p className={styles.text__header}>Let's get some information</p>
      <div>
        <label className={styles.text__header} htmlFor="firstName">Name: </label>
        <input
          className = {styles.input__field}
          type="text"
          id="firstName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Here"
        />
      </div>
      <div className={styles.text__header__align}>
        {name && <p>Hello, {name}!</p>}
      </div>

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
