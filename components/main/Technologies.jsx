import React from "react";
import { TechnologiesList } from "@/constants";
export default function Technologies() {
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 lg:py-24 py:6 mx-auto">
        <div className="flex flex-wrap w-full lg:mb-20 mb-8 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl name-font mb-2 text-[#008080] text-center lg:w-1/2 sm:w-full font-black">
            İşte bu, BENİM DÜNYAM!
          </h1>
          <h1 className="sm:text-3xl text-2xl name-font mb-2 text-[#008080] text-center lg:w-1/2 sm:w-full font-black">
            <code>&lt;?php echo "Hello World"; ?&gt;</code>
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-16 gap-12">
          {TechnologiesList.map((technology, index) => {
            return (
              <div className="grid gap-8 lg:p-16 p-2">
                {technology.map((tech, index) => {
                  return (
                    <a href={tech.url}>
                      <img
                        className={` ${tech.attributes}`}
                        src={tech.image}
                        alt=""
                      />
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
