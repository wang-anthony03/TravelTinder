import * as React from "react";

export default function ViewResults({ params }) {
  return (
    <div className="flex flex-col px-8 pt-5 pb-12 text-black bg-white shadow-sm max-w-[888px] rounded-[30px] max-md:px-5">
      <div className="text-6xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
        Vox Populi, Vox Dei
      </div>
      <div className="mt-5 text-4xl tracking-widest max-md:max-w-full">
        What did people like the most?
      </div>
      <div className="flex flex-col py-6 mt-5 rounded-3xl border border-black border-solid shadow-sm max-md:max-w-full">
        <div className="flex flex-col px-6 max-md:px-5 max-md:max-w-full">
          <div className="text-5xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
            Go to the Beach
          </div>
          <div className="flex flex-col pr-5 pl-10 mt-5 text-4xl tracking-widest max-md:pl-5 max-md:max-w-full">
            <div className="max-md:max-w-full">I want to go to the beach</div>
            <div className="mt-5 max-md:max-w-full">
              I really want to go to the beach
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between self-end mt-5 mr-6 font-bold whitespace-nowrap max-md:mr-2.5">
          <div className="flex gap-5 justify-between">
            <div className="my-auto text-4xl tracking-tighter">1</div>
            <div className="text-5xl tracking-tighter max-md:text-4xl">😍</div>
          </div>
          <div className="text-5xl tracking-tighter max-md:text-4xl">👍</div>
        </div>
      </div>
      <a href="itinerary" className="mt-5 text-5xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
        Check out the generated itenerary -&gt;
      </a>
    </div>
  );
}
