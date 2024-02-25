"use client";
import { useCallback } from "react";

export default function Page() {
  const sendRequest = useCallback(() => {
    const data = {
      names: ["Michael", "Kai", "Anthony", "William"],
      suggestions: [
        "I want to go out and see the stars at night.",
        "I want to drink red bull",
        "I want to go to the gym and eat creatine through a straw",
        "I want to go swimming",
      ],
      tripLocation: "Malaysia",
      startDate: "May 22nd, 2024",
      endDate: "May 30rd, 2024",
    };
    fetch("https://us-central1-myexpo-8ff01.cloudfunctions.net/generateIdeas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }, []);

  return (
    <div>
      <button onClick={sendRequest}>Send Request</button>
    </div>
  );
}
