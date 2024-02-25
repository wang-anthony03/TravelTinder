import BeachPic from "./beach.png";

export default function HorizontalTripCard() {
  return (
    <div className="border border-black border-solid max-w-[888px] rounded-[30px]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={BeachPic.src}
            className="max-w-full border-solid aspect-square border-r-[10px] border-r-white border-r-opacity-50 w-[215px] max-md:mt-4"
          />
        </div>
        <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center self-stretch px-5 my-auto text-3xl font-bold text-black max-md:mt-10 max-md:max-w-full">
            <div className="self-stretch text-5xl tracking-tighter max-md:max-w-full max-md:text-4xl">
              Spring Break: Virginia Beach
            </div>
            <div className="mt-5 tracking-widest max-md:max-w-full">
              Outdoors club is going to the beach
            </div>
            <div className="mt-5 whitespace-nowrap">Mar 8-16th</div>
          </div>
        </div>
      </div>
    </div>
  );
}