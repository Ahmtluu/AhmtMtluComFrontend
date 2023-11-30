import React from "react";

import Technologies from "@/components/Technologies";

const services = [
  {
    title: "Modern ve kullanıcı dostu web siteleri",
  },
  {
    title: "Duyarlı tasarım (Responsive Design) ile mobil uyumlu çözümler",
  },
  {
    title: "Özelleştirilmiş web uygulamaları",
  },
  {
    title: "Teknik destek ve bakım hizmetleri",
  },
];

export default function About() {
  return (
    <div className="lg:mb-0 mb-12">

      <div class="container px-6 py-0 lg:py-32 mx-auto block lg:flex">
        <div class="mx-auto flex md:flex-row flex-col-reverse items-start">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div class="w-full">
              <p class="font-medium text-[#008080] ">Selam</p>

              <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl e">
                Ben Ahmet Mutlu!
              </h1>

              <p class="mt-3 text-gray-500 ">
                Burada sizlere web geliştirme yeteneklerimi ve projelerimi
                sergilemekten heyecan duyuyorum.
              </p>
              <div class="border-b-2 mt-4 lg:w-full" />
            </div>

            <div class="container my-4">
              <h2 class="title-font sm:text-3xl text-2xl my-4 font-medium text-[#008080]">
                Neden Ben?
              </h2>

              <p>
                Ben sadece bir yazılım geliştirici değil, aynı zamanda bir
                problem çözücüyüm. Çeşitli projelerde yer alarak edindiğim
                deneyimlerle, karmaşık sorunları basit ve etkili çözümlere
                dönüştürme konusundaki becerilerimi geliştirdim. Kodlama
                sanatı benim için sadece bir meslek değil, aynı zamanda bir
                tutku.
              </p>
            </div>
            <div class="container my-4">
              <h2 class="title-font sm:text-3xl text-2xl my-4 font-medium text-[#008080]">
                Neler Yapıyorum?
              </h2>

              <p>
                Portföyümde göreceğiniz projeler, çeşitli sektörlerde ve
                müşteri ihtiyaçlarına özel olarak tasarlanmış web çözümlerini
                içeriyor. Front-end ve back-end teknolojileri arasında denge
                kurarak, estetik ve performans arasında mükemmel bir uyum
                sağlıyorum. Sadece kod yazmakla kalmıyor, aynı zamanda
                projelerinizi hayata geçirmek için stratejik düşünce ve
                yaratıcı yaklaşımlar kullanıyorum.
              </p>
            </div>

            <div class="w-full my-4 ">
              <div class="lg:max-w-lg animate-fade-up">
                <h2 class="sm:text-3xl text-2xl my-4 font-medium text-[#008080]">
                  Neler Sunuyorum
                </h2>
                <p class="mt-4 text-gray-600 ">
                  Portföyümde görmüş olduğunuz projeler, çeşitli sektörlerde
                  ve müşteri ihtiyaçlarına özel olarak tasarlanmış web
                  çözümlerini içeriyor.
                </p>

                <div class="grid gap-6 mt-8 sm:grid-cols">
                  {services.map((service, index) => {
                    return (
                      <div
                        key={index}
                        class="flex items-center text-gray-800 -px-3 text-left"
                      >
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

                        <span class="mx-3">{service.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div class="mt-6">
              <p>
                Eğer bir projeniz varsa veya sadece merhaba demek
                istiyorsanız, benimle iletişime geçmekten çekinmeyin.
                Profesyonel bir işbirliği kurmak ve birlikte harika projelere
                imza atmak için sabırsızlanıyorum.
              </p>
              <p class="py-4 font-bold">Teşekkür ederim 🙏</p>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full py-4 lg:mt-0 mt-32 flex justify-center ">
            <img
              class=" h-[16rem] lg:h-[32rem] rounded-md"
              src={`${process.env.NEXT_PUBLIC_API_URL}/storage/static/ahmtmtlu.jpg`}
              alt="me"
            />
          </div>
        </div>
      </div>

      <Technologies />
    </div>
  );
}
