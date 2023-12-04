"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useGetPostsQuery } from "../Redux/services/post";
import BlogPageLoadingSkeleton from "@/components/main/BlogPageLoading";
import { loadingPostSkeletonNumber } from "@/constants/index";
import BlogCard from "@/components/sub/BlogCard";

export default function Blog() {
  const searchParams = useSearchParams();
  const pageNumber = searchParams.get("page");
  const categoryName = searchParams.get("category");

  const { data, error, isLoading } = useGetPostsQuery({
    pageNumber: pageNumber,
    category: categoryName,
  });

  return (
    <section className="">
      <div className="container py-0 lg:pb-32 mt-32 lg:h-4/5 mx-auto block lg:flex lg:px-6">
        <div className="lg:w-9/12 w-full">
          {isLoading &&
            loadingPostSkeletonNumber.map((index) => {
              return <BlogPageLoadingSkeleton key={index} />;
            })}
          {!isLoading && !error && data.posts.data.length === 0 && (
            <h3 className="flex justify-center items-center font-bold uppercase text-slate-700 mt-28">
              Henüz herhangi bir yazı hazırlanmamıştır
            </h3>
          )}

          {data && (
            <div>
              {data.posts.data.map((article, index) => {
                return <BlogCard article={article} />;
              })}
              <div className="flex justify-between mb-8">
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

                        <span className="mx-1"> Geri </span>
                      </div>
                    </Link>
                  )}

                  <Link
                    href={`/blog?page=${data.posts.current_page}`}
                    className=" px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform border border-slate-700 bg-white sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-slate-700 dark:hover:bg-teal-500 hover:text-white dark:hover:text-gray-200"
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
                        <span className="mx-1"> İleri </span>

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
          )}
          {error && notFound()}
        </div>
      </div>

      <div className="lg:w-3/12 px-6"></div>
    </section>
  );
}
