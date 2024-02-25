"use client";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { FaHeartCrack, FaHeart } from "react-icons/fa6";

function VoteCollector({ suggestions, onVotesCollected }) {
  console.log("SUGGESTIONS:", suggestions);
  const [votes, setVotes] = useState([]);
  const remainingSuggestions: any[] = suggestions
    .slice(votes.length)
    .toReversed();
  console.log(votes, suggestions, suggestions.slice(votes.length));

  const [lastDirection, setLastDirection] = useState();
  useEffect(() => {
    if (votes.length === suggestions.length) {
      onVotesCollected(votes);
    }
  }, [votes.length]);

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div>
      <h1>React Tinder Card</h1>
      <div className="flex flex-row justify-between items-center">
        <FaHeartCrack
          className={
            `w-40 h-40` // + (lastDirection === "left" ? `animate-pulse` : ``)
          }
        />
        <div className="cardContainer">
          {remainingSuggestions.map((suggestion, index) => (
            <TinderCard
              className="swipe"
              key={suggestion.name}
              onSwipe={(direction) => {
                // @ts-ignore
                setLastDirection(direction);
                setVotes([direction === "left", ...votes]);
              }}
              onCardLeftScreen={() => outOfFrame(suggestion.name)}
              swipeRequirementType="position"
            >
              <div
                style={{
                  backgroundColor: "white",
                  maxWidth: "350px",
                  userSelect: "none",
                }}
              >
                {suggestion.suggestion} - {suggestion.reasoning}
              </div>
              {/* <div
                style={{
                  backgroundImage:
                    "url(" +
                    "https://raw.githubusercontent.com/3DJakob/react-tinder-card-demo/master/public/img" +
                    suggestion.url +
                    ")",
                }}
                className="card"
              >
                <h3>{suggestion.name}</h3>
              </div> */}
            </TinderCard>
          ))}
        </div>
        <FaHeart
          className={
            `w-40 h-40` + (lastDirection === "right" ? `animate-pulse` : ``)
          }
        />
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
}

export default VoteCollector;
