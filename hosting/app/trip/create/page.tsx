import * as React from "react";

export default function CreateEvent({ params }) {
  return (
    <div className="flex flex-col self-end py-11 mt-8 max-w-full text-5xl font-bold tracking-tighter text-black shadow-sm bg-white bg-opacity-50 rounded-3xl w-[589px] max-md:pl-5 max-md:text-4xl">
      <div className="max-md:max-w-full max-md:text-4xl">Create your trip</div>
      <div className="mt-8 text-4xl font-medium tracking-tighter max-md:max-w-full">
        We’re going to Ubad, Indonesia for a few weeks in May, to have a couple
        ....
      </div>
      <div className="justify-center self-center px-12 py-4 mt-8 text-center whitespace-nowrap border-4 border-black border-solid rounded-[66px] max-md:px-5 max-md:text-4xl">
        Create Trip
      </div>
    </div>
  );
}
