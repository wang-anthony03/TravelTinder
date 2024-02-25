"use client";
import React, { useCallback, useState } from "react";
import { db } from "../app/firebase";
import { doc, getDoc } from "firebase/firestore";

const WaitingComponent = () => {
  return (
    <div>
      <p>
        Thank you for submitting your preferences. Soon, our AI will suggest
        activities, and you will be able to rate them!
      </p>
    </div>
  );
};

export default WaitingComponent;
