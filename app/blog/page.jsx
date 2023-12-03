"use client";
import React from "react";
import moment from "moment";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useGetPostsQuery } from "../Redux/services/post";
import DOMPurify from "dompurify";

export default function Blog() {
  const searchParams = useSearchParams();
  const pageNumber = searchParams.get("page");
  const categoryName = searchParams.get("category");

  console.log(pageNumber + " " + categoryName);

  const { data, error, isLoading } = useGetPostsQuery({
    pageNumber,
    categoryName,
  });
  console.log;

  const loadingPost = ["item1", "item2", "item3"];

  function formatDate(date) {
    return moment(String(date)).format("DD-MM-YYYY");
  }

  return (
    <section className="">
      <div className="container py-0 lg:pb-32 mt-32 lg:h-4/5 mx-auto block lg:flex px-6">
        <div className="lg:w-9/12 w-full">
          {isLoading &&
            !error &&
            loadingPost.map((article, index) => {
              return (
                <div
                  className="flex shadow-sm backdrop-blur-lg bg-grey/80 transition hover:shadow-xl mb-8 animate-pulse"
                  key={index}
                >
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
            })}
          {!isLoading && !error && data.posts.data.length === 0 && (
            <h3 className="flex justify-center items-center font-bold uppercase text-slate-700 mt-28">
              Henüz herhangi bir yazı hazırlanmamıştır
            </h3>
          )}

          {!isLoading &&
            !error &&
            data &&
            data.posts.data.map((article, index) => {
              return (
                <div key={index}>
                  <div
                    className="flex bg-white transition hover:shadow-xl mb-8"
                    key={index}
                  >
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                      <time
                        dateTime="2022-10-10"
                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                      >
                        <span>2022</span>
                        <span className="w-px flex-1 bg-gray-900/10"></span>
                        <span>Oct 10</span>
                      </time>
                    </div>

                    <div className="hidden sm:block sm:basis-56">
                      <img
                        alt="Post Image"
                        src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${article.image}`}
                        className="aspect-square h-full w-full"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <Link
                          href={`/blog?category=${article.category.name}`}
                          className="text-teal-700 uppercase text-sm font-medium"
                        >
                          {article.category.name}
                        </Link>
                        <Link
                          href={{
                            pathname: `blog/${article.slug}`,
                          }}
                        >
                          <img
                            alt="Post Image"
                            src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${article.image}`}
                            className="block sm:hidden sm:basis-56 aspect-square h-full w-full"
                          />

                          <h1 className="font-bold uppercase text-gray-900">
                            {article.title}
                          </h1>

                          <div
                            className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(article.body),
                            }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="border-b-2 my-6" />
                  <div className="flex justify-between">
                    <div className="flex">
                      {data.posts && data.posts.prev_page_url !== null && (
                        <Link
                          href={{
                            pathname: "/blog",
                            query: categoryName
                              ? `category=${categoryName}&page=${
                                  data.posts.current_page - 1
                                }`
                              : `page=${data.posts.current_page - 1}`,
                          }}
                          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white dark:bg-gray-800 dark:text-gray-200 hover:bg-slate-700 dark:hover:bg-teal-700 hover:text-white dark:hover:text-gray-200"
                        >
                          <div className="flex items-center -mx-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 mx-1 rtl:-scale-x-100"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16l-4-4m0 0l4-4m-4 4h18"
                              />
                            </svg>

                            <span className="mx-1"> previous </span>
                          </div>
                        </Link>
                      )}

                      <Link
                        href={`/blog?page=${data.posts.current_page}`}
                        className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform border border-slate-700 bg-white sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-slate-700 dark:hover:bg-teal-500 hover:text-white dark:hover:text-gray-200"
                      >
                        {data.posts.current_page}
                      </Link>
                      {data.posts && data.posts.next_page_url !== null && (
                        <Link
                          href={{
                            pathname: "/blog",
                            query: categoryName
                              ? `category=${categoryName}&page=${
                                  data.posts.current_page + 1
                                }`
                              : `page=${data.posts.current_page + 1}`,
                          }}
                          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white dark:bg-gray-800 dark:text-gray-200 hover:bg-slate-700 dark:hover:bg-teal-700 hover:text-white dark:hover:text-gray-200"
                        >
                          <div className="flex items-center -mx-1">
                            <span className="mx-1"> Next </span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 mx-1 rtl:-scale-x-100"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </div>
                        </Link>
                      )}
                    </div>

                    <p className="flex justify-center items-center text-slate-700 font-semibold">
                      Toplam sayfa: {data.posts.last_page}
                    </p>
                  </div>
                </div>
              );
            })}
          {error && (
            <h3 class="font-bold uppercase text-gray-900 px-6">
              Şu anda maalesef yazılara ulaşılamıyor lütfen daha sonra tekrar
              deneyiniz!
            </h3>
          )}
        </div>
      </div>

      <div className="lg:w-3/12 px-6"></div>
    </section>
  );
}
