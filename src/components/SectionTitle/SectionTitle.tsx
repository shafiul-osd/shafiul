import React, { Children } from "react";

const SectionTitle = ({title}:{title : string}) => {
  return (
    <div>
      <div className=" bg-transparent flex flex-col items-center justify-center ">
        <h1 className="md:text-2xl text-xl lg:text-3xl font-bold text-center text-white my-2">
          {title || "title"}
        </h1>
        <div className="relative w-[40rem]  ">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
