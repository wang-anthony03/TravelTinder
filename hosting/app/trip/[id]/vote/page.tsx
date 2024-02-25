"use server";
import * as React from "react";

import HorizontalTripCard from "../HorizontalTripCard";

import VoteCollector from "../../../../(components)/VoteCollector";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export default async function VoteView({ params }: { params: { id: string } }) {
  let data = await(async () => {
    const docRef = doc(db, "lobbies", params.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  })();

  return (
    <>
      <div>
        <HorizontalTripCard data={data} />

        <VoteCollector data={data} />

        <h1 className="w-max text-center">Did you like this?</h1>
        <a href="/trip/create" className="btn text-center">
          Create your own page
        </a>
      </div>
    </>
  );
}
