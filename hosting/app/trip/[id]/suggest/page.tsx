"use server";

import React from "react";
import { db } from "../../../firebase";
import { getDoc, doc } from "firebase/firestore";
import SuggestComponent from "./suggest";

import HorizontalTripCard from "../HorizontalTripCard";

export default async function Suggest({ params }: { params: { id: string } }) {

  let data = await (async () => {
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
    <div className="flex flex-col max-w-[888px]">
      <div className="w-full border border-black border-solid rounded-[30px] max-md:max-w-full">
        <HorizontalTripCard data={data} />
      </div>


      <SuggestComponent prev={data} id={params.id}/>
      
    </div>
  );
}
