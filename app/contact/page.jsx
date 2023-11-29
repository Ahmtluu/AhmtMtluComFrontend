"use client";
import React, { useState } from "react";

export default function Contact() {
  const [isSuccessed, setSuccessStatus] = useState();

  function sendEmail(values) {
    this.isLoading = true;
    emailjs
      .sendForm(
        process.env.SERVICE_USER_ID,
        process.env.SERVICE_EMAIL_TEMPLATE,
        this.$refs.form,
        process.env.SERVICE_PASSWORD
      )
      .then(
        () => {
          this.$refs.form.reset();
          this.isSuccessed = true;
          this.isLoading = false;
        },
        (error) => {
          this.isSuccessed = false;
          this.isLoading = false;
        }
      );
  }

  return (
    <div class="container px-6 mt-32 lg:h-screen mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 justify-center items-center">
      <div>
        <p class="font-medium text-[#008080] ">iletişim</p>

        <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">
          Benimle iletişime geç!
        </h1>

        <p class="mt-3 text-gray-500 ">
          Benimle her zaman iletişime geçebilirsin! Sizden haber almayı ve
          sorularınızı yanıtlamayı bekliyorum. Bir bilgisayar mühendisi olarak
          olarak projelerinizi ve hayalleriniz paylaşmaya hazırım. İster iş
          hakkında bir sorunuz olsun, ister sadece merhaba demek isteyin, hep
          buradayım.
        </p>
        <div class="border-b-2 my-6 w-5/6" />
        <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
          <div class="flex items-center">
            <span class="inline-block p-3 text-[#008080] bg-blue-100/80 "></span>
            <div class="ml-2">
              <h2 class="text-base font-medium text-gray-800 ">Email</h2>

              <a
                href="mailto:ahmtt.mtlu@gmail.com"
                class="mt-2 text-sm text-[#008080] "
              >
                ahmtt.mtlu@gmail.com
              </a>
            </div>
          </div>

          <div class="flex items-center">
            <span class="inline-block p-3 text-[#008080] bg-blue-100/80 "></span>
            <div class="ml-2">
              <h2 class="text-base font-medium text-gray-800 ">Linkedin</h2>

              <a
                href="https://github.com/Ahmtluu"
                class="mt-2 text-sm text-[#008080] "
              >
                Ahmtluu
              </a>
            </div>
          </div>
          <div class="flex items-center">
            <span class="inline-block p-3 text-[#008080] bg-blue-100/80 "></span>
            <div class="ml-2">
              <h2 class="text-base font-medium text-gray-800 ">Github</h2>

              <a
                href="https://github.com/Ahmtluu"
                class="mt-2 text-sm text-[#008080] "
              >
                Ahmtluu
              </a>
            </div>
          </div>
          <div class="flex items-center">
            <span class="inline-block p-3 text-[#008080] bg-blue-100/80 "></span>
            <div class="ml-2">
              <h2 class="text-base font-medium text-gray-800 ">Bionluk</h2>

              <a
                href="https://bionluk.com/ahmtlu"
                class="mt-2 text-sm text-[#008080] "
              >
                Ahmtluu
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="py-6  grid grid-cols-1 gap-12">
        {isSuccessed == true && (
          <div
            class="p-4 text-sm text-green-800 rounded-lg bg-green-50  "
            role="alert"
          >
            <span class="font-medium">Teşekkürler!</span> Mesajınız başarıyla
            gönderildi.
          </div>
        )}

        {!isSuccessed == false && (
          <div
            class="p-4 text-sm text-red-800 rounded-lg bg-red-50  "
            role="alert"
          >
            <span class="font-medium">Üzgünüm!</span> Maalesef bir hata
            nedeniyle gönderilemedi!
          </div>
        )}
      </div>
    </div>
  );
}
