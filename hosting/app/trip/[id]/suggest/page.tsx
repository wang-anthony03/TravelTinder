import * as React from "react";

import HorizontalTripCard from "../HorizontalTripCard";

export default function Suggest({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col max-w-[888px]">
      <div className="w-full border border-black border-solid rounded-[30px] max-md:max-w-full">
        <HorizontalTripCard />
      </div>
      <div className="flex flex-col items-start self-center pt-5 pr-20 pb-12 pl-8 mt-8 w-full text-5xl font-bold tracking-tighter text-black shadow-sm bg-white bg-opacity-50 max-w-[700px] rounded-[30px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <div className="underline max-md:max-w-full max-md:text-4xl">
          Suggest moves
        </div>
        <div className="mt-8 text-4xl italic font-medium tracking-tighter max-md:max-w-full">
          I saw this really cool jet ski rental place, I think we should go
        </div>
        <div className="justify-center self-center px-12 py-4 mt-16 mb-2.5 text-center whitespace-nowrap border-4 border-black border-solid rounded-[66px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
          Add
        </div>
      </div>
    </div>
  );
}
