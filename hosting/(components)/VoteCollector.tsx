"use client";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { FaHeartCrack, FaHeart } from "react-icons/fa6";

function VoteCollector({ data }) {
  const [votes, setVotes] = useState([]);
  const remainingSuggestions: any[] = data.suggestions
    ? data.suggestions.filter((rug) => rug).slice(votes.length).toReversed()
    : [];

  console.log(remainingSuggestions);

  const [lastDirection, setLastDirection] = useState();
  const [currentDirect, setCurrentDirect] = useState();
  // useEffect(() => {
  //   if (votes.length === suggestions.length) {
  //     // onVotesCollected(votes);
  //   }
  // }, [votes.length]);

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="flex flex-col text-3xl space-y-8">
      <h1>Vote on your favorite activities!</h1>
      {remainingSuggestions.length === 0 ? (
        <p>
          There are no more suggestions
          <br />
          <a href="./itinerary" className="btn py-1 px-2 border-3 font-bold text-blue-400 btn">You can view the itinerary</a>
        </p>
      ) : null}
      {remainingSuggestions.length >= 1 && <>
      <p>Swipe right if you like the activity, left if you don't</p>

      <div className="flex flex-row justify-between items-center">
        {/* <FaHeartCrack
          className={
            `w-40 h-40` // + (lastDirection === "left" ? `animate-pulse` : ``)
          }
        /> */}
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
              onCardLeftScreen={(direction) => {
                // @ts-ignore
                setCurrentDirect(direction);
                outOfFrame(suggestion.name)
              }}
              swipeRequirementType="position"
            >
              <div
                style={{
                  backgroundColor: "white",
                  fontSize: "24px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px",
                  maxWidth: "350px",
                  userSelect: "none",
                  textAlign: "center",
                }}
              >
                <div className={`flex items-center text-center justify-center transform-gpu ` + currentDirect === 'right' ? ` border-green-300` : currentDirect === 'left' ? ` border-red-300` : ``}>
                {suggestion.suggestion || suggestion}
                </div>
              </div>
            </TinderCard>
          ))}
        </div>
        {/* <FaHeart
          className={
            `w-40 h-40` + (lastDirection === "right" ? `animate-pulse` : ``)
          }
        /> */}
      </div>
      </>}
      {/* {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )} */}
    </div>
  );
}

export default VoteCollector;
