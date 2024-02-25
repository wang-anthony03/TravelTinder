import Logo from "./Logo";

export default function Chunk() {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
      <Logo />
      <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
        <div className="self-stretch my-auto text-7xl font-bold tracking-tighter text-black whitespace-nowrap max-md:mt-10 max-md:text-4xl">
          Trip Dump
        </div>
      </div>
    </div>
  );
}
