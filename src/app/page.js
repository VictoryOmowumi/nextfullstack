import React from "react";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi";
export default function Home() {
  
  return (
    <div className="flex flex-col container px-8  ">
      <div className="flex flex-col gap-4  mt-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col md:flex-row w-full justify-between">
            <div className=""></div>
            <div className="flex items-center justify-center flex-col">
              <div className="text-8xl text-black font-bold">
                <span>You </span>
                <span className="text-primary">can </span>
                <span>do it!</span>
              </div>
              <div className="w-4/5 text-center">
                <p className="text-black">
                  Believing in yourself is the first secret to success.
                  Creativity is intelligence having fun. You can do it!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-1/2 h-auto rounded-lg">
            <Image
              src="/hero2.jpg"
              width={700}
              height={400}
              className="rounded-lg"
              lazy="true"
              alt="hero"
            />
          </div>
          <div className=" w-1/2 flex flex-col px-8 py-4 items-center">
            <div className="flex gap-12 mt-8">
              <div className="bg-primary bg-opacity-10 shadow-inner shadow-pink-200 w-[150px] h-[120px] py-2 px-4 rounded-md flex items-center flex-col justify-center">
                <p className="text-4xl text-primary font-bold">185k</p>
                <p className="text-xl text-black">Followers</p>
              </div>
              <div className="bg-primary bg-opacity-10 shadow-inner shadow-pink-200 w-[150px] h-[120px] py-2 px-4 rounded-md flex items-center flex-col justify-center">
                <p className="text-4xl text-primary font-bold">10k</p>
                <p className="text-xl text-black">Projects</p>
              </div>
              <div className="bg-primary bg-opacity-10 shadow-inner shadow-pink-200 w-[150px] h-[120px] py-2 px-4 rounded-md flex items-center flex-col justify-center">
                <p className="text-4xl text-primary font-bold">95k</p>
                <p className="text-xl text-black">Tutorials</p>
              </div>
            </div>
            <div className="flex mt-12 gap-8">
              <button className="bg-primary text-white px-12 py-5 rounded-sm mt-12">
                Get Started
              </button>

              <button className="bg-white shadow-sm border-2 border-primary text-black px-12 py-5 rounded-sm mt-12 ml-8 ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
