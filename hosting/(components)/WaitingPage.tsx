"use client";
import React, { useCallback, useState } from "react";
import { db } from "../app/firebase";
import { doc, getDoc } from "firebase/firestore";

const WaitingComponent = () => {
  return (
    <div>
      <span className="loading loading-spinner loading-lg"></span>{" "}Waiting...
    </div>
  );
};

export default WaitingComponent;
