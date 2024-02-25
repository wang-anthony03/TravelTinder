import * as React from "react";

export default function ViewItinerary({ params }) {
  return (
    <div className="flex flex-col px-8 py-5 text-6xl font-bold text-black bg-white shadow-sm max-w-[888px] rounded-[30px] max-md:px-5 max-md:text-4xl">
      <div className="max-md:max-w-full max-md:text-4xl">Sample I-ternary</div>
      <div className="mt-5 text-4xl tracking-widest max-md:max-w-full">
        We don’t try to be perfect. We give you a starting point. Edit as you
        would like!
      </div>
      <div className="mt-5 tracking-tighter max-md:max-w-full max-md:text-4xl">
        Monday, March 2nd
      </div>
      <div className="mt-5 text-4xl tracking-tighter max-md:max-w-full">
        (8am - 2pm) Go Surfing
      </div>
      <div className="mt-5 tracking-tighter max-md:max-w-full max-md:text-4xl">
        Monday
      </div>
      <div className="mt-5 text-4xl tracking-tighter max-md:max-w-full">
        (8am - 2pm) Go Surfing
      </div>
      <div className="self-end mt-80 text-4xl tracking-tighter whitespace-nowrap max-md:mt-10">
        Export to Calendar
      </div>
    </div>
  );
}
