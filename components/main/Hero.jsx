import { ServicesList } from "@/constants";
import React from "react";

export default function Hero() {
  return (
    <div className="container flex flex-col lg:px-6 px-0 py-10 mx-auto space-y-12 lg:py-16 lg:flex-row lg:items-center my-24">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-3xl font-semibold tracking-wide text-gray-800  lg:text-4xl">
            Neler Sunuyorum
          </h1>
          <p className="mt-4 text-gray-600 ">
            Portföyümde görmüş olduğunuz projeler, çeşitli sektörlerde ve
            müşteri ihtiyaçlarına özel olarak tasarlanmış web çözümlerini
            içeriyor.
          </p>

          <div className="grid gap-6 mt-8 sm:grid-cols">
            {ServicesList.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center text-gray-800 -px-3 "
                >
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3">{service.title}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-5">
            <p className="inline-flex items-center justify-center py-3 mr-5 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
              Hemen iletişime geç!
              <svg
                className="w-5 h-5 ml-2 -mr-1"
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
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-2 border-gray-300 hover:border-gray-700 hover:bg-slate-700 hover:text-white duration-500 transition-colors focus:ring-4 focus:ring-gray-100 "
            >
              İletşim
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <img
          className="object-cover w-full h-full rounded-md"
          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/static/hero-background.jpg`}
          alt="hero-background"
        />
      </div>
    </div>
  );
}
