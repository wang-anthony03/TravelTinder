import React from 'react'; 
import LobbyManager from '../(components)/LobbyManager'; 

import Gradient from "./gradient.png";

export default function Page() {
  return (
      <>
        <LobbyManager></LobbyManager>
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full min-h-[2422px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        srcSet={Gradient.src}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col mt-2.5 mb-24 w-full max-w-[1091px] max-md:mb-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/af29a58ff99b5911ed96ff50c620ab10bea4e4c208cb1de40340e82450c1c2c1?"
                  className="w-full aspect-square fill-white fill-opacity-0"
                />
              </div>
              <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                <div className="self-stretch my-auto text-7xl font-bold tracking-tighter text-black whitespace-nowrap max-md:mt-10 max-md:text-4xl">
                  Trip Dump
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center px-7 py-2.5 my-auto text-2xl tracking-wider text-black whitespace-nowrap border-4 border-black border-solid shadow-sm max-md:px-5">
            Login
          </div>
        </div>
        <div className="flex flex-col items-start self-center mt-7 max-w-full text-2xl font-bold tracking-wider text-black w-[830px]">
          <div className="self-end text-5xl tracking-tighter text-center w-[551px] max-md:max-w-full max-md:text-4xl">
            End Planning Procrastinating
          </div>
          <div className="self-end mt-4 italic text-center w-[570px] max-md:max-w-full">
            Trip Dump is a{" "}
            <span className="italic">structured brainstorming session</span> for
            your to plan you next <span className="italic">group trip </span>
          </div>
          <div className="self-stretch mt-60 text-5xl tracking-tighter max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Kahoot for trip planning.
          </div>
          <div className="mt-6 ml-5 w-[497px] max-md:max-w-full">
            The leader of the group creates a trip: sends a link to add people
            and then the session starts
          </div>
          <div className="self-stretch mt-16 text-5xl tracking-tighter max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            How it Works
          </div>
          <div className="mt-16 ml-14 text-4xl tracking-tighter max-md:mt-10 max-md:max-w-full">
            Create a Event
          </div>
          <div className="mt-8 ml-14 w-[635px] max-md:max-w-full">
            With a name, description and date range, create a data range to send
            out through a custom link.
          </div>
          <div className="mt-8 ml-14 text-4xl tracking-tighter max-md:max-w-full">
            Brain Dump
          </div>
          <div className="mt-8 ml-14 w-[635px] max-md:max-w-full">
            Everyone writes what they think the group should do. All posts are
            anonymous. This is a non-judgmental time to get ideas on the table.
            <br />
            <br />
            Send images, Pinterest & Instagram posts and more
          </div>
          <div className="mt-8 ml-14 text-4xl tracking-tighter max-md:max-w-full">
            Aggregate
          </div>
          <div className="mt-8 ml-14 w-[635px] max-md:max-w-full">
            Similar ideas are grouped into themes (e.g. go to a museum and go to
            the met are combined).
          </div>
          <div className="mt-8 ml-14 text-4xl tracking-tighter max-md:max-w-full">
            Vote
          </div>
          <div className="mt-8 ml-14 max-md:max-w-full">
            Everyone votes either yes or not on each topic
          </div>
          <div className="mt-8 ml-14 text-4xl tracking-tighter max-md:max-w-full">
            Schedule
          </div>
          <div className="mt-8 ml-14 w-[635px] max-md:max-w-full">
            After this a tentative is created. This is{" "}
            <span className="font-bold">not</span> designed to be perfect.
            Rather, a jumping-off point for future conversation.
          </div>
          <div className="self-end mt-24 mr-9 text-5xl tracking-tighter text-center max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
            Interested?
          </div>
          <div className="justify-center self-end px-12 py-4 mt-6 mr-32 text-5xl tracking-tighter text-center whitespace-nowrap border-4 border-black border-solid rounded-[66px] max-md:px-5 max-md:mr-2.5 max-md:text-4xl">
            Create a Trip
          </div>
        </div>
      </div>
    </div>
      </>
  );
}