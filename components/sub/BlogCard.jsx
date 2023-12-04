import React from "react";
import DOMPurify from "dompurify";
import Link from "next/link";
import moment from "moment";

export default function BlogCard({ article }) {
  function formatDate(date) {
    return moment(String(date)).format("DD-MM-YYYY");
  }

  return (
    <div>
      <div className="flex bg-white transition hover:shadow-xl mb-8">
        <div className="hidden sm:block sm:basis-56 h-52">
          <img
            alt="Post Image"
            src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${article.image}`}
            className="bg-cover w-full h-full"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between border-gray-900/10 border">
          <div className=" p-4 sm:border-l-transparent sm:p-6">
            <div className="flex gap-x-2 lg:mb-6 mb-2">
              <Link
                href={`/blog?category=${article.category.name}`}
                className="text-teal-700 uppercase text-sm font-medium"
              >
                {article.category.name}
              </Link>
              <p className="text-sm text-slate-500">
                {formatDate(article.updated_at)}
              </p>
            </div>

            <Link
              href={{
                pathname: `blog/${article.slug}`,
              }}
            >
              <img
                alt="Post Image"
                src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${article.image}`}
                className="block sm:hidden sm:basis-56 aspect-square lg:h-full h-40 w-full"
              />

              <h1 className="font-bold uppercase text-gray-900 lg:mb-5 lg:pt-0 pt-4 ">
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
    </div>
  );
}
