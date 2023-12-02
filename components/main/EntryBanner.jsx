import Link from "next/link";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
export default function EntryBanner() {
  return (
    <>
      <div className="flex flex-col items-center h-screen justify-center w-full  ">
        <p className="text-3xl font-medium text-center text-slate-700">
          Selam! Ben Ahmet
        </p>

        <div className="py-5 h-32">
          <Typewriter
            className=""
            options={{
              strings: ["Developer", "Freelancer"],
              autoStart: true,
              loop: true,
              wrapperClassName:
                "text-slate-700 lg:text-8xl text-6xl font-bold ",
              cursorClassName: "text-slate-700 lg:text-7xl text-6xl font-bold",
            }}
          />
        </div>

        <div className="lg:py-8 py-4">
          <p className="py-2 lg:inline-flex block items-center justify-center lg:mr-5 text-xl font-medium text-center text-slate-700 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
            Ben kimim?
            <svg
              className="w-5 h-5 ml-2 -mr-1 lg:block hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </p>
          <Link
            href="/about"
            className="bg-slate-700 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border-2 border-gray-700 hover:border-gray-700 hover:bg-slate-700 hover:text-white duration-500 transition-colors focus:ring-4 focus:ring-gray-100"
          >
            Hakkımda
          </Link>
        </div>
      </div>
    </>
  );
}
