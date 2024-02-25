import React, { useEffect } from "react";

import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";

import BeachPic from "./paris.jpeg";

const getDataFromServer = async (id: string) => {
  "use server";
  const docRef = doc(db, "lobbies", id);
  const docSnap = getDoc(docRef);
  if ((await docSnap).exists()) {
    return (await docSnap).data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
};

export default async function MyComponent({
  params,
}: {
  params: { id: string };
}) {
  "use server";

  let serverData = await getDataFromServer(params.id);

  console.log(serverData);

  const pageId = params.id;

  return (
    <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="flex flex-col">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={BeachPic.src}
              alt="Event Image"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {serverData.title}
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              {serverData.title}h
            </a>
            <p className="mt-2 text-gray-500">{serverData.description}</p>
            <div className="mt-4">
              <span className="text-gray-600">Starts: </span>
              <span className="font-semibold">
                {new Date(serverData.startDate).toDateString()}
              </span>
            </div>
            <div className="mt-4">
              <span className="text-gray-600">Ends: </span>
              <span className="font-semibold">
                {new Date(serverData.endDate).toDateString()}
              </span>
            </div>
            {/* <div className="mt-2">
        <span className="text-gray-600">Location: </span><span className="font-semibold">Event Location</span>
      </div> */}
            <div className="mt-4">
              <a
                href={`/trip/${pageId}/suggest`}
                className="btn text-indigo-600 hover:text-indigo-900"
              >
                Suggest Activities
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
