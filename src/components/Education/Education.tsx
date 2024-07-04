import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Image from "next/image";
import { Boxbg } from "../ui/boxBg";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  return (
    <div id="education" className="my-20 w-[80vw] mx-auto">
      <div className="">
        <SectionTitle title="Education" />
      </div>
      <div className="grid md:grid-cols-2 gap-10 my-20 items-center">
        <div className="bg-white-100 dark:bg-zinc-900 flex items-center justify-center rounded-lg">
          <Image
            src="/images/education.png"
            height={300}
            width={450}
            alt="avatar"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Boxbg className="w-full h-full rounded-lg overflow-hidden space-y-2">
            <div className="w-full bg-white-100  dark:bg-zinc-900 p-4 rounded-lg">
              <h2 className="text-lg font-bold text-center text-green-400">
                2022-present
              </h2>
              <div className="grid grid-cols-7">
                <div className="text-3xl">
                  <FaUserGraduate />
                </div>
                <div className="col-span-6">
                    <h1 className="text-xl uppercase font-bold text-left">
                        Diploma in computer Engineering
                    </h1>
                    <h2 className="text-muted-foreground font-bold">
                        Mohastan garh Polytechnic Institute 
                    </h2>
                </div>
              </div>
            </div>
          </Boxbg>
          <Boxbg className="w-full h-full rounded-lg overflow-hidden space-y-2">
            <div className="w-full bg-white-100  dark:bg-zinc-900 p-4 rounded-lg">
              <h2 className="text-lg font-bold text-center text-green-400">
                2022-present
              </h2>
              <div className="grid grid-cols-7">
                <div className="text-3xl">
                  <FaUserGraduate />
                </div>
                <div className="col-span-6">
                    <h1 className="text-xl uppercase font-bold text-left">
                        Higher Secondary certificate
                    </h1>
                    <h2 className="text-muted-foreground font-bold">
                        Mohastan garh Polytechnic Institute 
                    </h2>
                </div>
              </div>
            </div>
          </Boxbg>
          <Boxbg className="w-full h-full rounded-lg overflow-hidden space-y-2">
            <div className="w-full bg-white-100  dark:bg-zinc-900 p-4 rounded-lg">
              <h2 className="text-lg font-bold text-center text-green-400">
                2018-2020
              </h2>
              <div className="grid grid-cols-7">
                <div className="text-3xl">
                  <FaUserGraduate />
                </div>
                <div className="col-span-6">
                    <h1 className="text-xl font-bold text-left uppercase">
                       Secondary School certificate
                    </h1>
                    <h2 className="text-muted-foreground font-bold">
                       Bamon Para High School 
                    </h2>
                </div>
              </div>
            </div>
          </Boxbg>
        </div>
      </div>
    </div>
  );
};

export default Education;
