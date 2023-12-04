import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [isSuccessed, setSuccessStatus] = useState(null);
  const [isSending, setSendingStatus] = useState(false);
  const form = useRef();
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  function onChange(value) {
    setRecaptchaToken(value);
  }

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
            setSendingStatus(false);
            recaptchaToken ? setSuccessStatus(true) : setSuccessStatus(false);
            reset();
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
    <>
      {isSuccessed == true && (
        <div
          className="p-4 text-sm text-green-800 rounded-lg bg-green-50  "
          role="alert"
        >
          <span className="font-medium">Teşekkürler!</span> Mesajınız başarıyla
          gönderildi.
        </div>
      )}
      {isSuccessed == false && (
        <div
          className="p-4 text-sm text-red-800 rounded-lg bg-red-50  "
          role="alert"
        >
          <span className="font-medium">Üzgünüm!</span> Maalesef bir hata
          nedeniyle gönderilemedi! Lütfen 'Ben robot değilim' bölümünün
          tamamlandığından emin ol!
        </div>
      )}

      <form onSubmit={handleSubmit(sendEmail)} ref={form} className="">
        <div className="-mx-2 md:items-center md:flex">
          <div className="flex-1 px-2">
            <label className="block mb-2 text-sm text-gray-600 required ">
              Tam Adınız*
            </label>
            <input
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 rounded-md bg-transparent border border-gray-600  focus:border-teal-600 focus:border-teal-700  focus:ring-teal-700 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("user_name", { required: true, minLength: 5 })}
              aria-invalid={errors.user_name ? "true" : "false"}
            />
            {errors.user_name?.type === "required" && (
              <p role="alert" className="text-red-600 pt-2">
                Bu alan zorunludur!
              </p>
            )}
            {errors.user_name && errors.message?.type === "minLength" && (
              <p role="alert" className="text-red-600 pt-2">
                Girmeniz gereken minimum karakter sayısı: 5!
              </p>
            )}
          </div>

          <div className="flex-1 px-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm text-gray-600 ">Konu*</label>

            <input
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-transparent  border border-gray-600 rounded-md focus:border-teal-600 focus:border-teal-700  focus:ring-teal-700 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("subject", { required: true, minLength: 5 })}
              aria-invalid={errors.subject ? "true" : "false"}
            />
            {errors.subject?.type === "required" && (
              <p role="alert" className="text-red-600 pt-2">
                Bu alan zorunludur!
              </p>
            )}
            {errors.user_name && errors.message?.type === "minLength" && (
              <p role="alert" className="text-red-600 pt-2">
                Girmeniz gereken minimum karakter sayısı: 5!
              </p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-600 ">
            Email Adresi*
          </label>
          <input
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-transparent border border-gray-600 rounded-md focus:border-teal-600 focus:border-teal-700  focus:ring-teal-700 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("user_email", {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            type="email"
            aria-invalid={errors.user_email ? "true" : "false"}
          />
          {errors.user_email?.type === "required" && (
            <p role="alert" className="text-red-600 pt-2">
              Bu alan zorunludur!
            </p>
          )}
          {errors.email && <span role="alert">{errors.email.message}</span>}
        </div>
        <div className="w-full mt-4">
          <label className="block mb-2 text-sm text-gray-600 ">
            Mesajınız*
          </label>
          <textarea
            {...register("message", { required: true, minLength: 25 })}
            type="text"
            className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 rounded-md bg-transparent border border-gray-600 md:h-56 focus:border-teal-600 focus:border-teal-700  focus:ring-teal-700 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {errors.message?.type === "required" && (
            <p role="alert" className="text-red-600 pt-2">
              Bu alan zorunludur!
            </p>
          )}
          {errors.message && errors.message?.type === "minLength" && (
            <p role="alert" className="text-red-600 pt-2">
              Girmeniz gereken minimum karakter sayısı: 25!
            </p>
          )}
        </div>

        <ReCAPTCHA
          className="mt-4"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
          onChange={onChange}
        />

        {isSending ? (
          <button
            type="submit"
            className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide flex justify-center text-white capitalize transition-colors duration-300 transform rounded-md bg-transparent border border-gray-600  focus:border-teal-600 focus:border-teal-700 focus:ring-teal-700 focus:outline-none focus:ring focus:ring-opacity-40"
            value="Gönder"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-200 animate-spin  fill-blue-600 text-center"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#008080"
              />
            </svg>
          </button>
        ) : (
          <button className="w-full px-6 py-3 mt-4 text-sm font-medium rounded-md tracking-wide flex justify-center text-white capitalize transition-colors duration-300 transform bg-gray-600 hover:bg-slate-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            <span>Gönder</span>
          </button>
        )}
      </form>
    </>
  );
}
