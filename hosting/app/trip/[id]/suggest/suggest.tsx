"use client";
import TextTransition, { presets } from "react-text-transition";
import React, { useState, useEffect } from "react";

import { db } from "../../../firebase";
import { updateDoc, arrayUnion, doc } from "firebase/firestore";

const TEXTS = [
  "Go to the Beach",
  "Travel Europe",
  "Visit Asia",
  "Explore Africa",
  "Tour South America",
  "See North America",
  "Hike in the Forest",
  "Go Camping",
  "Take a Road Trip",
  "Attend a Music Festival",
  "Visit Historical Landmarks",
  "Go on a Wildlife Safari",
  "Take a Cruise",
  "Experience a Cultural Festival",
  "Learn a New Water Sport",
  "Go Skydiving",
  "Explore a National Park",
  "Volunteer Abroad",
  "Attend a Cooking Class",
  "Go to the Mountains",
  "Go on a Wine Tasting Tour",
  "Take a Hot Air Balloon Ride",
];

export default function Suggest(props) {
  const id2 = props.id;
  const addSuggestion = async (suggestion: string) => {
    setSeggestions((suggestions) => [...suggestions, suggestion]);

    const docRef = doc(db, "lobbies", id2);
    await updateDoc(docRef, {
      suggestions: arrayUnion({suggestion, votes: 0}),
    });
  };

  const addButton = (event) => {
    addSuggestion(idea);
    setIdea("");
  }

  const [idea, setIdea] = useState(null);
  const [index, setIndex] = useState(0);
  const [suggestions, setSeggestions] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="flex flex-col items-start self-center pt-20 p-20 mt-8 w-full text-5xl font-bold tracking-tighter text-black shadow-sm bg-white bg-opacity-50 max-w-[700px] rounded-[30px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <div className="max-md:max-w-full max-md:text-4xl">
          <TextTransition springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </div>
        <div className="mt-8 text-4xl italic font-medium tracking-tighter max-md:max-w-full">
          <textarea
            className="outline-none bg-transparent mt-8 text-4xl placeholder:font-black placeholder:opacity-100 placeholder:font-medium font-medium tracking-wider max-md:max-w-full"
            placeholder="A fun little club trip.."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />
        </div>
        <button onClick={addButton} className="justify-center self-center px-12 py-4 mt-16 mb-2.5 text-center whitespace-nowrap border-4 border-black border-solid rounded-[66px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
          Add
        </button>
      </div>

      <ul className="flex flex-col items-start self-center mt-8 w-full text-5xl font-bold tracking-normal text-black shadow-sm bg-white bg-opacity-50 max-w-[700px] rounded-[30px] max-md:max-w-full max-md:text-4xl p-20">
        <li>Your Submissions</li>
        {suggestions.map((suggestion, index) => {
          return <li key={index}>- {suggestion}</li>;
        })}

        <a href="./vote" className="btn text-indigo-600 hover:text-indigo-900">
          Vote on Activities
        </a>
      </ul>
    </>
  );
}
