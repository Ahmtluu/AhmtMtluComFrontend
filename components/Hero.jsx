import React from "react";

export default function Hero() {
  return (
    <div class="container flex flex-col lg:px-6 px-0 py-10 mx-auto space-y-12 lg:py-16 lg:flex-row lg:items-center my-24">
      <div class="w-full lg:w-1/2">
        <div class="lg:max-w-lg animate-fade-up">
          <h1 class="text-3xl font-semibold tracking-wide text-gray-800  lg:text-4xl">
            Neler Sunuyorum
          </h1>
          <p class="mt-4 text-gray-600 ">
            Portföyümde görmüş olduğunuz projeler, çeşitli sektörlerde ve
            müşteri ihtiyaçlarına özel olarak tasarlanmış web çözümlerini
            içeriyor.
          </p>

          <div class="grid gap-6 mt-8 sm:grid-cols">
            <div class="flex items-center text-gray-800 -px-3 ">
              <svg
                class="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">Modern ve kullanıcı dostu web siteleri</span>
            </div>

            <div class="flex items-center text-gray-800 -px-3 ">
              <svg
                class="lg:w-5 lg-h-5 mx-3 w-6 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">
                Responsive Design ile mobil uyumlu çözümler
              </span>
            </div>

            <div class="flex items-center text-gray-800 -px-3 ">
              <svg
                class="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">Özelleştirilmiş web uygulamaları</span>
            </div>

            <div class="flex items-center text-gray-800 -px-3 ">
              <svg
                class="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">Teknik destek ve bakım hizmetleri</span>
            </div>
          </div>
          <div class="mt-5">
            <p class="inline-flex items-center justify-center py-3 mr-5 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
              Hemen iletişime geç!
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </p>
            <a
              href="/contact"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-2 border-gray-300 hover:border-gray-700 hover:bg-slate-700 hover:text-white duration-500 transition-colors focus:ring-4 focus:ring-gray-100 "
            >
              İletşim
            </a>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center w-full lg:w-1/2">
        <img
          class="object-cover w-full h-full"
          src="../public/hero-background.jpg"
          alt="glasses photo"
        />
      </div>
    </div>
  );
}
