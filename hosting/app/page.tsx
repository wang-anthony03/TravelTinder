import React from "react";
import LobbyManager from "../(components)/LobbyManager";
import Chunk from "../(components)/Chunk";
import styles from "../(components)/Chunk.module.css";

import Gradient from "./gradient.png";

export default function Page() {
  return (
    <div className='flex relative flex-col mt-2.5 mb-24 w-full max-md:mb-10 max-md:max-w-full'>
      <div className="flex flex-col items-left self-center mt-7 max-w-full text-2xl font-bold tracking-wider text-black w-[830px]">
        <div className="text-center items-center">
          <div className="text-5xl tracking-tighter text-center text-white max-md:max-w-full max-md:text-4xl">

            End Planning Procrastinating
          </div>
          <div className="mt-4 italic text-center max-md:max-w-full text-white">
            Trip Dump is a{" "}
            <span className="italic">structured brainstorming session</span> for
            your to plan you next <span className="italic">group trip </span>
            <br />          
          </div>
         
        </div>
        <a href="/trip/create" className="px-5 py-2 mt-12 text-2xl w-min self-center tracking-tighter text-center whitespace-nowrap border-2 border-white text-white border-solid rounded-3xl">
            Create a Trip
          </a>
        
       
        <div className="self-stretch mt-10 text-5xl tracking-tighter max-md:mt-10 max-md:max-w-full text-white max-md:text-4xl">
          Kahoot for trip planning.
        </div>
        <div className="mt-6 tracking-wider font-medium text-white max-md:max-w-full">
          The leader of the group creates a trip: sends a link to add people and
          then the session starts
        </div>
        <div className="self-stretch mt-16 text-5xl tracking-tighter max-md:mt-10 text-white max-md:max-w-full max-md:text-4xl">
          How it Works
        </div>
        <div className="mt-16 text-4xl tracking-tighter max-md:mt-10 text-white max-md:max-w-full">
          Create a Event
        </div>
        <div className="tracking-wider text-white font-medium">
          With a name, description and date range, create a data range to send
          out through a custom link.
        </div>
        <div className="mt-16 text-4xl tracking-tighter text-white max-md:mt-10 max-md:max-w-full">
          Brain Dump
        </div>
        <div className="tracking-wider text-white font-medium">
          Everyone writes what they think the group should do. All posts are
          anonymous. This is a non-judgmental time to get ideas on the table.
          <br />
          Send images, Pinterest & Instagram posts and more
        </div>
        <div className="mt-16 text-4xl tracking-tighter text-white max-md:mt-10 max-md:max-w-full">
          Aggregate
        </div>
        <div className="tracking-wider font-medium text-white">
          Similar ideas are grouped into themes (e.g. go to a museum and go to
          the met are combined).
        </div>
        <div className="mt-16 text-4xl tracking-tighter max-md:mt-10 text-white max-md:max-w-full">
          Vote
        </div>
        <div className="tracking-wider text-white font-medium">
          Everyone is able to contribute their votes to each activity, deciding
          if they would like to do it or not.
        </div>
        <div className="mt-8 text-4xl tracking-tighter text-white max-md:max-w-full">
          Schedule
        </div>
        <div className="tracking-wider text-white font-medium">
          After this a tentative is created. This is{" "}
          <span className="font-bold">not</span> designed to be perfect. Rather,
          it serves as a jumping-off point for future conversation.
        </div>
        <div className="flex flex-col text-white items-center">
          <div className="mt-24 text-5xl tracking-tighter text-center">
            Interested?
          </div>
          <a href="/trip/create" className="justify-center px-12 py-4 mt-6 text-5xl tracking-tighter text-center text-white whitespace-nowrap border-4 border-white border-solid rounded-3xl">
            Create a Trip
          </a>
          
        </div>
      </div>
    </div>
  );
}
