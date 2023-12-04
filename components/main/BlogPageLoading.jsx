import React from "react";

export default function BlogPageLoadingSkeleton() {
  return (
    <div className="flex shadow-sm backdrop-blur-lg bg-grey/80 transition hover:shadow-xl mb-8 animate-pulse">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime="2022-10-10"
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span></span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span></span>
        </time>
      </div>

      <div className="w-56 bg-gray-300 dark:bg-gray-600 hidden sm:block h-56"></div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-gray-900/10 p-4 sm:border-l-transparent lg:h-48 sm:h-24">
          <div className="w-full bg-gray-300 dark:bg-gray-600 h-72 lg:hidden sm:block mb-2"></div>

          <h3 className="lg:h-6 h-3 bg-gray-200 rounded-lg dark:bg-gray-700 lg:mb-8 mb-5 w-1/2"></h3>
          <p className="lg:h-6 h-3 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="hidden sm:block h-6 bg-gray-200 rounded-lg dark:bg-gray-700 my-4"></p>
          <p className="hidden sm:block h-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>
      </div>
    </div>
  );
}
