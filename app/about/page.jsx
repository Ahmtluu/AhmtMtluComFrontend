import React from "react";

import Technologies from "@/components/Technologies";
import Image from "next/image";
import { ServicesList } from "@/constants";

export default function About() {
  return (
    <div className="lg:mb-0 mb-12">
      <div className="container px-6 py-0 lg:py-32 mx-auto block lg:flex">
        <div className="mx-auto flex md:flex-row flex-col-reverse items-start">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="w-full">
              <p className="font-medium text-[#008080] ">Selam</p>

              <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl e">
                Ben Ahmet Mutlu!
              </h1>

              <p className="mt-3 text-gray-500 ">
                Burada sizlere web geliştirme yeteneklerimi ve projelerimi
                sergilemekten heyecan duyuyorum.
              </p>
              <div className="border-b-2 mt-4 lg:w-full" />
            </div>

            <div className="container my-4">
              <h2 className="title-font sm:text-3xl text-2xl my-4 font-medium text-[#008080]">
                Neden Ben?
              </h2>

              <p>
                Ben sadece bir yazılım geliştirici değil, aynı zamanda bir
                problem çözücüyüm. Çeşitli projelerde yer alarak edindiğim
                deneyimlerle, karmaşık sorunları basit ve etkili çözümlere
                dönüştürme konusundaki becerilerimi geliştirdim. Kodlama sanatı
                benim için sadece bir meslek değil, aynı zamanda bir tutku.
              </p>
            </div>
            <div className="container my-4">
              <h2 className="title-font sm:text-3xl text-2xl my-4 font-medium text-[#008080]">
                Neler Yapıyorum?
              </h2>

              <p>
                Portföyümde göreceğiniz projeler, çeşitli sektörlerde ve müşteri
                ihtiyaçlarına özel olarak tasarlanmış web çözümlerini içeriyor.
                Front-end ve back-end teknolojileri arasında denge kurarak,
                estetik ve performans arasında mükemmel bir uyum sağlıyorum.
                Sadece kod yazmakla kalmıyor, aynı zamanda projelerinizi hayata
                geçirmek için stratejik düşünce ve yaratıcı yaklaşımlar
                kullanıyorum.
              </p>
            </div>

            <div className="w-full my-4 ">
              <div className="lg:max-w-lg">
                <h2 className="sm:text-3xl text-2xl my-4 font-medium text-[#008080]">
                  Neler Sunuyorum
                </h2>
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
                        className="flex items-center text-gray-800 -px-3 text-left"
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
              </div>
            </div>

            <div className="mt-6">
              <p>
                Eğer bir projeniz varsa veya sadece merhaba demek istiyorsanız,
                benimle iletişime geçmekten çekinmeyin. Profesyonel bir
                işbirliği kurmak ve birlikte harika projelere imza atmak için
                sabırsızlanıyorum.
              </p>
              <p className="py-4 font-bold">Teşekkür ederim 🙏</p>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full py-4 lg:mt-0 mt-32 flex justify-center ">
            <img
              className=" h-[16rem] lg:h-[32rem] rounded-md"
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
