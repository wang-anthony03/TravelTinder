import * as React from "react";

import BeachPic from "./beach.png";

export default function MyComponent({ params }: { params: { id: string } }) {
  const pageId = params.id;

  return (
    <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-16 rounded-xl text-black max-md:mt-10 max-md:max-w-full">
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
            <div className="mt-7 ml-2.5 text-3xl tracking-widest max-md:max-w-full">
              Outdoors club is going to the beach
            </div>
          </div>
          <div className="flex flex-col items-end self-end mt-5 mr-6 max-w-full font-bold whitespace-nowrap w-[433px] max-md:mr-2.5">
            <div className="text-3xl">Mar 8-16th</div>
            <div className="mt-6 text-2xl tracking-wider">
              9 people already joined
            </div>
            <a href={`/trip/${pageId}/suggest`} className="justify-center px-12 py-4 mt-10 text-5xl tracking-tighter text-center border-4 border-black border-solid rounded-3xl max-md:px-5 max-md:text-4xl">
              Join
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
  <div className="md:flex">
    <div className="md:flex-shrink-0">
      {/* <img className="h-48 w-full object-cover md:w-48" src="event-image.jpg" alt="Event Image"> */}
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Spring Breaktrip</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Spring Break: Virginia Beach</a>
      <p className="mt-2 text-gray-500">Event Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="mt-4">
        <span className="text-gray-600">Date: </span><span className="font-semibold">Event Date</span>
      </div>
      <div className="mt-2">
        <span className="text-gray-600">Location: </span><span className="font-semibold">Event Location</span>
      </div>
      <div className="mt-4">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">Learn more</a>
      </div>
    </div>
  </div>
    </div>
    </div>
  );
}
