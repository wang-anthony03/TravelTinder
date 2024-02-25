import * as React from "react";

export default function Login(props) {
  return (
    <div className="flex flex-col py-10 pl-8 text-2xl font-medium tracking-wider text-black bg-white bg-opacity-50 max-w-[514px] rounded-[30px] max-md:pl-5">
      <div className="text-4xl font-bold tracking-tighter max-md:max-w-full">
        Create an Account
      </div>
      <div className="self-start mt-7 ml-2.5 underline">Email</div>
      <div className="self-start mt-10 ml-2.5 underline">Password</div>
      <div className="shrink-0 mt-7 h-px bg-black max-md:max-w-full" />
      <img
        loading="lazy"
        srcSet="..."
        className="self-center mt-5 ml-0 aspect-[4.35] max-w-[413px] w-[413px]"
      />
    </div>
  );
}

