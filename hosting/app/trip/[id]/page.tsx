import * as React from "react";

import Chunk from "../../../(components)/Chunk";
import BeachPic from "./beach.png";

export default function MyComponent({ params }: { params: { id: string } }) {
  const pageId = params.id;

  return (
    <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col grow mt-16 text-black max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src={BeachPic.src}
          className="mt-16 w-full aspect-[2.56] max-md:mt-10 max-md:max-w-full"
        />
        <div className="flex flex-col py-6 rounded-none bg-white bg-opacity-50 max-md:max-w-full">
          <div className="flex flex-col pr-6 pl-2.5 max-md:pr-5 max-md:max-w-full">
            <div className="text-5xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
              Spring Break: Virginia Beach
            </div>
            <div className="self-start mt-7 ml-2.5 text-3xl tracking-widest max-md:max-w-full">
              Outdoors club is going to the beach
            </div>
          </div>
          <div className="flex flex-col items-end self-end mt-5 mr-6 max-w-full font-bold whitespace-nowrap w-[433px] max-md:mr-2.5">
            <div className="text-3xl">Mar 8-16th</div>
            <div className="mt-6 text-2xl tracking-wider">
              9 people already joined
            </div>
            <div className="justify-center self-start px-12 py-4 mt-10 text-5xl tracking-tighter text-center border-4 border-black border-solid rounded-[66px] max-md:px-5 max-md:text-4xl">
              Join
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
