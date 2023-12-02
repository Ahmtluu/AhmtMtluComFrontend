"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import ContactForm from "@/components/sub/ContactForm";

export default function Contact() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [isSuccessed, setSuccessStatus] = useState(null);
  const [isSending, setSendingStatus] = useState(false);
  const form = useRef();

  const sendEmail = (value, e) => {
    e.preventDefault();
    setSendingStatus(true);

    try {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_USER_ID,
          process.env.NEXT_PUBLIC_SERVICE_EMAIL_TEMPLATE,
          form.current,
          process.env.NEXT_PUBLIC_SERVICE_PASSWORD
        )
        .then(
          () => {
            reset();
            setSendingStatus(false);
            setSuccessStatus(true);
          },
          (error) => {
            setSuccessStatus(false);
            setSendingStatus(false);
          }
        );
    } catch (error) {
      setSuccessStatus(false);
      setSendingStatus(false);
    }
  };

  return (
    <div className="container lg:px-6 mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 justify-center items-center lg:mt-0 mt-32">
      <div>
        <p className="font-medium text-[#008080] ">iletişim</p>

        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">
          Benimle iletişime geç!
        </h1>

        <p className="mt-3 text-gray-500 ">
          Benimle her zaman iletişime geçebilirsin! Sizden haber almayı ve
          sorularınızı yanıtlamayı bekliyorum. Bir bilgisayar mühendisi olarak
          olarak projelerinizi ve hayalleriniz paylaşmaya hazırım. İster iş
          hakkında bir sorunuz olsun, ister sadece merhaba demek isteyin, hep
          buradayım.
        </p>
        <div className="border-b-2 my-6 w-5/6" />
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
          <div className="flex items-center">
            <span className="inline-block p-3 text-[#008080] bg-blue-100/80 ">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <div className="ml-2">
              <h2 className="text-base font-medium text-gray-800 ">Email</h2>

              <Link
                href="mailto:ahmtt.mtlu@gmail.com"
                className="mt-2 text-sm text-[#008080] "
              >
                ahmtt.mtlu@gmail.com
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <span className="inline-block p-3 text-[#008080] bg-blue-100/80 ">
              {" "}
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </span>
            <div className="ml-2">
              <h2 className="text-base font-medium text-gray-800 ">Linkedin</h2>

              <Link
                href="https://www.linkedin.com/in/ahmet-mutlu-1b223017a/"
                className="mt-2 text-sm text-[#008080] "
              >
                Ahmtluu
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <span className="inline-block p-3 text-[#008080] bg-blue-100/80 ">
              {" "}
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </span>
            <div className="ml-2">
              <h2 className="text-base font-medium text-gray-800 ">Github</h2>

              <Link
                href="https://github.com/Ahmtluu"
                className="mt-2 text-sm text-[#008080] "
              >
                Ahmtluu
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <span className="inline-block p-3 text-[#008080] bg-blue-100/80 ">
              <FontAwesomeIcon icon={faCode} className="w-6 h-6" />
            </span>
            <div className="ml-2">
              <h2 className="text-base font-medium text-gray-800 ">Bionluk</h2>

              <Link
                href="https://bionluk.com/ahmtlu"
                className="mt-2 text-sm text-[#008080] "
              >
                Ahmtluu
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 lg:mt-32 mb-16 grid grid-cols-1 gap-12">
        <ContactForm />
      </div>
    </div>
  );
}
